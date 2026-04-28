"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "./subc/Navbar";

const mobileLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O escritório", href: "#escritorio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full">
      <div
        className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50 bg-AzulP" : "relative z-50"}`}
      >
        <div className="flex items-center gap-3 bg-AzulP px-4 py-3 text-white">
          <Link href="/" className="flex min-w-0 flex-1 items-center">
            <img
              className="block h-12 w-auto max-w-[170px] object-contain object-left"
              src="/logo.png"
              alt="Logo Souza & Carvalho"
            />
          </Link>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base text-white transition hover:bg-white/15"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`bg-[#f7f3eb] transition-all duration-300 ease-out ${
            mobileMenuOpen
              ? "pointer-events-auto visible fixed inset-x-0 bottom-0 top-[72px] opacity-100"
              : "pointer-events-none invisible fixed inset-x-0 bottom-0 top-[72px] opacity-0"
          }`}
        >
          <div
            className={`flex h-full flex-col px-4 py-4 transition-all duration-300 ease-out ${
              mobileMenuOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.98]"
            }`}
          >
            <nav>
              <ul className="space-y-1.5">
                {mobileLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between rounded-2xl border border-[#1C355D]/10 bg-white px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-AzulP transition hover:border-[#b68c5a]/40 hover:text-[#b68c5a]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="text-lg leading-none">+</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-4 grid gap-3">
              <a
                href="tel:+5516991110752"
                className="flex items-center gap-3 rounded-2xl bg-AzulP px-4 py-3.5 text-sm text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base">
                  <FaPhone />
                </span>
                <span>
                  <strong className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Telefone
                  </strong>
                  (16) 99111-0752
                </span>
              </a>

              <a
                href="mailto:fernando.adv.souza@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-[#1C355D]/10 bg-white px-4 py-3.5 text-sm text-AzulP"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-AzulP text-base text-white">
                  <MdEmail />
                </span>
                <span>
                  <strong className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-AzulP/55">
                    E-mail
                  </strong>
                  fernando.adv.souza@gmail.com
                </span>
              </a>
            </div>

            <a
              className="hero-cta mt-auto flex items-center justify-center gap-3 rounded-2xl border border-[#e0b974]/35 bg-[#b68c5a] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#c79a61]"
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Entre em contato</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden w-full lg:flex">
        <article className="flex w-[300px] shrink-0 items-center justify-center bg-AzulP px-6 py-6">
          <Link href="/">
            <img
              className="w-full max-w-[180px]"
              src="/logo.png"
              alt="Logo Souza & Carvalho"
            />
          </Link>
        </article>

        <article className="flex flex-1 flex-col">
          <div className="flex h-[30px] items-center justify-between bg-AzulP/70 px-14 py-2 text-white">
            <div className="flex gap-10">
              <p className="flex items-center gap-2 text-sm text-white">
                <FaPhone /> (16) 99111-0752
              </p>

              <p className="flex items-center gap-2 text-sm text-white">
                <MdEmail className="text-lg" /> fernando.adv.souza@gmail.com
              </p>
            </div>

            <div className="flex gap-2">
              <a href="">
                <BiLogoInstagramAlt />
              </a>
              <a href="">
                <BiLogoInstagramAlt />
              </a>
              <a href="">
                <BiLogoInstagramAlt />
              </a>
              <a href="">
                <BiLogoInstagramAlt />
              </a>
            </div>
          </div>

          <div className="flex min-h-[110px] items-center justify-between bg-white px-14">
            <Navbar />
            <div>
              <a
                className="hero-cta inline-flex items-center gap-3 border border-[#e0b974]/35 bg-[#b68c5a] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#c79a61] hover:shadow-[0_20px_42px_rgba(182,140,90,0.38)]"
                href="#contato"
              >
                <span>Entre em contato</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </header>
  );
}
