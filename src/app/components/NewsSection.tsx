import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ChevronDown } from "lucide-react";

const newsItems = [
  {
    title: "陳國基：特區政府一直高度重視愛國主義教育",
    content: `政務司司長陳國基強調，特區政府高度重視愛國主義教育，並視之為一項需要以軟性、打動人心的方式進行，關乎人心、細水長流的工作。政府將聯同社會各界，積極推廣香港及內地的愛國主義教育設施，鼓勵市民（尤其是學生和青年）參觀，以更全面認識國家的歷史與發展成就。陳國基指出，升國旗儀式不僅是情感培養，更是價值觀的建立，旨在讓愛國愛港成為自覺的信念與行動。政府會將愛國主義教育融入日常教學，內容涵蓋國史國情、中華文化、國家地理、《憲法》和《基本法》、國家象徵、國家安全等元素，並結合價值觀教育與全方位學習活動。`,
    source: "香港電台新聞",
    date: "2026年1月31日",
    link: "https://news.rthk.hk/rthk/ch/component/k2/1842164-20260131.htm",
  },
  {
    title: "立法會十四題：港澳青少年愛國主義教育基地",
    content: `此份立法會答覆主要圍繞在香港以外設立「港澳青少年愛國主義教育基地」的相關工作：

基地設立規劃：政府確認，自去年在北京中國人民抗日戰爭紀念館設立首個基地後，正積極物色其他合適的內地愛國主義教育設施，以納入特區愛國主義教育基地網絡。具體地點和安排將在與內地部門商討後公布。

推動參訪措施：
學生方面：教育局通過中小學生內地交流計劃及高中公民科的內地考察，已安排或計劃安排行程訪問北京的基地。
青年方面：民政事務總署和民政及青年事務局通過資助各類內地交流團，鼓勵青年參訪各類抗戰紀念館及愛國主義教育設施，並在未來的資助計劃中優先考慮包含參訪基地的項目。

成效收集與檢討：教育局和民青局通過問卷、訪談、作品收集、隨隊考察及分享會等多種方式，收集師生和青年參與者對內地交流活動的反饋，以評估學習成效並持續優化參訪安排。`,
    source: "香港特區政府新聞公報",
    date: "2026年2月25日",
    link: "https://www.info.gov.hk/gia/general/202602/25/P2026022500310.htm",
  },
  {
    title: "立法會六題：在學校推展國民及國家安全教育",
    content: `此份答覆詳細說明了教育局在學校推動國民及國家安全教育（愛國主義教育）的多項具體措施：

教師培訓：
國家安全教育：2025年6月至2026年1月舉辦了12場簡介會，並在2025/26學年提供不少於1,000個培訓名額。截至2025年12月，已舉辦近160場相關培訓，參與超過15,600人次。
小學人文科：自2023/24學年起已提供約32,000個培訓名額，並通過「學習圈」和「到校工作坊」等形式支援教師。
高中中史及歷史科：為2027年實施的優化課程，將在2026/27學年提供不少於1,500個培訓名額。

教師要求與指引：
自2023/24學年起，所有公帑資助學校及參加幼稚園教育計劃的幼稚園的新聘教師，必須通過《基本法及香港國安法》測試。
教育局已向學校發出行政和教育指引，要求學校建立校本機制推行國家安全教育，並須每年提交報告。

成效評估與視學：教育局通過學校探訪、日常溝通及加強國民教育的重點視學，檢視學校推行相關教育的成效，給予回饋，並推廣良好實踐經驗。`,
    source: "香港特區政府新聞公報",
    date: "2026年2月25日",
    link: "https://www.info.gov.hk/gia/general/202602/25/P2026022500269.htm",
  },
  {
    title: "立法會議員觀點：以AI賦能教育，促愛國教育與數位化發展",
    content: `立法會教育界議員鄧飛指出，生成式人工智慧（AI）正深刻改變教育領域，香港必須把握機遇，緊跟國家將教育數位化作為建設教育強國的政策方向。其核心觀點包括：

AI作為教育工具與內容：鄧飛認為，香港的經濟與社會發展離不開AI。應將AI作為重要的教育內容和工具，在實踐中不斷推動、檢討和優化，使教育與AI時代相適應。

以AI創新愛國主義教育：鄧飛觀察到，30歲以下的青年教師佔比不小，學生更是網路原生代。因此，推動愛國主義教育及廣義的品德教育，必須與AI時代相適應。他建議，將經典文本與新技術結合，利用年輕人熟悉的平台和方式呈現傳統文化與當代國情，使愛國主義教育在數位時代更具吸引力。

鞏固國際教育樞紐地位：鄧飛談到本屆特區政府「搶人才」、「留人才」的政策已見成效。為鞏固香港國際教育樞紐地位，他重點討論了「北都大學教育城」的發展，並傾向於支持引入內地與海外知名學府或研究機構的模式。他認為，從研究、教學到產業化，構建完整的產學研體系，吸引世界頂尖學者和優秀學生，才能形成可持續的教育生態。`,
    source: "新華社專訪",
    date: "2026年1月18日",
    link: "https://www.news.cn/gangao/20260118/17e9beb7664d4e72a4950122e6e87e95/c.html",
  },
];

export function NewsSection() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  // 创建重复的新闻项以实现无缝循环（重复3次以确保流畅）
  const duplicatedNews = [...newsItems, ...newsItems, ...newsItems];

  // 计算每个新闻项的大概高度（标题+来源+间距）
  const itemHeight = 120; // 大约高度
  const totalHeight = newsItems.length * itemHeight;

  return (
    <section id="news" className="relative py-14 md:py-20 bg-[#FDF8F0]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B0000] via-[#FFD700] to-[#8B0000]" />

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
            新聞資訊
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto mb-5" />
        </motion.div>

        {/* News Carousel Container */}
        <div className="relative h-[280px] md:h-[300px] overflow-hidden rounded-xl border border-[#E8D5B5]/50 bg-white shadow-sm">
          {/* Gradient masks for fade effect */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
          
          <div className="h-full overflow-hidden">
            <motion.div
              className="space-y-4 p-6"
              animate={{
                y: [0, -totalHeight],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedNews.map((news, index) => {
                const originalIndex = index % newsItems.length;
                const isExpanded = expandedItems.has(originalIndex);
                return (
                  <motion.div
                    key={`${originalIndex}-${Math.floor(index / newsItems.length)}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8D5B5]/30"
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Title - Clickable */}
                    <button
                      onClick={() => toggleItem(originalIndex)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-[#FDF8F0]/50 transition-colors rounded-t-lg"
                    >
                      <h3
                        className="text-[#2D1B00] flex-1"
                        style={{
                          fontFamily: "'Noto Serif TC', serif",
                          fontSize: "clamp(15px, 1.8vw, 18px)",
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        {news.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={20} className="text-[#8B0000]" />
                      </motion.div>
                    </button>

                    {/* Source and Link - Always Visible */}
                    <div className="px-4 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-[#E8D5B5]/30">
                      <p
                        className="text-[#7A6A5A]"
                        style={{
                          fontFamily: "'Noto Sans TC', sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                        }}
                      >
                        來源：{news.source} ({news.date})
                      </p>
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8B0000] text-white rounded-lg hover:bg-[#A00000] transition-all duration-200 text-sm"
                        style={{
                          fontFamily: "'Noto Sans TC', sans-serif",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        閱讀原文
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    {/* Content - Collapsible */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-4 pb-4 text-[#5A4A3A] whitespace-pre-line"
                            style={{
                              fontFamily: "'Noto Sans TC', sans-serif",
                              fontSize: "14px",
                              fontWeight: 400,
                              lineHeight: 1.8,
                            }}
                          >
                            {news.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

