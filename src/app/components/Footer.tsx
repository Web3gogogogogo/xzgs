export function Footer() {
  return (
    <footer className="relative bg-[#1A0A00] py-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center">
              <span
                className="text-[#8B0000]"
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: "14px",
                  fontWeight: 900,
                }}
              >
                學
              </span>
            </div>
            <div>
              <p
                className="text-white"
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                新中國史數字學習機
              </p>
              <p
                className="text-white/40"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "11px",
                }}
              >
                學習強國 AI 學習機
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p
              className="text-white/40"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "12px",
                lineHeight: 1.8,
              }}
            >
              妙智科技(香港)有限公司 MVISIONER (HONG KONG) LIMITED
            </p>
            <p
              className="text-white/30"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "11px",
              }}
            >
              &copy; {new Date().getFullYear()} 版權所有
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}