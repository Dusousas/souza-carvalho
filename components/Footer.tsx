"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

const quickLinks = [
  { label: "O escritório", href: "#escritorio" },
  { label: "Áreas de atuação", href: "#atuacao" },
  { label: "Nossa equipe", href: "#equipe" },
  { label: "Missão, visão e valores", href: "#valores" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-AzulP text-white pt-4">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_42%,rgba(237,207,129,0.08)_100%)]" />
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#EDCF81]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 maxW py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.9fr_0.8fr_0.9fr]">
          <div className="max-w-[360px]">
            <Link href="/">
              <img
                className="w-full max-w-[180px]"
                src="/logo.png"
                alt="Logo Souza & Carvalho"
              />
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/75">
              {
                "Advocacia moderna, estratégica e altamente técnica, com atendimento personalizado e atuação em todo o Brasil."
              }
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:bg-[#B68C5A]"
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:bg-[#B68C5A]"
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:bg-[#B68C5A]"
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-[#EDCF81]">Contato</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#EDCF81]">
                  <FaPhone />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Telefone</p>
                  <p className="mt-1 text-sm text-white/72">
                    (16) 99111-0752
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#EDCF81]">
                  <FaWhatsapp />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Atendimento</p>
                  <p className="mt-1 text-sm text-white/72">
                    (14) 99885-0361
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#EDCF81]">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="mt-1 text-sm text-white/72">
                    fernando.adv.souza@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-[#EDCF81]">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-sm text-white/72 transition duration-300 hover:translate-x-1 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-4 pt-6 text-center text-sm text-white/65 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p>© 2026 Souza & Carvalho. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a href="https://agenciayouon.com/" target="_blank" className="font-semibold uppercase text-white underline">
              You on
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
