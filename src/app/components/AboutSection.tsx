import { motion } from "motion/react";
import { Bot, MonitorPlay, BookOpen, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "權威官方授權",
    desc: "權威官方機構授權及審批通過",
    color: "#FFD700",
  },
  {
    icon: Bot,
    title: "AI互動學習",
    desc: "人工智能驅動的個性化學習",
    color: "#FF6B35",
  },
  {
    icon: MonitorPlay,
    title: "多媒體數字教學",
    desc: "影片、紀錄片、文獻多元媒介",
    color: "#00B4D8",
  },
  {
    icon: BookOpen,
    title: "海量學習資源",
    desc: "11,000+分鐘紀錄片及1,500+影片",
    color: "#2DC653",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-14 md:py-20 bg-[#FDF8F0]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B0000] via-[#FFD700] to-[#8B0000]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            產品簡介
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto mb-5" />
          <p
            className="text-[#5A4A3A] max-w-3xl mx-auto"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.9,
            }}
          >
            由中共中央宣傳部指導，學習強國讀書會、中華人民共和國國史學會監製，新華社、中國圖片社、中央黨史文獻研究院等國家級機構支持，北京五洲傳媒及當代大華文化傳播公司聯合出品，妙智科技（香港）有限公司
            研發。讓愛國主義教育
            <span className="text-[#8B0000]">生動形象</span>，讓理論宣傳和思想教育更
            <span className="text-[#8B0000]">接地氣</span>、更
            <span className="text-[#8B0000]">有活力</span>、更
            <span className="text-[#8B0000]">有溫度</span>。
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E8D5B5]/50"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{
                  background: `linear-gradient(135deg, ${feat.color}20, ${feat.color}35)`,
                }}
              >
                <feat.icon size={22} style={{ color: feat.color }} />
              </div>
              <h3
                className="text-[#2D1B00] mb-1"
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                {feat.title}
              </h3>
              <p
                className="text-[#7A6A5A]"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
