# 🚀 PROJECT CONTEXT: PORTFOLIO NGÔ MINH THIÊN

> **Tài liệu lưu trữ ngữ cảnh toàn diện dành cho Developer & AI Assistant (Antigravity / Gemini / Copilot).**  
> Bất cứ khi nào mở phiên làm việc mới, bạn chỉ cần gõ `@PROJECT_CONTEXT.md` hoặc AI sẽ tự đọc file này để nắm toàn bộ kiến trúc mà không bị quên giữa chừng!

---

## 📌 1. Thông Tin Tổng Quan Dự Án
- **Chủ sở hữu:** Ngô Minh Thiện (Software Engineer • Full-Stack Developer)
- **Học vấn:** Cử nhân Kỹ thuật Phần mềm (2021 – 2025) – Đại học Công nghệ TP.HCM (HUTECH)
- **Kinh nghiệm thực chiến:** Software Engineer tại Công ty CP Công nghệ AITC (08/2025 – 06/2026), tham gia bàn giao 4 hệ thống phần mềm doanh nghiệp (Tân Hòa Chatbot & Log Monitoring, Equipment Management System, QR Code E-Card Event, Web Platform).
- **GitHub Repo:** `https://github.com/phuocthien412/KINH_NGHIEM_CA_NHAN`
- **GitHub Pages Live Site:** `https://phuocthien412.github.io/KINH_NGHIEM_CA_NHAN/`
- **Email nhận liên hệ:** `minhngothien1@gmail.com` (phụ: `minhngothien3@gmail.com`)
- **Điện thoại:** `(+84) 0987 176 434`

---

## 🛠️ 2. Tech Stack & Kiến Trúc Frontend
- **Framework:** React 19 (React DOM 19)
- **Build Tool:** Vite 8.x + TypeScript (Strict Type Checking)
- **Styling:** Tailwind CSS v4 + Tailwind Animate + Glassmorphism UI
- **State Management:** Zustand (`usePortfolioStore`)
- **Icons:** Lucide React (`lucide-react`)
- **Routing:** React Router DOM v7 với `BrowserRouter` (Clean URL, 100% chuẩn Production/Senior không còn dấu `#`), kết hợp Cloudflare SPA routing (`not_found_handling: single-page-application`).
- **Đa ngôn ngữ (i18n):** Song ngữ Anh - Việt (VI / EN) hỗ trợ chuyển đổi mượt mà qua Zustand và từ điển trong `src/i18n/locales/`
- **Contact Form Backend:** Web3Forms API tích hợp trực tiếp, chuyển tiếp tin nhắn bảo mật về hòm thư điện tử (Gửi kèm cả email subject lẫn dòng trường "Chủ đề trao đổi" trong bảng nội dung thư).
- **Hệ Thống Phòng Thủ & Bảo Mật Toàn Diện (Security Hardening):**
  - **Chống lộ mã & bí mật (Secrets & Sourcemaps):** Đã tắt Source Map production (`sourcemap: false` trong `vite.config.ts`), bổ sung chặt chẽ `.env` và `*.local` vào `.gitignore`.
  - **Bảo vệ Contact Form chống Spam & Flood:**
    - Cài đặt bẫy **Honeypot** ngầm (`_gotcha` / `botcheck` ẩn): Nếu bot tự động quét và điền dữ liệu vào trường này, hệ thống sẽ âm thầm hủy request mà không gửi đi, triệt tiêu bot rác.
    - **Client-side Rate Limiting (Cooldown 60s):** Lưu mốc thời gian vào `localStorage`, chặn ngay lập tức nếu người dùng hoặc công cụ cố tình spam gửi tin nhắn liên tục trong 60 giây.
    - Vô hiệu hóa nút gửi (`disabled`) và hiển thị Spinner ngay khi nhấn gửi.
  - **Vệ sinh dữ liệu & Phòng chống XSS:** 100% không dùng `dangerouslySetInnerHTML`, toàn bộ liên kết ngoại (`target="_blank"`) đều gắn chặt `rel="noopener noreferrer"`.
  - **Tối ưu tránh "Tự DDoS":** Kiểm tra 100% `useEffect` sạch vòng lặp vô tận, bổ sung `loading="lazy" decoding="async"` cho toàn bộ ảnh trên trang để tiết kiệm băng thông.
  - **Security Headers & CSP (`public/_headers`):** Cấu hình tự động cho Cloudflare với `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, và `Content-Security-Policy` chặt chẽ.

---

## 🎨 3. Quy Chuẩn Giao Diện (Design System & UX)
 
### Dark Mode & Vũ Trụ (Cosmic Mode)
- Nền dark mode sử dụng `CosmicSpaceAtmosphere` canvas với hiệu ứng sao vũ trụ hạt nano chuyển động.
- **Quy tắc tuyệt đối:** Không dùng nền đen đục (`bg-black` hoặc `bg-[#030712]`) làm đứt đoạn vũ trụ. Mọi component và section dùng `dark:bg-transparent` hoặc thẻ kính mờ `dark:bg-card/70 backdrop-blur-xl` để vũ trụ xuyên suốt toàn bộ website.

### Light Mode
- Tông màu sáng trong trẻo: Nền `bg-slate-50`, thẻ `bg-white/95`, viền mỏng `border-slate-200/80`, bóng đổ nhẹ `shadow-sm`.
- Mặt sau lá bài dự án (`ProjectFlipCard`): Sử dụng `bg-white dark:bg-[#06120e]`, chữ đậm `text-slate-900 dark:text-white`, tag màu xanh ngọc bích chuẩn accessibility.

### Sơ Đồ Lộ Trình Hành Trình Kỹ Sư (`HomeJourneyTeaser`)
- Đường lượn sóng phát sáng hữu cơ (Organic Wavy Glowing Line) với 3 điểm Pin tròn (Đại học - Cyan, Thực chiến AITC - Teal, Bứt phá - Emerald) và dải nét đứt tương lai. Dây nối trực tiếp vào mép hình tròn và không bao giờ đè lên mặt pin.
- **Cân bằng 3 thẻ:** Thiết lập chiều cao đồng bộ chuẩn mực (`min-h-[310px] sm:min-h-[330px]` với `mt-auto` neo thanh công nghệ), giúp 3 thẻ luôn thẳng hàng chằn chặn từ trên xuống dưới.
- **Tối ưu Native Mobile:** 
  - Bổ sung huy hiệu `#01`, `#02`, `#03` nổi bật trên mobile.
  - Hỗ trợ thao tác chạm mượt mà (Touch-friendly) với chỉ dẫn "Chạm mở tư duy kỹ sư / Chạm để thu gọn".
  - Triệt tiêu hoàn toàn rung giật bằng hitbox đệm cố định 56×56.

### Tối Ưu Trải Nghiệm Di Động Toàn Diện (Mobile & Native)
- **Triệt tiêu hoàn toàn lỗi vỡ layout ngang (Zero Horizontal Overflow):**
  - Cấu hình `html, body { overflow-x: hidden; max-width: 100vw; width: 100%; position: relative; }` cùng container gốc `App.tsx` với `overflow-x-hidden w-full max-w-full`.
  - Khắc phục triệt để `overflow-visible` tại `HomeJourneyTeaser` đã từng khiến các luồng sáng nền 450px tràn ra ngoài rìa phải màn hình di động, gây ra hiện tượng mép đen/tím khi vuốt ngang.
- **Thanh điều hướng Mobile Native (Navbar Mobile Polish):**
  - Logo trên di động được tinh giản gọn gàng: Ẩn phụ đề `SOFTWARE ENGINEER` trên màn hình nhỏ (`hidden sm:inline-block`), giữ lại `NM` badge và `MINH THIÊN` kèm chấm radar xanh báo trạng thái.
  - Phím đổi ngôn ngữ `LanguageToggle` trên header được chuyển sang hiển thị từ `sm+`; trên màn hình di động, phím được đặt nổi bật, dễ thao tác ngay đầu ngăn kéo `Mobile Drawer Overlay`.
  - Giúp thanh header trên di động luôn thoáng mát, không bị chèn ép; phím đổi theme (Dark/Light) và phím menu Hamburger luôn hiển thị trọn vẹn, dễ bấm ở mọi kích cỡ màn hình.
- **iOS Safari Input Zoom Prevention:** Tất cả các ô nhập liệu được thiết lập `text-base sm:text-sm` để ngăn chặn hiện tượng tự động phóng to màn hình khó chịu trên iPhone khi focus vào input.
- **Tối ưu cụm nút Hero CTA trên Mobile:**
  - Hàng 1: Nút chính **"Xem các dự án"** chiếm toàn chiều rộng (full-width), màu gradient ngọc bích nổi bật.
  - Hàng 2: Hai nút phụ **"Xem CV"** và **"Liên hệ với tôi"** chia đều 2 cột cân đối (`grid grid-cols-2`), bo góc `rounded-xl` đồng bộ và chiều cao chuẩn 44px (`h-11`). Loại bỏ hoàn toàn lỗi nút bị kéo dãn thành hình elip dày cộm.
  - Trên Desktop: Cả 3 nút dàn đều 1 hàng ngang sang trọng.
- **Khung Avatar Hero Responsive:** Khung tròn hành tinh Avatar co giãn thích ứng `w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96` được căn giữa hoàn hảo trên điện thoại.
- **Touch Targets:** Các nút bấm, icon và card có diện tích chạm chuẩn tối thiểu 44px, hỗ trợ phản hồi haptic `active:scale-[0.98]`.
- **Breadcrumbs:** Đã gỡ bỏ toàn bộ thanh breadcrumbs ở tất cả các trang (`/about`, `/journey`, `/skills`, `/projects`, `/contact`) giúp giao diện thoáng đãng, tập trung trực diện vào nội dung chính.
- **Tiêu đề đa ngôn ngữ:** Thiết lập `leading-tight sm:leading-snug lg:leading-[1.2]` giúp các tiêu đề tiếng Việt nhiều dấu (như "Hành Trình Sự Nghiệp & Học Vấn Kỹ Thuật") không bao giờ bị dính sát hay va chạm ký tự.
- **Footer:** Đã loại bỏ dòng thông tin công nghệ build thô, giữ lại copyright tinh tế.

### Thẻ Dự Án & Trang Chi Tiết Riêng (`ProjectDetailPage`)
- **Mặt sau thẻ lật (`ProjectFlipCard`):** Nút "Xem trực tiếp" (Live Demo) đã được tinh gọn thành nút Icon `[ ↗ ]` thanh lịch cạnh icon GitHub `[ 🐙 ]`, nhường diện tích chính cho nút "Xem chi tiết kiến trúc".
- **Trang chi tiết riêng biệt (`/#/projects/:id`):** Ở trang `/#/projects`, bấm xem chi tiết sẽ chuyển hướng đến một trang case study chuyên sâu riêng (`ProjectDetailPage.tsx`) với breadcrumb, chỉ số hiệu năng, kiến trúc, tech stack và điều hướng Next/Prev project.
- **Modal chi tiết ở trang chủ:** Đã bọc `overflow-hidden` ở container ngoài bo tròn `rounded-3xl`, đưa scrollbar vào đệm bên trong, triệt tiêu 100% hiện tượng thanh cuộn bị lố/chồi ra ngoài góc bo.

### Nút "Lên đầu trang" (Scroll to Top)
- Nút nổi thông minh (`ScrollToTopButton`) bám ở góc dưới bên phải màn hình (`fixed bottom-6 right-6`), tự động xuất hiện khi người dùng cuộn xuống quá 300px.

### Form Liên Hệ (Contact Section)
- Bố cục 2 cột cân xứng 100% về chiều cao (`h-full` với cùng kiểu dáng bo góc 24px `rounded-3xl` và hiệu ứng kính mờ `backdrop-blur-xl`).

---

## 🚀 4. Triển Khai & CI/CD (GitHub Pages)
- **Đường dẫn thư mục code:** `thien-portfolio/frontend`
- **Vite Config `base`:** `'/KINH_NGHIEM_CA_NHAN/'`
- **GitHub Actions Workflow:** `.github/workflows/deploy.yml` tự động build và deploy lên GitHub Pages mỗi khi push vào branch `main`.
- **Cấu hình Web3Forms:**
  - Form Name: `Portfolio - Ngô Minh Thiện`
  - Website URL: `https://phuocthien412.github.io/KINH_NGHIEM_CA_NHAN/`
  - Access Key: Cấu hình qua biến môi trường `VITE_WEB3FORMS_ACCESS_KEY` (tại `.env` ở máy local và tại GitHub Repo Secrets trên GitHub Actions).

---

## ⚡ 5. Lệnh Thường Dùng (Cheatsheet)
```bash
# Cài đặt thư viện
npm --prefix thien-portfolio/frontend install

# Chạy môi trường phát triển local (http://localhost:5173/)
npm --prefix thien-portfolio/frontend run dev

# Build kiểm tra lỗi TypeScript và đóng gói
npm --prefix thien-portfolio/frontend run build

# Đẩy code lên GitHub để tự động deploy
git add .
git commit -m "update: your message"
git push origin main
```

