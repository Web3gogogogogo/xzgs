import { Award, Eye, Handshake, Wrench } from "lucide-react";

const authorities = [
  { icon: Award, role: "指導部門", name: "中共中央宣傳部" },
  { icon: Eye, role: "監製機構", name: "中華人民共和國國史學會" },
  {
    icon: Handshake,
    role: "支持機構",
    name: "新華社、中國圖片社、中央黨史文獻研究院等國家級機構",
  },
  {
    icon: Wrench,
    role: "研發單位",
    name: "北京五洲傳媒及當代大華文化傳播公司聯合出品",
  },
];

function MarqueeItem({
  icon: Icon,
  role,
  name,
}: {
  icon: typeof Award;
  role: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-3 px-8 shrink-0">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B0000] to-[#B22222] flex items-center justify-center shrink-0">
        <Icon size={18} className="text-[#FFD700]" />
      </div>
      <div className="flex items-center gap-2">
        <span
          className="text-[#FFD700]/70 shrink-0"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          【{role}】
        </span>
        <span
          className="text-white whitespace-nowrap"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {name}
        </span>
      </div>
      {/* Divider dot */}
      <span className="text-[#FFD700]/30 ml-4">|</span>
    </div>
  );
}

export function AuthoritySection() {
  return (
    <section
      id="authority"
      className="relative py-6 md:py-8 overflow-hidden bg-[#1A0A00]"
    >
      {/* Top/Bottom subtle lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />

      {/* Label */}
      <div className="text-center mb-4">
        <span
          className="text-[#FFD700] tracking-[0.2em]"
          style={{
            fontFamily: "'Noto Serif TC', serif",
            fontSize: "16px",
            fontWeight: 700,
          }}
        >
          權威機構聯合指導、監製與支持
        </span>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1A0A00] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1A0A00] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {/* Duplicate items for seamless loop */}
            {[...authorities, ...authorities, ...authorities].map(
              (auth, i) => (
                <MarqueeItem
                  key={`${auth.role}-${i}`}
                  icon={auth.icon}
                  role={auth.role}
                  name={auth.name}
                />
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}