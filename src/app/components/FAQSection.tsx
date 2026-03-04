import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    title: "售後保養與技術支援（包含硬件換新政策）",
    items: [
      {
        question: "如果硬件（學習機）出現故障，保養條款如何？",
        answer:
          "我們提供業界領先的保證：\n\n首年：硬件故障提供一年包換服務。\n續費期內：只要學校持續訂閲平台服務，硬件始終享有包換保養。\n非訂閲期：若停止訂閲，則不享有免費換新服務，內容更新亦會停留在續費結束當年，後續如需硬件維修將酌收零件與人工費用。",
      },
      {
        question: "如果連線不穩或出現故障，多久能修復？",
        answer:
          "我們提供本地及在線實時支援。學校可經由 WhatsApp 專屬羣組直接聯繫技術團隊，一般問題 8 小時內回覆，重大故障 24 小時內提供解決方案。",
      },
      {
        question: "賬號如何管理？如果學生忘記密碼怎麼辦？",
        answer:
          "平台設有學校管理後台，操作直觀簡單。老師可為學生一鍵重置密碼，或批量導入學生賬號。",
      },
    ],
  },
  {
    title: "多端使用與網絡安全",
    items: [
      {
        question: "如果全校只有一台學習機，其他同學能同時使用嗎？",
        answer:
          "可以。為了配合全校教學，我們支持多端同步使用。除了硬件學習機，我們亦可提供 PC 客户端下載或網頁端登入（視方案可能涉及額外服務費），確保多名學生能同時在不同設備上學習。",
      },
      {
        question: "學校網絡有防火牆，平台能順暢運行嗎？",
        answer:
          "技術團隊會與貴校 IT 組對接，提供特定白名單網址，確保 AI 互動及高清影片在校園網環境下流暢無阻。",
      },
      {
        question: "學生數據安全嗎？會不會泄露隱私？",
        answer:
          "平台嚴格遵守香港《個人資料（私隱）條例》。學生賬號僅用於記錄學習進度，不收集過多敏感信息，所有數據均經過加密處理。",
      },
    ],
  },
  {
    title: "內容更新、版權與教學配合",
    items: [
      {
        question: "平台的內容版權是否有保障？",
        answer:
          "保證版權合法合規。本平台所有內容均經由官方機構審核完畢，獲得授權使用，學校可放心用於日常教學及公開演示，無版權法律後顧之憂。",
      },
      {
        question: "內容會持續更新嗎？",
        answer:
          "在訂閲期內，內容會定期同步更新。特別是針對重大國家事件及最新國情數據，確保教材具備時效性。若停止訂閲，內容則停留在最後續費之年份。",
      },
      {
        question: "有沒有配套的工作紙或評估報告？",
        answer:
          "平台內置 2,600+ 道習題。老師可一鍵導出學習進度及練習成績，作為平時分或公民科考察的參考數據。",
      },
    ],
  },
  {
    title: "報價與採購流程",
    items: [
      {
        question: "這是一次性購買還是按年續費？",
        answer:
          "我們提供靈活方案。學校可選擇按年訂閲（Subscription）或一次性購買多年授權。我們可以提供符合教育局招標要求的正式報價單（Quotation）。",
      },
      {
        question: "如果我們有多個校區，可以共享賬號嗎？",
        answer:
          "我們提供校園版授權，原則上不限校內同時在線人數。針對跨校區使用，我們可根據實際需求提供集羣授權方案（可能涉及額外授權費用）。",
      },
    ],
  },
];

export function FAQSection() {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set([0]));
  const [openQuestions, setOpenQuestions] = useState<Record<number, Set<number>>>({
    0: new Set([0]),
  });

  const toggleCategory = (index: number) => {
    const next = new Set(openCategories);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setOpenCategories(next);
  };

  const toggleQuestion = (catIndex: number, qIndex: number) => {
    const current = openQuestions[catIndex] ?? new Set<number>();
    const next = new Set(current);
    if (next.has(qIndex)) {
      next.delete(qIndex);
    } else {
      next.add(qIndex);
    }
    setOpenQuestions({
      ...openQuestions,
      [catIndex]: next,
    });
  };

  return (
    <section id="faq" className="relative py-14 md:py-20 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            FAQ 常見問題
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto mb-3" />
          <p
            className="text-[#5A4A3A] max-w-3xl mx-auto"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            針對學校在採購、部署及教學應用上的常見問題，我們整理了以下解答，方便快速了解整體方案。
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-5">
          {faqCategories.map((cat, catIndex) => {
            const categoryOpen = openCategories.has(catIndex);
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8D5B5]/60"
              >
                {/* Category header */}
                <button
                  className="w-full flex items-center justify-between gap-3 px-5 md:px-6 py-4 md:py-5 hover:bg-[#FDF8F0]/70 rounded-t-xl"
                  onClick={() => toggleCategory(catIndex)}
                >
                  <h3
                    className="text-[#2D1B00] text-left"
                    style={{
                      fontFamily: "'Noto Serif TC', serif",
                      fontSize: "clamp(16px, 2.2vw, 20px)",
                      fontWeight: 700,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: categoryOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={22} className="text-[#8B0000]" />
                  </motion.div>
                </button>

                {/* Questions */}
                <AnimatePresence initial={false}>
                  {categoryOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-[#E8D5B5]/60"
                    >
                      <div className="px-5 md:px-6 py-4 md:py-5 space-y-3">
                        {cat.items.map((item, qIndex) => {
                          const questionOpen = openQuestions[catIndex]?.has(qIndex);
                          return (
                            <div
                              key={item.question}
                              className="rounded-lg border border-[#E8D5B5]/50 bg-[#FFFDF8]"
                            >
                              <button
                                className="w-full flex items-center justify-between gap-3 px-3.5 md:px-4 py-3 hover:bg-[#FDF8F0]/80 rounded-t-lg"
                                onClick={() => toggleQuestion(catIndex, qIndex)}
                              >
                                <p
                                  className="text-[#2D1B00] text-left"
                                  style={{
                                    fontFamily: "'Noto Sans TC', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                  }}
                                >
                                  Q：{item.question}
                                </p>
                                <motion.div
                                  animate={{ rotate: questionOpen ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="flex-shrink-0"
                                >
                                  <ChevronDown size={18} className="text-[#8B0000]" />
                                </motion.div>
                              </button>
                              <AnimatePresence initial={false}>
                                {questionOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div
                                      className="px-3.5 md:px-4 pb-3 text-[#5A4A3A] whitespace-pre-line"
                                      style={{
                                        fontFamily: "'Noto Sans TC', sans-serif",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        lineHeight: 1.8,
                                      }}
                                    >
                                      A：{item.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


