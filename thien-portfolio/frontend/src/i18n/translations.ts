export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    journey: string;
    skills: string;
    projects: string;
    contact: string;
    contactNow: string;
    viewCv: string;
    menuTitle: string;
  };
  hero: {
    greeting: string;
    role: string;
    pitch: string;
    viewProjects: string;
    contactMe: string;
    viewCv: string;
    downloadCv: string;
    availableBadge: string;
  };
  techMarquee: {
    title: string;
  };
  about: {
    sectionBadge: string;
    title: string;
    highlight: string;
    subtitle: string;
    bio1: string;
    bio2: string;
    philosophyTitle: string;
    philosophyText: string;
    statsExp: string;
    statsProjects: string;
    statsCommits: string;
    statsSatisfaction: string;
    detailsBtn: string;
    skillsBtn: string;
  };
  journey: {
    sectionBadge: string;
    title: string;
    highlight: string;
    subtitle: string;
    viewFullBtn: string;
    roleAitc: string;
    companyAitc: string;
    descAitc: string;
    roleHutech: string;
    schoolHutech: string;
    descHutech: string;
  };
  skills: {
    sectionBadge: string;
    title: string;
    highlight: string;
    subtitle: string;
    langTitle: string;
    frameworkTitle: string;
    dbTitle: string;
    toolsTitle: string;
    proficient: string;
    intermediate: string;
    beginner: string;
    exploreMatrixBtn: string;
  };
  projects: {
    sectionBadge: string;
    title: string;
    highlight: string;
    subtitle: string;
    viewAllBtn: string;
    viewDetails: string;
    sourceCode: string;
    liveDemo: string;
    categoryAll: string;
    architectureTitle: string;
    flipToBack: string;
    flipToFront: string;
    deepArchitecture: string;
    cardRank: string;
  };
  ctaBanner: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    button: string;
    viewCvBtn: string;
  };
  contact: {
    sectionBadge: string;
    title: string;
    highlight: string;
    subtitle: string;
    directTitle: string;
    directSubtitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    addressValue: string;
    githubLabel: string;
    formOnlineBadge: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFormLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMessage: string;
    errorMessage: string;
    requiredWarning: string;
    mongoNote: string;
    openEmailApp: string;
    emailDirectly: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    downloadBtn: string;
    openTabBtn: string;
    closeBtn: string;
    loading: string;
  };
  footer: {
    roleDesc: string;
    pagesTitle: string;
    contactTitle: string;
    backToTop: string;
    copyright: string;
  };
}

export const translations: Record<"vi" | "en", TranslationSchema> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Về tôi",
      journey: "Hành trình",
      skills: "Kỹ năng",
      projects: "Dự án",
      contact: "Liên hệ",
      contactNow: "Liên hệ ngay",
      viewCv: "Xem CV",
      menuTitle: "Menu Điều Hướng Trang",
    },
    hero: {
      greeting: "Xin chào, tôi là",
      role: "Software Engineer | Fullstack & AI Developer",
      pitch: "Tôi xây dựng các hệ thống web hiệu năng cao, giao diện đẹp và trải nghiệm người dùng mượt mà — từ MVP đến production.",
      viewProjects: "Xem các dự án",
      contactMe: "Liên hệ với tôi",
      viewCv: "Xem CV",
      downloadCv: "Tải CV",
      availableBadge: "Sẵn sàng cho dự án mới",
    },
    techMarquee: {
      title: "Công nghệ cốt lõi",
    },
    about: {
      sectionBadge: "Hồ Sơ Năng Lực",
      title: "Về",
      highlight: "Tôi",
      subtitle: "Tôi là một kỹ sư công nghệ phần mềm với niềm đam mê giải quyết các bài toán phức tạp thông qua mã nguồn sạch (clean code) và hiệu quả.",
      bio1: "Với tư duy logic vững chắc và khả năng thích nghi nhanh với các công nghệ mới, tôi tập trung vào việc xây dựng các hệ thống phần mềm có tính mở rộng cao và trải nghiệm người dùng mượt mà.",
      bio2: "Tại Công ty Cổ phần Công nghệ AITC, tôi trực tiếp tham gia phát triển và tối ưu hóa các giải pháp Enterprise, từ hệ thống Microservices backend FastAPI/Python đến giao diện React/TypeScript chuẩn UX/UI hiện đại.",
      philosophyTitle: "Triết lý kỹ thuật",
      philosophyText: "Tối ưu hiệu năng, kiến trúc rõ ràng, mã nguồn dễ bảo trì và luôn đặt trải nghiệm người dùng làm trọng tâm.",
      statsExp: "Kinh nghiệm thực chiến",
      statsProjects: "Dự án Enterprise",
      statsCommits: "Commits đóng góp",
      statsSatisfaction: "Mức độ hài lòng",
      detailsBtn: "Xem chi tiết về tôi",
      skillsBtn: "Ma trận kỹ năng chuyên sâu",
    },
    journey: {
      sectionBadge: "Kinh Nghiệm Thực Chiến",
      title: "Kinh Nghiệm",
      highlight: "Làm Việc",
      subtitle: "Quá trình học hỏi, rèn luyện và phát triển sự nghiệp trong ngành công nghệ thông tin từ giảng đường đại học đến môi trường doanh nghiệp thực tế tại AITC.",
      viewFullBtn: "Xem toàn bộ hành trình sự nghiệp",
      roleAitc: "Software Engineer & AI Integrator",
      companyAitc: "AITC - Công ty Cổ phần Công nghệ AITC",
      descAitc: "Phát triển hệ thống web, tích hợp giải pháp AI Multi-Agent, tối ưu cơ sở dữ liệu MongoDB/MySQL và xây dựng API hiệu năng cao.",
      roleHutech: "Sinh viên Kỹ thuật Phần mềm",
      schoolHutech: "Đại học Công nghệ TP.HCM (HUTECH)",
      descHutech: "Tốt nghiệp chuyên ngành Công nghệ Thông tin / Kỹ thuật Phần mềm với nền tảng vững chắc về thuật toán và kiến trúc hệ thống.",
    },
    skills: {
      sectionBadge: "Năng Lực Kỹ Thuật",
      title: "Ma Trận",
      highlight: "Kỹ Năng",
      subtitle: "Bộ kỹ năng toàn diện từ Frontend, Backend, Cơ sở dữ liệu đến tích hợp các mô hình AI tiên tiến.",
      langTitle: "Ngôn ngữ lập trình",
      frameworkTitle: "Framework / Library",
      dbTitle: "Cơ sở dữ liệu",
      toolsTitle: "Công cụ & Khác",
      proficient: "Thành thạo",
      intermediate: "Trung cấp",
      beginner: "Sơ cấp",
      exploreMatrixBtn: "Xem ma trận kỹ năng chi tiết",
    },
    projects: {
      sectionBadge: "Hồ Sơ Năng Lực",
      title: "Dự Án",
      highlight: "Tiêu Biểu",
      subtitle: "Mỗi dự án là một giải pháp thực tế — không chỉ đẹp mà còn giải quyết đúng bài toán nghiệp vụ doanh nghiệp.",
      viewAllBtn: "Xem tất cả dự án & kiến trúc",
      viewDetails: "Xem chi tiết kiến trúc",
      sourceCode: "Mã nguồn",
      liveDemo: "Xem trực tiếp",
      categoryAll: "Tất cả",
      architectureTitle: "Kiến trúc kỹ thuật & Đóng góp",
      flipToBack: "Rê chuột để lật xem kiến trúc",
      flipToFront: "Lật lại mặt trước",
      deepArchitecture: "Kiến Trúc & Công Nghệ Chuyên Sâu",
      cardRank: "Thẻ Dự Án #",
    },
    ctaBanner: {
      badge: "Sẵn Sàng Hợp Tác",
      title: "Bạn Có Dự Án Hoặc Cơ Hội",
      highlight: "Việc Làm Mới?",
      subtitle: "Tôi luôn sẵn sàng thảo luận về các giải pháp kỹ thuật phần mềm, tích hợp AI Multi-Agent và phát triển hệ thống web hiệu năng cao.",
      button: "Liên hệ trực tiếp với tôi",
      viewCvBtn: "Xem Hồ Sơ CV (PDF)",
    },
    contact: {
      sectionBadge: "Hợp Tác & Tuyển Dụng",
      title: "Sẵn Sàng Cho Các Thử Thách",
      highlight: "Mới",
      subtitle: "Bạn đang tìm kiếm một Software Engineer Full-Stack có tư duy hệ thống và sẵn sàng bứt phá cùng AI? Hãy để lại lời nhắn hoặc liên hệ trực tiếp với tôi.",
      directTitle: "Thông tin liên lạc trực tiếp",
      directSubtitle: "Tôi luôn hoan nghênh các lời mời phỏng vấn, cơ hội hợp tác dự án doanh nghiệp, hoặc trao đổi kỹ thuật về AI & Multi-Agent.",
      phoneLabel: "Số điện thoại",
      emailLabel: "Email chính thức",
      addressLabel: "Địa chỉ hiện tại",
      addressValue: "Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh",
      githubLabel: "GitHub Repository",
      formOnlineBadge: "Gửi biểu mẫu trực tuyến",
      formTitle: "Gửi lời nhắn tới Ngô Minh Thiên",
      formSubtitle: "Thông tin sẽ được chuyển tiếp tức thì vào cơ sở dữ liệu và gửi thông báo trực tiếp.",
      nameLabel: "Họ và tên",
      namePlaceholder: "VD: Nguyễn Văn A",
      emailFormLabel: "Email liên hệ",
      emailPlaceholder: "VD: contact@company.com",
      subjectLabel: "Chủ đề trao đổi",
      subjectPlaceholder: "VD: Thảo luận cơ hội việc làm Full-Stack Developer",
      messageLabel: "Nội dung lời nhắn",
      messagePlaceholder: "Nhập nội dung tin nhắn hoặc thông tin dự án cần hợp tác...",
      sendBtn: "Gửi tin nhắn ngay",
      sendingBtn: "Đang lưu trữ vào MongoDB...",
      successMessage: "Tin nhắn đã được gửi thành công đến Ngô Minh Thiên!",
      errorMessage: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau!",
      requiredWarning: "Vui lòng điền đầy đủ các thông tin bắt buộc.",
      mongoNote: "Backend API kết nối trực tiếp cơ sở dữ liệu MongoDB xử lý thông điệp tự động.",
      openEmailApp: "Mở ứng dụng Email của bạn",
      emailDirectly: "Gửi Email trực tiếp",
    },
    cvModal: {
      title: "Hồ Sơ Năng Lực (CV) - Ngô Minh Thiên",
      subtitle: "Software Engineer | Full-Stack & AI Systems Integrator",
      downloadBtn: "Tải xuống PDF",
      openTabBtn: "Mở trong tab mới",
      closeBtn: "Đóng",
      loading: "Đang hiển thị tài liệu CV...",
    },
    footer: {
      roleDesc: "Software Engineer chuyên sâu phát triển Full-Stack, tích hợp AI và kiến trúc Multi-Agent. Cam kết xây dựng giải pháp phần mềm cấp doanh nghiệp với mã nguồn sạch, hiệu năng tối ưu và trải nghiệm người dùng vượt trội.",
      pagesTitle: "Các Trang Chuyên Mục",
      contactTitle: "Liên hệ trực tiếp",
      backToTop: "Lên đầu trang",
      copyright: "Ngô Minh Thiên. All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      journey: "Journey",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      contactNow: "Get in Touch",
      viewCv: "Resume",
      menuTitle: "Navigation Menu",
    },
    hero: {
      greeting: "Hello, I am",
      role: "Software Engineer | Fullstack & AI Developer",
      pitch: "I craft high-performance web systems, elegant interfaces, and seamless user experiences — from MVP to enterprise production.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      viewCv: "View Resume",
      downloadCv: "Download CV",
      availableBadge: "Available for new opportunities",
    },
    techMarquee: {
      title: "Core Technologies",
    },
    about: {
      sectionBadge: "Competency Profile",
      title: "About",
      highlight: "Me",
      subtitle: "I am a software engineer dedicated to solving complex problems through clean, robust, and high-performance code.",
      bio1: "With strong analytical thinking and fast adaptability to emerging technologies, I focus on building scalable software architectures with exceptional user experiences.",
      bio2: "At AITC Joint Stock Company, I actively engineer and optimize enterprise solutions, ranging from FastAPI/Python microservices to responsive React/TypeScript frontend architectures.",
      philosophyTitle: "Engineering Philosophy",
      philosophyText: "High performance, clear architecture, maintainable clean code, and placing user experience at the core.",
      statsExp: "Practical Experience",
      statsProjects: "Enterprise Projects",
      statsCommits: "GitHub Commits",
      statsSatisfaction: "Client Satisfaction",
      detailsBtn: "View Full Profile",
      skillsBtn: "Detailed Skill Matrix",
    },
    journey: {
      sectionBadge: "Hands-on Experience",
      title: "Work",
      highlight: "Experience",
      subtitle: "The path of engineering growth from academic foundations at HUTECH University to building production enterprise solutions at AITC.",
      viewFullBtn: "Explore Complete Career Path",
      roleAitc: "Software Engineer & AI Integrator",
      companyAitc: "AITC - AITC Technology Joint Stock Company",
      descAitc: "Developed enterprise web systems, integrated AI Multi-Agent architectures, optimized MongoDB/MySQL data layers, and delivered high-throughput APIs.",
      roleHutech: "Software Engineering Student",
      schoolHutech: "Ho Chi Minh City University of Technology (HUTECH)",
      descHutech: "Graduated in Software Engineering with solid foundations in algorithmic design, data structures, and distributed software systems.",
    },
    skills: {
      sectionBadge: "Technical Skills",
      title: "Skill",
      highlight: "Matrix",
      subtitle: "Comprehensive skillset spanning modern Frontend, high-performance Backend, scalable Databases, and cutting-edge AI integrations.",
      langTitle: "Programming Languages",
      frameworkTitle: "Frameworks & Libraries",
      dbTitle: "Databases & Storage",
      toolsTitle: "Tools & DevOps",
      proficient: "Proficient",
      intermediate: "Intermediate",
      beginner: "Elementary",
      exploreMatrixBtn: "Explore In-Depth Skills",
    },
    projects: {
      sectionBadge: "Portfolio Showcase",
      title: "Featured",
      highlight: "Projects",
      subtitle: "Every project represents a practical solution — not just visually appealing, but solving real-world business challenges.",
      viewAllBtn: "View All Projects & Architecture",
      viewDetails: "View Architecture Details",
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
      categoryAll: "All Projects",
      architectureTitle: "Technical Architecture & Contributions",
      flipToBack: "Hover or tap to flip card",
      flipToFront: "Flip back to front",
      deepArchitecture: "Deep Architecture & Tech Specs",
      cardRank: "Project Card #",
    },
    ctaBanner: {
      badge: "Open for Opportunities",
      title: "Have a Project or New",
      highlight: "Career Opportunity?",
      subtitle: "I am always open to discussing software engineering solutions, AI Multi-Agent integration, and scalable full-stack architectures.",
      button: "Get in touch directly",
      viewCvBtn: "View Resume (PDF)",
    },
    contact: {
      sectionBadge: "Connect & Hire",
      title: "Ready for New",
      highlight: "Challenges",
      subtitle: "Looking for a systems-minded Full-Stack Software Engineer ready to innovate with modern AI? Leave a message or connect directly with me.",
      directTitle: "Direct Contact Information",
      directSubtitle: "I am always open to interview invitations, enterprise project collaborations, or technical discussions on AI & modern web systems.",
      phoneLabel: "Phone Number",
      emailLabel: "Official Email",
      addressLabel: "Location",
      addressValue: "Phu Thuan Ward, District 7, Ho Chi Minh City, Vietnam",
      githubLabel: "GitHub Repository",
      formOnlineBadge: "Online Inquiry Form",
      formTitle: "Send a message to Ngo Minh Thien",
      formSubtitle: "Your message will be securely stored in MongoDB and forwarded immediately.",
      nameLabel: "Your Full Name",
      namePlaceholder: "e.g. John Doe",
      emailFormLabel: "Your Email Address",
      emailPlaceholder: "e.g. contact@company.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g. Full-Stack Developer Opportunity",
      messageLabel: "Your Message",
      messagePlaceholder: "Write your message, project specifications, or collaboration details...",
      sendBtn: "Send Message Now",
      sendingBtn: "Storing in MongoDB...",
      successMessage: "Message sent successfully to Ngo Minh Thien!",
      errorMessage: "An error occurred while sending your message. Please try again!",
      requiredWarning: "Please complete all required fields.",
      mongoNote: "Backend FastAPI connected directly to MongoDB for real-time automated message handling.",
      openEmailApp: "Open in Your Email Client",
      emailDirectly: "Send Direct Email",
    },
    cvModal: {
      title: "Curriculum Vitae (CV) - Ngo Minh Thien",
      subtitle: "Software Engineer | Full-Stack & AI Systems Integrator",
      downloadBtn: "Download PDF",
      openTabBtn: "Open in New Tab",
      closeBtn: "Close",
      loading: "Loading CV document...",
    },
    footer: {
      roleDesc: "Software Engineer specializing in Full-Stack development, AI integration, and Multi-Agent systems. Dedicated to engineering enterprise software with clean code, peak performance, and superior UX.",
      pagesTitle: "Pages Navigation",
      contactTitle: "Direct Contact",
      backToTop: "Back to Top",
      copyright: "Ngo Minh Thien. All rights reserved.",
    },
  },
};
