"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "HOME" },
  { href: "#product", label: "OUR PRODUCT" },
  { href: "#contact", label: "CONTACT" },
  { href: "#whitepaper", label: "WHITEPAPER" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll khi mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Container với responsive padding */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 pt-3 sm:pt-4">
        <div className="relative">
          <div
            className={`
              relative flex items-center justify-between 
              h-14 sm:h-16 md:h-[72px]
              px-4 sm:px-6 md:px-8
              rounded-2xl sm:rounded-[22px] md:rounded-[26px]
              backdrop-blur-xl md:backdrop-blur-2xl
              bg-white/5
              transition-all duration-300
              ${
                scrolled
                  ? "shadow-[0_10px_50px_-10px_rgba(0,0,0,0.4)]"
                  : "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]"
              }
              before:absolute before:inset-0 
              before:rounded-2xl sm:before:rounded-[22px] md:before:rounded-[26px]
              before:bg-linear-to-b before:from-white/20 before:to-white/5
              before:pointer-events-none
              after:absolute after:inset-0 
              after:rounded-2xl sm:after:rounded-[22px] md:after:rounded-[26px]
              after:border after:border-white/40 after:opacity-40 after:pointer-events-none
            `}>
            {/* Logo - Responsive sizing */}
            <div className="shrink-0 relative z-10">
              <Link
                href="/"
                className="flex items-center group"
                aria-label="Go to Ubello home page">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/60c49f5aec6ab4e0ecf0c5d8427308991a32a802?width=200"
                  alt="Ubello Logo"
                  className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 relative z-10"
              aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-white/90 
                    text-xs xl:text-sm 
                    font-medium
                    hover:text-white
                    transition-all duration-200
                    hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
                    relative
                    after:absolute after:bottom-0 after:left-0 after:right-0
                    after:h-0.5 after:bg-white after:scale-x-0
                    after:transition-transform after:duration-200
                    hover:after:scale-x-100
                    py-2
                    whitespace-nowrap
                  ">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Shows on mobile & tablet */}
            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="
                lg:hidden relative z-10
                text-white/90 hover:text-white 
                transition-all duration-200
                p-2 sm:p-2.5
                rounded-xl 
                hover:bg-white/10 
                active:scale-95
                min-w-11 min-h-11
                flex items-center justify-center
              ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* -------------------- MOBILE/TABLET MENU (Glass Bubble) -------------------- */}
          {mobileMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Mobile menu panel - với width giới hạn */}
              <div className="lg:hidden mt-2 sm:mt-3 relative z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div
                  className="
                    relative 
                    p-3 sm:p-4
                    rounded-2xl sm:rounded-[22px] md:rounded-[26px]
                    backdrop-blur-xl md:backdrop-blur-2xl
                    bg-white/5
                    border border-white/30
                    shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]
                    before:absolute before:inset-0 
                    before:rounded-2xl sm:before:rounded-[22px] md:before:rounded-[26px]
                    before:bg-linear-to-b before:from-white/20 before:to-white/5
                    before:pointer-events-none
                    after:absolute after:inset-0 
                    after:rounded-2xl sm:after:rounded-[22px] md:after:rounded-[26px]
                    after:border after:border-white/40 after:opacity-40 after:pointer-events-none
                    max-h-[calc(100vh-120px)]
                    overflow-y-auto
                  ">
                  <div className="flex flex-col gap-1 sm:gap-2 relative z-10">
                    {NAV_ITEMS.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="
                          text-white/90 
                          text-sm sm:text-base
                          font-medium
                          hover:text-white
                          hover:bg-white/10
                          active:bg-white/20
                          transition-all duration-200
                          px-4 sm:px-5
                          py-3 sm:py-3.5
                          rounded-xl sm:rounded-2xl
                          min-h-12
                          flex items-center
                          animate-in fade-in slide-in-from-top-1
                          text-center
                          justify-center
                        "
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animationFillMode: "backwards",
                        }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
