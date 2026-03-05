import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { blogPosts } from "../data/blogs";

export function BlogsListPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-[60vh] bg-[#FDF8F0] pb-16 pt-24 md:pt-28">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h1
            className="text-[#2D1B00] mb-4"
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 700,
            }}
          >
            新聞與觀點
          </h1>
          <p
            className="text-[#5A4A3A] max-w-2xl mx-auto"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            聚焦「愛國主義教育課程框架」、AI 數字學習平台、公民與社會發展科教材等主題，分享最新政策解讀與教學實踐案例。
          </p>
        </motion.div>

        {/* List */}
        <div className="space-y-5">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E8D5B5]/60 cursor-pointer"
              onClick={() => navigate(`/blogs/${post.slug}`)}
            >
              <div className="p-5 md:p-6">
                <p
                  className="text-[#8B0000] text-xs md:text-sm mb-1"
                  style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {post.category}
                </p>
                <h2
                  className="text-[#2D1B00] mb-2"
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: "clamp(18px, 2.4vw, 22px)",
                    fontWeight: 700,
                    lineHeight: 1.5,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-[#7A6A5A] mb-3"
                  style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                  }}
                >
                  發布日期：{post.date}
                </p>
                <p
                  className="text-[#5A4A3A]"
                  style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <span
                    className="inline-flex items-center gap-1 text-[#8B0000]"
                    style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    閱讀更多
                    <span aria-hidden>›</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}


