import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "首頁", href: "#hero" },
  { label: "產品簡介", href: "#about" },
  { label: "新聞資訊", href: "#news" },
  { label: "系統展示", href: "#showcase" },
  { label: "應用場景", href: "#scenarios" },
  { label: "聯絡我們", href: "#contact" },
  { label: "FAQ", href: "#faq" },
  { label: "Blogs", href: "/blogs" },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // 非首頁：一進入頁面就使用紅色導航，不再依賴滾動
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    // Blogs 等獨立頁面
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    // 首頁內部區塊：如果當前不在首頁，先跳回首頁並帶上 hash
    if (!isHome) {
      navigate({ pathname: "/", hash: href });
      return;
    }

    // 已在首頁，直接平滑滾動
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#8B0000]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="xzgs logo"
              className="h-10 w-auto"
            />
            <span
              className="text-white hidden sm:block"
              style={{
                fontFamily: "'Noto Serif TC', serif",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              愛國主義教育AI數字學習平台
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 rounded-lg text-white/90 hover:text-[#FFD700] hover:bg-white/10 transition-all"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://xzgs.gitbook.io/ai-guo-zhu-yi-jiao-yu-ai-shu-zi-xue-xi-ping-tai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-white/90 hover:text-[#FFD700] hover:bg-white/10 transition-all cursor-pointer"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Docs
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#8B0000]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-[#FFD700] hover:bg-white/10 rounded-lg transition-all"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://xzgs.gitbook.io/ai-guo-zhu-yi-jiao-yu-ai-shu-zi-xue-xi-ping-tai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left px-4 py-3 text-white/90 hover:text-[#FFD700] hover:bg-white/10 rounded-lg transition-all"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              Docs
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}