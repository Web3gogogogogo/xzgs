import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const PRIMARY_VIDEO_URL =
  "https://hk-1329293903.cos.ap-hongkong.myqcloud.com/Web%20/%E6%84%9B%E5%9C%8B%E4%B8%BB%E7%BE%A9%E6%95%99%E8%82%B2ai%E6%95%B8%E5%AD%97%E5%AD%B8%E7%BF%92%E5%B9%B3%E5%8F%B0-1.webm";
const FALLBACK_VIDEO_URL =
  "https://hk-1329293903.cos.ap-hongkong.myqcloud.com/video/xuanchuan/xuanchuan.mp4";

export function ShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false; // 默认有声音
  }, []);

  return (
    <section id="showcase" className="relative py-14 md:py-20 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            系統展示
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto" />
        </motion.div>

        {/* Images */}
        <div>
          {/* Product Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#8B0000]/15 aspect-video">
              <video
                ref={videoRef}
                title="新中國史數字學習系統主介面"
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={PRIMARY_VIDEO_URL} type="video/webm" />
                <source src={FALLBACK_VIDEO_URL} type="video/mp4" />
                您的瀏覽器不支援視頻播放。
              </video>
            </div>
            <p
              className="text-center text-[#7A6A5A] mt-3"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              涵蓋國史大講堂、時代楷模、影像國史、國史影院等豐富模組
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
