import React from "react";
import { ContactSection } from "../components/sections/ContactSection";

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* 2 Cột: Thông tin liên lạc & Biểu mẫu tương tác nằm gọn gàng trên 1 trang */}
        <ContactSection isCompact={true} />
      </div>
    </div>
  );
};
