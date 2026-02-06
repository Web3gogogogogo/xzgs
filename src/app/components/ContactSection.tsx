import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
            { icon: Mail, text: "info@learningchina.hk" },
            { icon: Phone, text: "+852 XXXX XXXX" },
            { icon: MapPin, text: "香港特別行政區" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={16} className="text-[#8B0000]" />
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