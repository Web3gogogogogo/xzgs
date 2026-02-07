import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
// QR Code images - 如果图片不存在，请将二维码图片放在 src/assets/ 目录下
// import whatsappQr from "../../assets/whatsapp-qr.png";
// import wechatQr from "../../assets/wechat-qr.png";

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
            { icon: MapPin, text: "香港特別行政區" },
          ].map((item) => (
            <div 
              key={item.text} 
              className="flex items-center gap-2"
            >
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

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 max-w-5xl mx-auto"
        >
          {/* WhatsApp QR Code 1 - S~XZGS */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center gap-1.5">
              <WhatsAppLogo size={16} className="text-[#8B0000]" />
              <span
                className="text-[#2D1B00]"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                WhatsApp
              </span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg shadow-md p-2 flex items-center justify-center border-2 border-[#8B0000]/20">
              <img
                src="/whatsapp.png"
                alt="WhatsApp QR Code - S~XZGS"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className="text-[#5A4A3A] mt-1.5 text-center font-semibold"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              S~XZGS
            </p>
            <p
              className="text-[#5A4A3A] mt-0.5 text-center"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
              }}
            >
              掃描二維碼添加
            </p>
          </div>

          {/* WeChat QR Code 1 - S~XZGS */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#8B0000]"
              >
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.712c-1.33-.12-3.37.405-4.88 1.674-1.623 1.347-2.465 3.53-1.69 5.785a.821.821 0 0 1-.04.485 9.214 9.214 0 0 1-2.405-.741.659.659 0 0 0-.748.098l-1.84 1.077c.015-.15.015-.302 0-.453-.003-.152-.02-.303-.048-.453l.39-1.48a.59.59 0 0 0-.213-.665c-1.832-1.347-3.002-3.338-3.002-5.55 0-3.75 3.476-6.788 7.768-6.788.276 0 .543.015.811.05-.157.02-.315.02-.472.05zm-2.34 4.63c.518 0 .938.427.938.953a.945.945 0 0 1-.938.948.945.945 0 0 1-.937-.948c0-.526.42-.953.937-.953zm4.688 0c.518 0 .938.427.938.953a.945.945 0 0 1-.938.948.945.945 0 0 1-.937-.948c0-.526.42-.953.937-.953z"/>
              </svg>
              <span
                className="text-[#2D1B00]"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                WeChat
              </span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg shadow-md p-2 flex items-center justify-center border-2 border-[#8B0000]/20">
              <img
                src="/Wechat.png"
                alt="WeChat QR Code - S~XZGS"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className="text-[#5A4A3A] mt-1.5 text-center font-semibold"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              S~XZGS
            </p>
            <p
              className="text-[#5A4A3A] mt-0.5 text-center"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
              }}
            >
              掃描二維碼添加
            </p>
          </div>

          {/* WhatsApp QR Code 2 - C-XZGS */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center gap-1.5">
              <WhatsAppLogo size={16} className="text-[#8B0000]" />
              <span
                className="text-[#2D1B00]"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                WhatsApp
              </span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg shadow-md p-2 flex items-center justify-center border-2 border-[#8B0000]/20">
              <img
                src="/whatsapp2.png"
                alt="WhatsApp QR Code - C-XZGS"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className="text-[#5A4A3A] mt-1.5 text-center font-semibold"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              C-XZGS
            </p>
            <p
              className="text-[#5A4A3A] mt-0.5 text-center"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
              }}
            >
              掃描二維碼添加
            </p>
          </div>

          {/* WeChat QR Code 2 - C-XZGS */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#8B0000]"
              >
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.712c-1.33-.12-3.37.405-4.88 1.674-1.623 1.347-2.465 3.53-1.69 5.785a.821.821 0 0 1-.04.485 9.214 9.214 0 0 1-2.405-.741.659.659 0 0 0-.748.098l-1.84 1.077c.015-.15.015-.302 0-.453-.003-.152-.02-.303-.048-.453l.39-1.48a.59.59 0 0 0-.213-.665c-1.832-1.347-3.002-3.338-3.002-5.55 0-3.75 3.476-6.788 7.768-6.788.276 0 .543.015.811.05-.157.02-.315.02-.472.05zm-2.34 4.63c.518 0 .938.427.938.953a.945.945 0 0 1-.938.948.945.945 0 0 1-.937-.948c0-.526.42-.953.937-.953zm4.688 0c.518 0 .938.427.938.953a.945.945 0 0 1-.938.948.945.945 0 0 1-.937-.948c0-.526.42-.953.937-.953z"/>
              </svg>
              <span
                className="text-[#2D1B00]"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                WeChat
              </span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg shadow-md p-2 flex items-center justify-center border-2 border-[#8B0000]/20">
              <img
                src="/wechat2.png"
                alt="WeChat QR Code - C-XZGS"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className="text-[#5A4A3A] mt-1.5 text-center font-semibold"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              C-XZGS
            </p>
            <p
              className="text-[#5A4A3A] mt-0.5 text-center"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
              }}
            >
              掃描二維碼添加
            </p>
          </div>
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