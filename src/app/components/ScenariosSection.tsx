import { motion } from "motion/react";
import {
  GraduationCap,
  Building2,
  BookOpenCheck,
  Users,
  Landmark,
  Library,
  Shield,
  Heart,
} from "lucide-react";

const scenarios = [
  { icon: Users, title: "基層黨組織" },
  { icon: GraduationCap, title: "大中小學校" },
  { icon: Heart, title: "文明實踐中心" },
  { icon: Landmark, title: "機關單位" },
  { icon: Building2, title: "企事業單位" },
  { icon: Library, title: "書店書屋" },
  { icon: BookOpenCheck, title: "社區服務中心" },
  { icon: Shield, title: "軍營" },
];

export function ScenariosSection() {
  return (
    <section id="scenarios" className="relative py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2
            className="text-[#2D1B00] mb-3"
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 700,
            }}
          >
            應用場景
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {scenarios.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group flex flex-col items-center gap-2 py-3"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B0000] to-[#B22222] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <item.icon size={18} className="text-[#FFD700]" />
              </div>
              <span
                className="text-[#2D1B00] text-center"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
