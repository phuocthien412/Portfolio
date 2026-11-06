# NGÔ MINH THIÊN - PERSONAL PORTFOLIO & CAREER ROADMAP

> **Software Engineer**  
> 📞 Hotline: `0987 176 434` • ✉️ Email: `minhngothien1@gmail.com` • 🐙 GitHub: [github.com/phuocthien412](https://github.com/phuocthien412)  
> 📍 Địa chỉ: Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh  
> 🎓 Học vấn: **Đại học Công nghệ Thành phố Hồ Chí Minh** (Chuyên ngành Kỹ thuật Phần mềm, 2021 – 2025)

---

## 🌟 Tổng Quan Dự Án

Trang web giới thiệu năng lực kỹ sư phần mềm, sơ đồ hành trình phát triển nghề nghiệp và các dự án thực tế của **Ngô Minh Thiên**.  
Hệ thống được thiết kế theo phong cách **Cosmic Space / Galactic Atmosphere** kết hợp **Clean Architecture** chuẩn mực của một kỹ sư phần mềm:
- **Frontend**: React + Vite + TypeScript, chuẩn hóa giao diện với phong cách **Vũ Trụ Không Gian (Cosmic Galactic Theme)**, hỗ trợ song ngữ **Việt / Anh (i18n)**, chuyển cảnh chủ đề mượt mà, hiệu ứng lật thẻ 3D, thanh Squircle Dock và các nút bấm Space Glow độc đáo.
- **State Management & Caching**: **Zustand** quản lý trạng thái UI / Theme / Modal / Ngôn ngữ; **TanStack Query** quản lý server cache và đồng bộ dữ liệu.
- **Backend**: **FastAPI (Python)** async-native I/O, cấu trúc module phân tầng sạch (`core/`, `models/`, `routes/`, `services/`), Pydantic v2 schemas xác thực dữ liệu chặt chẽ.
- **Cơ Sở Dữ Liệu**: **MongoDB** lưu trữ hồ sơ, kỹ năng, kinh nghiệm, dự án và tin nhắn liên hệ với **Indexing** tối ưu trên các trường truy vấn chính.
- **Tự động hóa**: Cơ chế **Auto-seed** nạp dữ liệu ban đầu từ CV vào MongoDB ngay khi khởi động và có cơ chế fallback in-memory an toàn nếu không có CSDL cục bộ.

---

## 🏛️ Cấu Trúc Thư Mục Dự Án (Directory Structure)

```text
thien-portfolio/
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   ├── config.py           # Quản lý cấu hình Pydantic BaseSettings & biến môi trường (.env)
│   │   │   └── database.py         # Kết nối Motor AsyncIOMotorClient, Indexing & Auto-seed dữ liệu
│   │   ├── models/
│   │   │   └── schemas.py          # Pydantic Schemas (Profile, Skills, Journey, Projects, Contact)
│   │   ├── routes/
│   │   │   ├── profile.py          # GET /api/profile
│   │   │   ├── journey.py          # GET /api/journey (AITC & Đại học Công nghệ TP.HCM)
│   │   │   ├── skills.py           # GET /api/skills
│   │   │   ├── projects.py         # GET /api/projects, GET /api/projects/{slug}
│   │   │   └── contact.py          # POST /api/contact, GET /api/contact/messages
│   │   ├── services/
│   │   │   └── seed_data.py        # Dữ liệu chuẩn hóa chi tiết từ CV Ngô Minh Thiên
│   │   └── main.py                 # FastAPI application, CORS middleware, Lifespan & Health Check
│   ├── .env                        # File cấu hình biến môi trường Backend
│   ├── .env.example                # File mẫu cấu hình biến môi trường
│   ├── requirements.txt            # Danh sách thư viện Python
│   ├── run.py                      # Script khởi chạy uvicorn
│   └── venv/                       # Môi trường ảo Python độc lập (Virtual Environment)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx      # Thanh điều hướng sticky glassmorphic, mobile drawer & language switcher
│   │   │   │   ├── Footer.tsx      # Footer chân trời vũ trụ (Cosmic Horizon), 6 Routes grid, Squircle Dock
│   │   │   │   ├── ThemeToggle.tsx # Nút chuyển đổi Dark/Light mode
│   │   │   │   └── LanguageToggle.tsx # Nút chuyển đổi song ngữ VI / EN
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.tsx     # Hero banner, Planetary Orbit Rings xung quanh avatar, Solar Flare
│   │   │   │   ├── TechMarquee.tsx     # Dải băng chuyền vô tận các công nghệ cốt lõi
│   │   │   │   ├── HomeJourneyTeaser.tsx# Sơ đồ hành trình từ Đại học đến Thực chiến việc làm (Roadmap)
│   │   │   │   ├── HomeProjectsTeaser.tsx# Danh sách dự án nổi bật với bộ lọc & 3D Flip Card
│   │   │   │   ├── ProjectFlipCard.tsx # Thẻ bài 3D lật 2 mặt (Mặt trước: Tổng quan, Mặt sau: Kiến trúc chuyên sâu)
│   │   │   │   ├── ProjectDetailModal.tsx # Modal xem chi tiết dự án & chỉ số kỹ thuật
│   │   │   │   ├── JourneyTimeline.tsx # Timeline chi tiết toàn bộ sự nghiệp tại AITC & Đại học
│   │   │   │   ├── SkillsMatrix.tsx    # Ma trận kỹ năng với tabs lọc phân cấp độ chuẩn
│   │   │   │   ├── HomeCtaBanner.tsx   # Banner hợp tác việc làm nền vũ trụ với quỹ đạo xoay và Space Glow Buttons
│   │   │   │   └── ContactSection.tsx  # Biểu mẫu liên hệ kết nối trực tiếp MongoDB
│   │   │   └── ui/
│   │   │       ├── SpaceGlowButton.tsx # Nút bấm vũ trụ phát sáng gradient xoay liên tục (Uiverse inspired)
│   │   │       ├── ModernDockSocials.tsx # Dock nút mạng xã hội Squircle nam châm (GitHub, Gmail, Hotline)
│   │   │       ├── ThemeSceneTransition.tsx # Màn hiệu ứng cực quang chuyển cảnh mượt mà Dark <-> Light
│   │   │       ├── CvViewerModal.tsx   # Modal xem và tải xuống hồ sơ CV PDF chuyên nghiệp
│   │   │       ├── MouseSpotlight.tsx  # Con trỏ chuột tạo vệt sáng vũ trụ
│   │   │       ├── Button.tsx          # Các biến thể nút bấm chuẩn UI
│   │   │       ├── Badge.tsx           # Huy hiệu phân loại đa màu sắc
│   │   │       ├── Card.tsx            # Khung thẻ Glassmorphism
│   │   │       └── Icons.tsx           # SVG icons công nghệ chất lượng cao
│   │   ├── hooks/
│   │   │   └── usePortfolioData.ts # Custom hooks TanStack Query tương tác API
│   │   ├── stores/
│   │   │   └── usePortfolioStore.ts# Zustand store quản lý Theme, Language (VI/EN) và Modal state
│   │   ├── i18n/
│   │   │   ├── index.ts            # Entry cấu hình i18n đa ngôn ngữ
│   │   │   ├── types.ts            # TypeScript interface định nghĩa cấu trúc từ điển
│   │   │   └── locales/
│   │   │       ├── vi.ts           # Bản dịch tiếng Việt chuẩn xác
│   │   │       └── en.ts           # Bản dịch tiếng Anh chuyên nghiệp (English localization)
│   │   ├── services/
│   │   │   └── api.ts              # Typed Axios API client kết nối Backend
│   │   ├── types/
│   │   │   └── index.ts            # TypeScript interfaces chặt chẽ
│   │   ├── lib/
│   │   │   └── utils.ts            # Hàm cn() kết hợp clsx và tailwind-merge
│   │   ├── pages/
│   │   │   ├── HomePage.tsx        # Trang chủ tổng hợp
│   │   │   ├── AboutPage.tsx       # Trang thông tin cá nhân & Triết lý kỹ thuật Junior
│   │   │   ├── JourneyPage.tsx     # Trang hành trình sự nghiệp
│   │   │   ├── SkillsPage.tsx      # Trang ma trận kỹ năng
│   │   │   ├── ProjectsPage.tsx    # Trang toàn bộ dự án
│   │   │   └── ContactPage.tsx     # Trang liên hệ & biểu mẫu gửi tin nhắn
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css               # Design system tokens, cosmic styles, glow hover & animations
│   ├── .env                        # VITE_API_URL=http://localhost:8000/api
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Chuẩn Bị Môi Trường
- **Node.js**: v18+ (Đã kiểm tra hoạt động ổn định trên Node v24+)
- **Python**: 3.10+ (Đã kiểm tra hoạt động ổn định trên Python 3.14)
- **MongoDB**: Dịch vụ MongoDB chạy cục bộ tại `mongodb://localhost:27017` hoặc URI đám mây MongoDB Atlas.

---

### 2. Khởi Chạy Backend (Chuẩn Virtual Environment `venv`)

Để đảm bảo tính độc lập và không xung đột thư viện giữa các dự án, Backend được vận hành thông qua môi trường ảo **`venv`** theo chuẩn mực của một lập trình viên:

```bash
# 1. Di chuyển vào thư mục backend
cd thien-portfolio/backend

# 2. Tạo môi trường ảo venv (chỉ cần chạy lần đầu tiên)
python -m venv venv

# 3. Kích hoạt môi trường ảo:
# Trên Windows PowerShell:
.\venv\Scripts\Activate.ps1
# (Hoặc trên Windows CMD: .\venv\Scripts\activate.bat)
# (Hoặc trên Linux/macOS: source venv/bin/activate)

# 4. Cài đặt các thư viện phụ thuộc
pip install -r requirements.txt

# 5. Khởi chạy máy chủ FastAPI với hot-reload:
python run.py
# (Hoặc chạy trực tiếp qua uvicorn):
# uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

- **Địa chỉ Server Backend**: `http://localhost:8000`
- **Tài liệu API tương tác (Swagger UI)**: `http://localhost:8000/docs`
- **Kiểm tra trạng thái hệ thống (Health Check)**: `http://localhost:8000/api/health`

---

### 3. Khởi Chạy Frontend (React + Vite + TypeScript)

```bash
# 1. Di chuyển vào thư mục frontend
cd thien-portfolio/frontend

# 2. Cài đặt các gói thư viện npm
npm install

# 3. Khởi chạy giao diện phát triển (Development Server)
npm run dev

# 4. Kiểm tra biên dịch & đóng gói Production (Tùy chọn)
npm run build
```

- **Địa chỉ truy cập giao diện**: `http://localhost:5173`

---

## 🌌 Hệ Thống Thiết Kế UI/UX & Chủ Đề Vũ Trụ (Cosmic Space Theme)

Toàn bộ ứng dụng đã được thiết kế và đồng bộ hóa theo ngôn ngữ thiết kế **Cosmic Space / Galactic Atmosphere**, nâng tầm trải nghiệm thị giác và thể hiện rõ nét tư duy thẩm mỹ hiện đại:

### 1. Nền Tảng Vũ Trụ (Cosmic Atmosphere & Background Tokens)
- **Bảng màu Thiên hà (Galactic Palette)**: Nền tối sâu thẳm (`#030712`, `#060d1a`, `slate-950`) phối hợp cùng sắc xanh lục ngọc (`#10b981 - Emerald`), xanh mạ (`#14b8a6 - Teal`) và xanh thiên thanh (`#06b6d4 - Cyan`).
- **Bầu trời sao lấp lánh (Twinkling Starfield)**: Các chấm hạt bụi sao li ti (stardust) với hiệu ứng nhịp thở ánh sáng (`animate-pulse`, `animate-ping`) tạo chiều sâu không gian đa lớp.
- **Tinh vân phát sáng (Deep Space Nebulae)**: Các vùng khí quyển vũ trụ khuếch tán mềm mại (`blur-[140px]`), chuyển động nhẹ nhàng theo phân đoạn trang.
- **Lưới tọa độ không gian (Cyber Grid)**: Lớp lưới công nghệ vi mô mờ ảo tạo cảm giác hiện đại và chuẩn xác của một hệ thống kỹ thuật.

### 2. Các Thành Phần Giao Diện Đặc Sắc (Signature Components)
1. **Avatar Thiên Thể & Hiệu Ứng Thái Dương (Hero Solar Flare)**:
   - Avatar đại diện được bao bọc bởi 2 vòng quỹ đạo thiên thể quay đồng tâm (`Planetary Orbit Rings`).
   - Có vệ tinh quay quanh quỹ đạo; khi rê chuột (`hover`), bùng nổ hiệu ứng vầng hào quang mặt trời / tinh vân rực sáng (`Solar Flare / Nebula Corona`).
2. **Thẻ Bài Dự Án Lật 3D (Interactive 3D Flip Card)**:
   - **Mặt trước**: Ảnh bìa sắc nét, badge phân loại, thông tin công ty AITC, chỉ số đo lường hiệu năng và nút lật thẻ.
   - **Mặt sau**: Kiến trúc kỹ thuật chuyên sâu (`Deep Architecture`), danh sách tính năng cốt lõi và **Tech Stack** (giữ lại `React`, loại bỏ các thẻ con `Zustand` & `TanStack Query` để tối ưu diện tích hiển thị).
3. **Thanh Nút Bấm Squircle Dock Đa Kênh (Uiverse modern-mouse-31)**:
   - Dock liên kết trực tiếp dưới Footer gồm: **GitHub Repository**, **Gmail Chính Thức**, và **Hotline Trực Tiếp**.
   - Thiết kế hình khối Squircle nam châm với hiệu ứng nhấc nổi, biểu tượng SVG sắc nét và Tooltip động phát sáng khi rê chuột.
4. **Nút Bấm Vũ Trụ Phát Sáng (Space Glow Button - Uiverse spotty-horse-48)**:
   - Nút bấm hành động chính (Liên hệ trực tiếp, Xem CV PDF) được trang bị viền gradient chuyển màu xoay liên tục 360 độ kết hợp đốm sáng thiên thạch lướt qua.
5. **Sơ Đồ Hành Trình Phát Triển (Career Roadmap Flowchart)**:
   - Thay thế các khối tĩnh bằng **Sơ đồ lộ trình tuần tự**:
     - **Giai đoạn 01 (2021 – 2025)**: Nền Tảng Đại Học tại **Đại học Công nghệ Thành phố Hồ Chí Minh** (Chuyên ngành Kỹ thuật Phần mềm).
     - **Bước đệm chuyển giao**: Badge kết nối `Tốt nghiệp & Chuyển giao thực tế` với hiệu ứng xung nhịp.
     - **Giai đoạn 02 (08/2025 – 06/2026)**: Thực Chiến Doanh Nghiệp tại **AITC**.
   - Trục kết nối phát sáng (Vertical Circuit Spine) kết nối giữa 2 Node thiên thể có hiệu ứng quỹ đạo và phát sáng tinh vân mạnh mẽ khi hover.
6. **Banner Hợp Tác Tuyển Dụng Nền Vũ Trụ (Home CTA Banner)**:
   - Tích hợp nền sao băng lấp lánh, vòng quỹ đạo thiên thể xoay chậm và nút bấm Space Glow.
7. **Footer Chân Trời Cực Quang (Cosmic Horizon Beam)**:
   - Dải tia sáng cực quang quét ngang mép trên của Footer.
   - Phần **Các Trang Chuyên Mục** được bố trí theo dạng lưới 2 cột hiện đại (6 Routes Capsule Grid) với viền kính phát sáng và icon điều hướng trực quan.
   - Tích hợp đèn tín hiệu khả dụng trực tiếp (`🟢 Live Availability Beacon`).
8. **Hiệu Ứng Chuyển Cảnh Theme (Cosmic Scene Transition)**:
   - Khi chuyển từ Dark sang Light Mode và ngược lại, một màn sóng ánh sáng ngân hà chuyển tiếp nhẹ nhàng không gây chói mắt.
9. **Hệ Thống Đa Ngôn Ngữ Song Ngữ (Bilingual i18n)**:
   - Tách biệt rõ ràng 2 file từ điển: Tiếng Việt (`vi.ts`) và Tiếng Anh (`en.ts`).
   - Tên trường đại học được bản địa hóa chuẩn xác:
     - Tiếng Việt: `Đại học Công nghệ Thành phố Hồ Chí Minh`
     - Tiếng Anh: `Ho Chi Minh City University of Technology`

---

## 📋 Dữ Liệu Hồ Sơ Thực Tế Của Kỹ Sư

- **Họ và tên**: Ngô Minh Thiên
- **Vị trí**: Software Engineer
- **Học vấn**: Đại học Công nghệ Thành phố Hồ Chí Minh (2021 – 2025)
- **Kinh nghiệm thực chiến**: AITC - Asia Information Technology Center (08/2025 – 06/2026)
- **Dự án trọng điểm**:
  1. *Tân Hòa Chatbot & Log Monitoring Dashboard* (Realtime WebSocket, FastAPI, React, MongoDB).
  2. *Equipment Management & Smart Spec Comparison* (FastAPI, Python, MySQL, AI Excel Normalization, Docker).
  3. *AITC Official Technology Portal* (React, TypeScript, Tailwind CSS, WordPress REST, Lighthouse 98+).
  4. *QR Code - ECard Event Platform* (Node.js, Express, React, QR Generator).
- **Trụ cột triết lý kỹ thuật (Dành cho Software Engineer 1+ năm kinh nghiệm)**:
  1. *Clean Code & Cấu Trúc Mã Nguồn Rõ Ràng*: Phân tách Routes/Services/Schemas, code dễ đọc, dễ bảo trì, tái sử dụng React components.
  2. *Tư Duy Bất Đồng Bộ & Tối Ưu Truy Vấn*: Khai thác non-blocking async/await trên FastAPI & Node.js, đánh index các trường truy vấn chính trên MongoDB và MySQL.
  3. *Thực Chiến & Tự Động Hóa Thực Tế*: Xử lý dữ liệu thực tế, chuẩn hóa biểu mẫu Excel, tích hợp API, xây dựng dashboard trực quan.
  4. *Kỷ Luật Quy Trình & Tính Ổn Định*: Tuân thủ Git flow, đóng gói container Docker cho môi trường dev/staging đồng nhất, bảo mật biến môi trường (.env).

---

## 🛡️ Giấy Phép & Bản Quyền

Dự án được xây dựng và sở hữu bởi **Ngô Minh Thiên** © 2026. Mọi quyền được bảo lưu.
