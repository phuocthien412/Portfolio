from typing import Dict, Any, List

PROFILE_DATA: Dict[str, Any] = {
    "name": "NGÔ MINH THIÊN",
    "title": "SOFTWARE ENGINEER",
    "tagline": "Full-Stack Developer & AI Systems Integrator",
    "phone": "0987176434",
    "email": "minhngothien1@gmail.com",
    "address": "Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh",
    "github": "https://github.com/phuocthien412",
    "career_objective": "Full-Stack developer capable of integrating AI and multi-agent architecture to drive automation. I deliver production-ready solutions in enterprise environments, prioritizing maintainable code and high-performance architecture. I aim to contribute and promote technical excellence in large-scale software projects.",
    "bio": "Xin chào! Tôi là Ngô Minh Thiên — Kỹ sư phần mềm Full-Stack với thế mạnh kết hợp kiến trúc đa tác nhân (Multi-Agent) và AI vào quy trình tự động hóa thực tế. Tôi luôn chú trọng mã nguồn sạch, kiến trúc module hóa bền vững và trải nghiệm người dùng tinh tế từ ý tưởng ban đầu đến môi trường production.",
    "status": "Sẵn sàng nhận cơ hội mới",
    "avatar_url": "/avatar-thien.png",
    "socials": {
        "github": "https://github.com/phuocthien412",
        "linkedin": "https://www.linkedin.com/in/phuocthien412",
        "email": "minhngothien1@gmail.com",
        "phone": "0987176434"
    },
    "stats": {
        "years_experience": "2+",
        "projects_completed": "8+",
        "core_languages": "6+",
        "production_uptime": "99.9%"
    }
}

SKILLS_DATA: List[Dict[str, Any]] = [
    {
        "category_id": "languages",
        "title": "Ngôn Ngữ Lập Trình",
        "description": "Nền tảng vững chắc với tư duy cấu trúc dữ liệu và giải thuật",
        "skills": [
            {"name": "Python", "level": "Thành thạo", "icon": "python", "category": "Languages", "featured": True, "description": "FastAPI, Automation, Data Processing, AI Integration"},
            {"name": "JavaScript", "level": "Thành thạo", "icon": "javascript", "category": "Languages", "featured": True, "description": "ES6+, Async/Await, DOM, Event Loop"},
            {"name": "TypeScript", "level": "Thành thạo", "icon": "typescript", "category": "Languages", "featured": True, "description": "Type-safety, Generics, Modern Frontend Tooling"},
            {"name": "C#", "level": "Trung cấp", "icon": "csharp", "category": "Languages", "featured": False, "description": "OOP, .NET Core, Backend Services"},
            {"name": "Java", "level": "Trung cấp", "icon": "java", "category": "Languages", "featured": False, "description": "Enterprise Architecture, Spring Boot"},
            {"name": "PHP", "level": "Trung cấp", "icon": "php", "category": "Languages", "featured": False, "description": "Web Platforms, WordPress, REST APIs"}
        ]
    },
    {
        "category_id": "frontend",
        "title": "Frontend & UI/UX",
        "description": "Giao diện hiện đại, mượt mà, tối ưu SEO và trải nghiệm người dùng",
        "skills": [
            {"name": "React", "level": "Thành thạo", "icon": "react", "category": "Frontend", "featured": True, "description": "Hooks, Custom Hooks, Performance Optimization"},
            {"name": "Tailwind CSS", "level": "Thành thạo", "icon": "tailwindcss", "category": "Frontend", "featured": True, "description": "Design Systems, Responsive, Custom Theme Tokens"},
            {"name": "Zustand & TanStack Query", "level": "Thành thạo", "icon": "react", "category": "Frontend", "featured": True, "description": "Global State, Server Cache & Syncing"},
            {"name": "shadcn/ui & Radix", "level": "Thành thạo", "icon": "react", "category": "Frontend", "featured": True, "description": "Accessible, Headless UI Components"},
            {"name": "Bootstrap", "level": "Trung cấp", "icon": "bootstrap", "category": "Frontend", "featured": False, "description": "Rapid Responsive Prototyping"}
        ]
    },
    {
        "category_id": "backend",
        "title": "Backend & Kiến Trúc",
        "description": "Hệ thống server hiệu năng cao, RESTful APIs và Real-time",
        "skills": [
            {"name": "FastAPI (Python)", "level": "Thành thạo", "icon": "fastapi", "category": "Backend", "featured": True, "description": "Async I/O, Pydantic v2, High-concurrency APIs"},
            {"name": "Node.js", "level": "Thành thạo", "icon": "nodejs", "category": "Backend", "featured": True, "description": "Express, Event-driven, Microservices"},
            {"name": "ASP.NET Core", "level": "Trung cấp", "icon": "dotnetcore", "category": "Backend", "featured": False, "description": "Enterprise Web APIs, Clean Architecture"},
            {"name": "Spring Boot", "level": "Trung cấp", "icon": "spring", "category": "Backend", "featured": False, "description": "Dependency Injection, Enterprise Solutions"},
            {"name": "WordPress CMS", "level": "Thành thạo", "icon": "wordpress", "category": "Backend", "featured": False, "description": "Custom Themes, Plugins, SEO & Security"}
        ]
    },
    {
        "category_id": "database",
        "title": "Cơ Sở Dữ Liệu",
        "description": "Mô hình hóa dữ liệu quan hệ và phi quan hệ, tối ưu truy vấn",
        "skills": [
            {"name": "MongoDB", "level": "Thành thạo", "icon": "mongodb", "category": "Database", "featured": True, "description": "Document Store, Aggregation Pipeline, Indexing"},
            {"name": "MySQL", "level": "Thành thạo", "icon": "mysql", "category": "Database", "featured": True, "description": "Schema Design, Relational Queries, ACID"}
        ]
    },
    {
        "category_id": "devops_tools",
        "title": "DevOps, Công Cụ & AI",
        "description": "Tự động hóa, containerization và giải pháp trí tuệ nhân tạo",
        "skills": [
            {"name": "Docker", "level": "Thành thạo", "icon": "docker", "category": "Tools", "featured": True, "description": "Containerization, Multi-stage Builds, Compose"},
            {"name": "Postman", "level": "Thành thạo", "icon": "postman", "category": "Tools", "featured": False, "description": "API Testing, Automated Test Suites, Mock Servers"},
            {"name": "Figma", "level": "Trung cấp", "icon": "figma", "category": "Tools", "featured": False, "description": "UI/UX Prototyping, Wireframing, Design System Hand-off"},
            {"name": "AI & Multi-Agent", "level": "Thành thạo", "icon": "python", "category": "AI", "featured": True, "description": "Prompt Engineering, LLM Integration, Multi-Agent Workflows"}
        ]
    }
]

EXPERIENCES_DATA: List[Dict[str, Any]] = [
    {
        "id": "aitc-experience",
        "company_or_institution": "AITC - Asia Information Technology Center",
        "role_or_degree": "Full-Stack Developer",
        "period": "08/2025 – 06/2026",
        "location": "TP. Hồ Chí Minh",
        "type": "work",
        "summary": "Xây dựng và vận hành các hệ thống phần mềm doanh nghiệp ổn định, hiệu năng cao. Tiên phong ứng dụng AI để thúc đẩy tốc độ nghiên cứu kỹ thuật và phát triển giải pháp thực tiễn.",
        "highlights": [
            "Tối ưu năng suất kỹ thuật vượt trội bằng cách kết hợp AI vào việc nghiên cứu công nghệ mới, duy trì tiến độ cam kết trong mọi sprint.",
            "Trực tiếp thiết kế và triển khai 4 giải pháp trọng điểm: Dashboard Chatbot logs thời gian thực, Website AITC, Nền tảng QR Code E-Card và Hệ thống quản lý thiết bị thông minh.",
            "Tập trung chuẩn hóa code sạch (Clean Code), tối ưu truy vấn cơ sở dữ liệu và nâng cao trải nghiệm UI/UX đa nền tảng."
        ],
        "tech_stack": ["React", "Python", "FastAPI", "Node.js", "MongoDB", "MySQL", "Docker", "Tailwind CSS", "WordPress"],
        "link": "https://aitc-jsc.com"
    },
    {
        "id": "education-hutech",
        "company_or_institution": "University of Technology Ho Chi Minh City",
        "role_or_degree": "Cử nhân Kỹ thuật Phần mềm (Software Engineering)",
        "period": "2021 – 2025",
        "location": "TP. Hồ Chí Minh",
        "type": "education",
        "summary": "Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm với nền tảng vững vàng về thuật toán, kiến trúc phần mềm hướng đối tượng (OOP), mạng máy tính và phát triển hệ thống phân tán.",
        "highlights": [
            "Nắm vững các phương pháp luận phát triển phần mềm chuẩn: Agile, Scrum, CI/CD và Clean Architecture.",
            "Hoàn thành các đồ án chuyên sâu về ứng dụng web phân tán, cơ sở dữ liệu quy mô lớn và tích hợp trí tuệ nhân tạo.",
            "Chủ động nghiên cứu và thực hành liên tục với các công nghệ backend và frontend thế hệ mới."
        ],
        "tech_stack": ["Software Architecture", "Data Structures & Algorithms", "C#", "Java", "Python", "Web Engineering"],
        "link": None
    }
]

PROJECTS_DATA: List[Dict[str, Any]] = [
    {
        "id": "tan-hoa-chatbot",
        "slug": "tan-hoa-chatbot-logs-dashboard",
        "title": "Tân Hòa Chatbot & Log Monitoring Dashboard",
        "tagline": "Hệ thống Dashboard trực quan hóa và giám sát Log Chatbot theo thời gian thực",
        "description": "Dự án phát triển bảng điều khiển hiệu năng cao giúp phân tích, trực quan hóa và giám sát tức thì toàn bộ tương tác và log vận hành của Chatbot Tân Hòa. Ứng dụng AI để phân tích mẫu câu hỏi của người dùng và cảnh báo bất thường.",
        "category": "AI & Automation",
        "featured": True,
        "company": "AITC",
        "period": "2025 - 2026",
        "metrics": [
            "Thời gian phản hồi dữ liệu log thời gian thực dưới 150ms",
            "Tự động phát hiện bất thường và phân loại sắc thái hội thoại",
            "Xử lý hàng chục ngàn sự kiện log/ngày mượt mà"
        ],
        "features": [
            "Real-time WebSocket stream đồng bộ dữ liệu log liên tục",
            "Biểu đồ phân tích tương tác trực quan với bộ lọc đa chiều (thời gian, intent, sentiment)",
            "Hệ thống cảnh báo lỗi tức thì qua dashboard và notification",
            "Tối ưu hóa bộ đệm và truy vấn cơ sở dữ liệu giúp tải trang tức thì"
        ],
        "tech_stack": ["React", "Tailwind CSS", "Python", "FastAPI", "WebSockets", "MongoDB", "TanStack Query"],
        "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "demo_url": None,
        "github_url": "https://github.com/phuocthien412",
        "stars": 24
    },
    {
        "id": "equipment-management-system",
        "slug": "equipment-management-system",
        "title": "Equipment Management & Smart Spec Comparison",
        "tagline": "Hệ thống quản lý thiết bị doanh nghiệp tích hợp AI phân tích phần cứng và Excel",
        "description": "Hệ thống quản trị vòng đời thiết bị, theo dõi lịch trình bảo trì tự động và công cụ so sánh cấu hình phần cứng chuyên nghiệp. Ứng dụng trí tuệ nhân tạo để trích xuất, chuẩn hóa thông số kỹ thuật và lọc dữ liệu thông minh trong quá trình nhập liệu file Excel lớn.",
        "category": "Enterprise System",
        "featured": True,
        "company": "AITC",
        "period": "2025 - 2026",
        "metrics": [
            "Giảm 80% thời gian xử lý và chuẩn hóa dữ liệu phần cứng từ Excel",
            "Công cụ đối chiếu 1-click so sánh chi tiết giữa hàng trăm cấu hình máy móc",
            "Tự động cảnh báo bảo trì định kỳ không bỏ sót thiết bị"
        ],
        "features": [
            "Intelligent Excel Import: AI lọc trường tự động, nhận diện sai lệch định dạng",
            "Bộ so sánh thông số kỹ thuật (Hardware Spec Comparison Tool) dạng ma trận trực quan",
            "Theo dõi vòng đời khấu hao, lịch bảo trì và nhật ký sửa chữa thiết bị",
            "Phân quyền người dùng chi tiết (RBAC) chuẩn doanh nghiệp"
        ],
        "tech_stack": ["React", "FastAPI", "MongoDB", "Docker", "Tailwind CSS", "Excel Parser", "Zustand"],
        "image_url": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        "demo_url": None,
        "github_url": "https://github.com/phuocthien412",
        "stars": 31
    },
    {
        "id": "qr-code-ecard",
        "slug": "qr-code-ecard-event-platform",
        "title": "QR CODE - ECARD Event Platform",
        "tagline": "Nền tảng quản lý sự kiện, check-in QR Code và tạo thiệp E-card cá nhân hóa",
        "description": "Giải pháp toàn diện cho quản lý khách mời sự kiện: Tự động phát hành mã QR định danh duy nhất, sinh thiệp điện tử (E-card) cá nhân hóa với hiệu ứng tương tác cao cấp, mang lại trải nghiệm check-in mượt mà, không chạm và chuẩn xác tuyệt đối.",
        "category": "Web Platform",
        "featured": True,
        "company": "AITC",
        "period": "2025 - 2026",
        "metrics": [
            "Tốc độ quét check-in QR < 1 giây/khách mời",
            "Sinh thiệp E-Card động tức thì theo tên và thông tin khách",
            "Giao diện Popup tương tác nhận diện khách thông minh"
        ],
        "features": [
            "Tạo và mã hóa Dynamic QR Code cho từng khách mời",
            "Engine sinh E-Card đồ họa chất lượng cao có thể tải về hoặc chia sẻ",
            "Trải nghiệm interactive popups cao cấp hỗ trợ lễ tân điểm danh tức thì",
            "Báo cáo thống kê tỉ lệ tham gia sự kiện real-time"
        ],
        "tech_stack": ["React", "Node.js", "MongoDB", "Canvas API", "Tailwind CSS", "QR Engine"],
        "image_url": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        "demo_url": None,
        "github_url": "https://github.com/phuocthien412",
        "stars": 19
    },
    {
        "id": "official-website-aitc",
        "slug": "official-website-aitc",
        "title": "Official Website AITC (aitc-jsc.com)",
        "tagline": "Cổng thông tin doanh nghiệp AITC tối ưu SEO và hiệu ứng thị giác hiện đại",
        "description": "Triển khai website chính thức của công ty Cổ phần Công nghệ Thông tin Châu Á (aitc-jsc.com). Tận dụng JavaScript hiện đại để tạo ra các hiệu ứng chuyển động mượt mà, đồng thời cam kết tiêu chuẩn SEO nghiêm ngặt và độ thích ứng hoàn hảo trên mọi thiết bị.",
        "category": "Web Platform",
        "featured": True,
        "company": "AITC",
        "period": "2025",
        "metrics": [
            "Điểm số Google PageSpeed Insights đạt 90+ trên di động và máy tính",
            "100% chuẩn SEO Onpage và Open Graph Schema",
            "Tương thích mượt mà từ màn hình Ultra-wide đến Smartphone"
        ],
        "features": [
            "Hiệu ứng vi chuyển động (Micro-interactions) tinh tế nâng cao tính thẩm mỹ",
            "Cấu trúc dữ liệu tối ưu cho các cỗ máy tìm kiếm (SEO First)",
            "Trình quản trị nội dung dễ dàng, bảo mật cao",
            "Tối ưu hóa tài nguyên hình ảnh WebP và tải trang lười (Lazy load)"
        ],
        "tech_stack": ["WordPress", "PHP", "JavaScript ES6+", "CSS3 / Sass", "SEO Optimization"],
        "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "demo_url": "https://aitc-jsc.com",
        "github_url": "https://github.com/phuocthien412",
        "stars": 15
    }
]
