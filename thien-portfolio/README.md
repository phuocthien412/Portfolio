# NGÔ MINH THIÊN - PERSONAL PORTFOLIO & CAREER JOURNEY

> **Software Engineer & AI Systems Integrator**  
> Phone: `0987 176 434` • Email: `minhngothien1@gmail.com` • GitHub: [github.com/phuocthien412](https://github.com/phuocthien412)  
> Address: Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh

---

## 🌟 Tổng Quan Dự Án

Trang web giới thiệu năng lực kỹ sư phần mềm, hành trình sự nghiệp và các dự án thực tế của **Ngô Minh Thiên**.  
Hệ thống được thiết kế và xây dựng theo chuẩn **Clean Architecture** của một kỹ sư phần mềm chuyên nghiệp:
- **Frontend**: React + Vite + TypeScript, giao diện phong cách **Cyber-Editorial Minimal** (lấy cảm hứng từ [xuanquangdev.com](https://www.xuanquangdev.com/)), hỗ trợ **Dark/Light Mode**, hiệu ứng **Aurora Glow**, Glassmorphism, và micro-animations.
- **State Management & Data Fetching**: Kết hợp **Zustand** (UI & Theme State) và **TanStack Query** (Server State Caching & Synchronizing).
- **Backend**: **FastAPI (Python)** async-native, thiết kế module hóa chuẩn mực (`core/`, `models/`, `routes/`, `services/`), Pydantic v2 schemas xác thực dữ liệu chặt chẽ.
- **Database**: **MongoDB** lưu trữ hồ sơ, kinh nghiệm, kỹ năng, dự án tiêu biểu và tin nhắn liên hệ (Contact Form) với indexing tối ưu.
- **Tự động hóa**: Cơ chế **Auto-seed** tự động nạp dữ liệu ban đầu từ CV vào MongoDB ngay khi khởi động và có fallback an toàn.

---

## 🏛️ Cấu Trúc Hệ Thống (Directory Structure)

```text
thien-portfolio/
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   ├── config.py           # Quản lý cấu hình Pydantic BaseSettings & .env
│   │   │   └── database.py         # Kết nối Motor AsyncIOMotorClient, Indexing & Auto-seed
│   │   ├── models/
│   │   │   └── schemas.py          # Pydantic Schemas (Profile, Skills, Journey, Projects, Contact)
│   │   ├── routes/
│   │   │   ├── profile.py          # GET /api/profile
│   │   │   ├── journey.py          # GET /api/journey (AITC & Đại học)
│   │   │   ├── skills.py           # GET /api/skills
│   │   │   ├── projects.py         # GET /api/projects, GET /api/projects/{slug}
│   │   │   └── contact.py          # POST /api/contact, GET /api/contact/messages
│   │   ├── services/
│   │   │   └── seed_data.py        # Dữ liệu chuẩn hóa chi tiết từ CV Ngô Minh Thiên
│   │   └── main.py                 # FastAPI application, CORS, Lifespan & Health Check
│   ├── .env                        # Biến môi trường Backend
│   ├── .env.example                # File mẫu biến môi trường
│   ├── requirements.txt            # Danh sách thư viện Python
│   └── run.py                      # Script khởi chạy nhanh Uvicorn
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx      # Thanh điều hướng sticky glassmorphic, mobile drawer
│   │   │   │   ├── Footer.tsx      # Footer với liên kết và trạng thái hệ thống
│   │   │   │   └── ThemeToggle.tsx # Nút chuyển đổi Dark/Light mode
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.tsx     # Hero banner, elevator pitch, terminal code card
│   │   │   │   ├── TechMarquee.tsx     # Infinite scroll ribbon các công nghệ cốt lõi
│   │   │   │   ├── AboutSection.tsx    # Về tôi, bằng cấp đại học HUTECH, 4 trụ cột kỹ thuật
│   │   │   │   ├── JourneyTimeline.tsx # Timeline sự nghiệp (AITC & HUTECH Software Engineering)
│   │   │   │   ├── SkillsMatrix.tsx    # Ma trận kỹ năng với tabs lọc và level indicators
│   │   │   │   ├── ProjectsShowcase.tsx# Danh sách 4 dự án doanh nghiệp thực chiến
│   │   │   │   ├── ProjectDetailModal.tsx # Modal xem chi tiết kiến trúc và chỉ số kỹ thuật
│   │   │   │   └── ContactSection.tsx  # Biểu mẫu liên hệ kết nối trực tiếp MongoDB
│   │   │   └── ui/
│   │   │       ├── Button.tsx      # Button variants (gradient, cyber, outline, ghost)
│   │   │       ├── Badge.tsx       # Badge đa màu sắc
│   │   │       ├── Card.tsx        # Card glassmorphism
│   │   │       └── Icons.tsx       # SVG icons chất lượng cao (GitHub, v.v.)
│   │   ├── hooks/
│   │   │   └── usePortfolioData.ts # Custom hooks TanStack Query
│   │   ├── stores/
│   │   │   └── usePortfolioStore.ts# Zustand store quản lý Theme & Modal
│   │   ├── services/
│   │   │   └── api.ts              # Typed API client giao tiếp Backend
│   │   ├── types/
│   │   │   └── index.ts            # TypeScript interfaces chặt chẽ
│   │   ├── lib/
│   │   │   └── utils.ts            # Hàm cn() kết hợp clsx và tailwind-merge
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css               # Design system tokens và aurora styles
│   ├── .env                        # VITE_API_URL=http://localhost:8000/api
│   ├── .env.example
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Chuẩn Bị
- **Node.js**: v18+ (Đã kiểm tra hoạt động tốt trên v24+)
- **Python**: 3.10+ (Đã kiểm tra hoạt động tốt trên Python 3.14)
- **MongoDB**: Đã cài đặt dịch vụ MongoDB cục bộ (`mongodb://localhost:27017`) hoặc URI MongoDB Atlas.

---

### 2. Khởi Chạy Backend (FastAPI + MongoDB)

```bash
cd thien-portfolio/backend

# 1. Cài đặt dependencies
pip install -r requirements.txt

# 2. Khởi chạy server
python run.py
```

- Server Backend sẽ chạy tại: `http://localhost:8000`
- Tài liệu API tương tác (Swagger UI): `http://localhost:8000/docs`
- Kiểm tra sức khỏe hệ thống: `http://localhost:8000/api/health`

---

### 3. Khởi Chạy Frontend (React + Vite + TypeScript)

```bash
cd thien-portfolio/frontend

# 1. Cài đặt thư viện npm
npm install

# 2. Khởi chạy giao diện dev
npm run dev
```

- Mở trình duyệt tại: `http://localhost:5173`

---

## 📋 Nội Dung Dữ Liệu Được Tích Hợp Sẵn (Từ CV)

1. **Thông tin cá nhân & Career Objective**:
   - Software Engineer định hướng Full-Stack & tích hợp AI / Multi-Agent.
   - Trọng tâm vào Clean Code, Maintainability và High-Performance.
2. **Học vấn (Education)**:
   - **University of Technology Ho Chi Minh City** (2021 – 2025).
   - Chuyên ngành: **Software Engineering (Kỹ thuật phần mềm)**.
3. **Kinh nghiệm làm việc (Experience)**:
   - **AITC - Asia Information Technology Center** (08/2025 – 06/2026).
   - Vị trí: Full-Stack Developer.
4. **4 Dự án Doanh nghiệp Trọng điểm (Projects)**:
   - **Tân Hòa Chatbot & Log Monitoring Dashboard**: Dashboard trực quan hóa realtime logs chatbot với độ trễ < 150ms.
   - **Equipment Management System**: Quản lý vòng đời thiết bị, so sánh spec phần cứng và lọc dữ liệu Excel thông minh bằng AI.
   - **QR CODE - ECARD**: Nền tảng quản lý sự kiện, check-in QR Code và tạo thiệp điện tử cá nhân hóa.
   - **Official Website AITC (aitc-jsc.com)**: Cổng thông tin tối ưu SEO 90+, hiệu ứng JavaScript hiện đại và responsive toàn diện.
5. **Kỹ năng (Skills Matrix)**:
   - **Languages**: Python, JavaScript, TypeScript, C#, Java, PHP.
   - **Frontend**: React, Tailwind CSS, Zustand, TanStack Query, shadcn/ui, Bootstrap.
   - **Backend**: FastAPI, Node.js, ASP.NET Core, Spring Boot, WordPress.
   - **Database**: MongoDB, MySQL.
   - **Tools & AI**: Docker, Postman, Figma, AI Prompting & Multi-Agent Workflows.
6. **Form Liên Hệ (Contact)**:
   - Đã kiểm tra kết nối lưu trực tiếp vào cơ sở dữ liệu MongoDB và gửi phản hồi message ID tức thì.
