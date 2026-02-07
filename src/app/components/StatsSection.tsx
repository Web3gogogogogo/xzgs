import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

// 固定统计数据 - 这些数字不可修改
// Fixed statistics data - these numbers should not be changed
const stats = [
  { value: 11000, suffix: "+", unit: "分鐘", label: "珍貴獨家授權紀錄片" },
  { value: 1500, suffix: "+", unit: "部", label: "愛國主義影片" },
  { value: 600, suffix: "+", unit: "個", label: "重大歷史事件" },
  { value: 100, suffix: "+", unit: "萬字", label: "文獻" },
] as const;

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);
  const hasCompletedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 如果已经完成，直接设置最终值并返回
    if (hasCompletedRef.current) {
      setCount(target);
      return;
    }

    // 如果已经启动，不再设置观察器
    if (hasStartedRef.current) return;

    // 检查元素是否已经在视口中
    const checkInView = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          hasStartedRef.current = true;
          return true;
        }
      }
      return false;
    };

    // 立即检查一次
    if (checkInView()) {
      // 启动动画
      const duration = 2000; // 2秒动画
      const steps = 60;
      const increment = target / steps;
      const intervalTime = duration / steps;
      let current = 0;
      let stepCount = 0;
      
      const timer = setInterval(() => {
        stepCount++;
        current += increment;
        if (current >= target || stepCount >= steps) {
          setCount(target);
          hasCompletedRef.current = true;
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, intervalTime);
      
      return () => clearInterval(timer);
    }

    // 如果不在视口中，设置观察器
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current && !hasCompletedRef.current) {
          hasStartedRef.current = true;
          
          // 启动动画
          const duration = 2000; // 2秒动画
          const steps = 60;
          const increment = target / steps;
          const intervalTime = duration / steps;
          let current = 0;
          let stepCount = 0;
          
          const timer = setInterval(() => {
            stepCount++;
            current += increment;
            if (current >= target || stepCount >= steps) {
              setCount(target);
              hasCompletedRef.current = true;
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, intervalTime);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [target]);

  // 如果已完成，确保显示最终值
  const displayCount = hasCompletedRef.current ? target : count;

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
        {displayCount.toLocaleString()}
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
