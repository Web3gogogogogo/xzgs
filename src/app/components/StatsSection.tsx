import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 11000, suffix: "+", unit: "分鐘", label: "珍貴獨家授權紀錄片" },
  { value: 1500, suffix: "+", unit: "部", label: "愛國主義影片" },
  { value: 600, suffix: "+", unit: "個", label: "重大歷史事件" },
  { value: 100, suffix: "+", unit: "萬字", label: "文獻資料" },
];

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref}>
      <span
        className="text-[#FFD700]"
        style={{
          fontFamily: "'Noto Serif TC', serif",
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 900,
        }}
      >
        {count.toLocaleString()}
        {suffix}
      </span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] via-[#6B0000] to-[#8B0000]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p
                className="text-[#FFD700]/60 mt-0.5"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {stat.unit}
              </p>
              <p
                className="text-white/60 mt-1"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
