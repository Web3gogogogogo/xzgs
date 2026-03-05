import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { getPostBySlug } from "../data/blogs";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <main className="min-h-[60vh] bg-[#FDF8F0] pb-16 pt-24 md:pt-28">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-[#2D1B00] mb-4"
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 700,
            }}
          >
            抱歉，找不到相關文章
          </h1>
          <p
            className="text-[#5A4A3A] mb-6"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            文章可能已被移除或網址有誤。你可以返回「新聞與觀點」瀏覽其他內容。
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#8B0000] text-white hover:bg-[#A00000] transition-all"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            返回新聞與觀點
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-[60vh] bg-[#FDF8F0] pb-16 pt-24 md:pt-28">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate("/blogs")}
            className="mb-4 inline-flex items-center gap-1 text-[#8B0000] hover:underline"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            ‹ 返回新聞與觀點
          </button>

          <p
            className="text-[#8B0000] text-xs md:text-sm mb-1"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 500,
            }}
          >
            {post.category}
          </p>
          <h1
            className="text-[#2D1B00] mb-3"
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            {post.title}
          </h1>
          <p
            className="text-[#7A6A5A] mb-6"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            發布日期：{post.date}
          </p>

          <article
            className="text-[#2D1B00] whitespace-pre-line"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "15px",
              lineHeight: 1.9,
              fontWeight: 400,
            }}
          >
            {post.content}
          </article>
        </motion.div>
      </section>
    </main>
  );
}


