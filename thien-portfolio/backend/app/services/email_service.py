import logging
import smtplib
from email.message import EmailMessage
from datetime import datetime, timezone
from app.core.config import settings

logger = logging.getLogger("app.email")

def send_contact_notification_sync(name: str, email: str, subject: str, message: str) -> bool:
    """Send email notification to portfolio owner when a new contact message is received."""
    if not settings.ENABLE_EMAIL_NOTIFICATION:
        logger.info("[Email Service] Email notification is disabled in settings.")
        return False

    if not settings.SMTP_USER or not settings.SMTP_PASSWORD:
        logger.info(
            f"[Email Service] SMTP credentials not configured in .env. "
            f"Simulated dispatch for contact message from '{email}' to '{settings.RECEIVER_EMAIL}'."
        )
        return False

    try:
        msg = EmailMessage()
        msg['Subject'] = f"[Portfolio] {subject} - từ {name}"
        msg['From'] = settings.SMTP_USER
        msg['To'] = settings.RECEIVER_EMAIL
        msg['Reply-To'] = email

        formatted_time = datetime.now(timezone.utc).strftime("%d/%m/%Y %H:%M:%S UTC")
        body_text = f"""Xin chào Ngô Minh Thiên,

Bạn vừa nhận được một liên hệ mới từ Website Portfolio cá nhân:

============================================================
THÔNG TIN NGƯỜI GỬI:
- Họ và tên: {name}
- Email liên hệ: {email}
- Chủ đề: {subject}
- Thời gian gửi: {formatted_time}
============================================================

NỘI DUNG LỜI NHẮN:
{message}

============================================================
* Gợi ý: Bạn có thể bấm Reply / Trả lời trực tiếp email này để phản hồi tới {email}.
"""
        msg.set_content(body_text)

        logger.info(f"Connecting to SMTP server {settings.SMTP_HOST}:{settings.SMTP_PORT}...")
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=12) as server:
            if settings.SMTP_TLS:
                server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            server.send_message(msg)
            logger.info(f"Email successfully dispatched to {settings.RECEIVER_EMAIL} for message from {email}!")
            return True

    except Exception as e:
        logger.error(f"Error sending email notification via SMTP: {e}")
        return False
