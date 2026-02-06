import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

/**
 * WhatsApp Logo Component
 * WhatsApp 图标组件 - 用于显示 WhatsApp 联系方式的图标
 */
const WhatsAppLogo = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="WhatsApp"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function ContactSection() {
  return (
    <section id="contact" className="relative py-14 md:py-20 bg-[#FDF8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-[#2D1B00] mb-4"
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 700,
            }}
          >
            聯絡我們
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto mb-4" />
          <p
            className="text-[#5A4A3A]"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            歡迎各教育機構、學校及組織聯絡我們，了解更多產品資訊
          </p>
        </motion.div>

        {/* Contact info bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8"
        >
          {[
            { icon: Mail, text: "service@xzgs.org" },
            { icon: Mail, text: "service2@xzgs.org" },
            { icon: WhatsAppLogo, text: "+86 19924568214", tooltip: "WhatsApp" },
            { icon: MapPin, text: "香港特別行政區" },
          ].map((item) => (
            <div 
              key={item.text} 
              className="flex items-center gap-2"
              title={item.tooltip || ""}
            >
              {item.icon === WhatsAppLogo ? (
                <WhatsAppLogo size={16} className="text-[#8B0000]" />
              ) : (
                <item.icon size={16} className="text-[#8B0000]" />
              )}
              <span
                className="text-[#5A4A3A]"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Form link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdKq2QIvCy-ho_uD7Q2sxLIO3M3ulC0QZKEOVdk8L3rf1-GnA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#8B0000] to-[#B22222] text-white rounded-lg hover:shadow-lg transition-all"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            <Send size={16} />
            提交表單申請
          </a>
        </motion.div>
      </div>
    </section>
  );
}