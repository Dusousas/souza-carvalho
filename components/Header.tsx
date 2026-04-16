"use client";

import { FaPhone } from "react-icons/fa";
import Navbar from "./subc/Navbar";
import { MdEmail } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default function Header() {
  return (
    <header className="flex w-full">
      {/* Lado esquerdo */}
      <article className="flex w-[300px] shrink-0 items-center justify-center bg-AzulP px-6 py-6">
        <a href="/">
          <img
            className="w-full max-w-[180px]"
            src="/logo.png"
            alt="Logo Souza & Carvalho"
          />
        </a>
      </article>

      <article className="flex flex-1 flex-col ">
        <div className="flex h-[30px] items-center justify-between bg-AzulP/70 px-6 py-2 text-white px-14">
          <div className="flex gap-10">
            <p className="flex text-sm text-white gap-2 items-center">
              <FaPhone /> (11) 1234-5678
            </p>

            <p className="flex text-sm text-white gap-2 items-center">
              <MdEmail className="text-lg" /> email@gmail.com
            </p>
          </div>

          <div className="flex gap-2">
            <a href=""><BiLogoInstagramAlt /></a>
            <a href=""><BiLogoInstagramAlt /></a>
            <a href=""><BiLogoInstagramAlt /></a>
            <a href=""><BiLogoInstagramAlt /></a>

          </div>
        </div>

        {/* Área branca */}
        <div className="flex min-h-[110px] items-center bg-white justify-between px-14">
          <Navbar />
                    <div className="">
            <a
              className="hero-cta inline-flex items-center gap-3 border border-[#e0b974]/35 bg-[#b68c5a] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#c79a61] hover:shadow-[0_20px_42px_rgba(182,140,90,0.38)]"
              href=""
            >
              <span>Entre em contato</span>

            </a>
          </div>
        </div>
      </article>
    </header>
  );
}
