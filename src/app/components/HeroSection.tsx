import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566234626884-8d1382c2842d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVhdCUyMHdhbGwlMjBjaGluYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzAyODEyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/80 via-[#8B0000]/70 to-[#4A0000]/90" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #FFD700 0, #FFD700 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#FFD700]/90 tracking-[0.3em] mb-4"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          學習強國 AI 學習機
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white mb-5"
          style={{
            fontFamily: "'Noto Serif TC', serif",
            fontSize: "clamp(30px, 5.5vw, 58px)",
            fontWeight: 900,
            lineHeight: 1.2,
          }}
        >
          愛國主義教育<span className="text-[#FFD700]">AI數字學習平台</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/75 max-w-xl mx-auto mb-8"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.8,
          }}
        >
          以「學習強國」「愛國主義教育」學習平台內容為基礎
          <br className="hidden sm:block" />
          結合AI智能互動，打造全新數字化學習體驗
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#8B0000] rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#FFD700]/20 transition-all"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            了解更多
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 border-2 border-[#FFD700]/40 text-[#FFD700] rounded-lg hover:bg-[#FFD700]/10 transition-all"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            聯絡我們
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-[#FFD700]/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
