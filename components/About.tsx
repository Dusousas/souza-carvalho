"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="bg-[#F5F5F5] pt-20 pb-40 relative overflow-hidden">
        {/* IMGS ABSOLUTAS */}
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 left-10 pointer-events-none select-none z-0"
          src="/transp/about-shape.png"
          alt=""
        />

        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-25 right-60 pointer-events-none select-none z-0"
          src="/transp/about-1-right.png"
          alt=""
        />

        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 pointer-events-none select-none z-0"
          src="/transp/about-mart.png"
          alt=""
        />

        <div className="maxW flex items-center gap-20 relative z-10">
          {/* ===== IMAGENS ===== */}
          <article className="flex items-center gap-6 w-full">
            {/* IMAGEM PRINCIPAL */}
            <div className="relative shrink-0">
              <div className="absolute -top-4 -left-4 w-full h-full border border-AzulP/40 rounded-tl-[80px] rounded-b-[80px] z-0"></div>

              <img
                className="relative z-10 w-[320px] h-[620px] object-cover rounded-tl-[80px] rounded-b-[80px]"
                src="/about-1-left.jpg"
                alt=""
              />
            </div>

            {/* COLUNA DIREITA */}
            <div className="flex flex-col gap-6">
              <img
                className="relative z-10 h-[310px] object-cover rounded-t-[80px] rounded-br-[80px]"
                src="/about-1-right.jpg"
                alt=""
              />

              <img
                className="relative z-10 h-[310px] object-cover rounded-b-[80px] rounded-tr-[80px]"
                src="/about-1-right.jpg"
                alt=""
              />
            </div>
          </article>

          {/* ===== TEXTO ===== */}
          <article className="relative z-10">
            <h3 className="text-[#B68C5A] font-display tracking-[0.34em] uppercase md:text-base">
              Sobre nós
            </h3>

            <h1 className="text-5xl mt-2 text-AzulP font-medium">
              Excelência jurídica com foco em resultados reais.
            </h1>

            <p className="text-[#868686] mt-6">
              {"Atuamos com estrat\u00e9gia, agilidade e compromisso para oferecer solu\u00e7\u00f5es jur\u00eddicas eficientes, sempre priorizando a seguran\u00e7a e os interesses dos nossos clientes."}
            </p>

            <div className="mt-6">
              <p className="flex gap-2 items-center text-AzulP">
                <FaCheck /> {"Atendimento personalizado e estrat\u00e9gico"}
              </p>
              <p className="flex gap-2 items-center text-AzulP mt-1">
                <FaCheck /> {"Transpar\u00eancia em cada etapa do processo"}
              </p>
              <p className="flex gap-2 items-center text-AzulP mt-1">
                <FaCheck /> {"Atua\u00e7\u00e3o \u00e9tica e comprometida"}
              </p>
              <p className="flex gap-2 items-center text-AzulP mt-1">
                <FaCheck /> {"Foco total na resolu\u00e7\u00e3o do seu problema"}
              </p>
            </div>

            <div className="mt-6 flex">
              <a
                className="hero-cta inline-flex items-center gap-3 border border-[#e0b974]/35 bg-[#b68c5a] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_38px_rgba(182,140,90,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-[#c79a61] hover:shadow-[0_20px_42px_rgba(182,140,90,0.38)]"
                href=""
              >
                <span>Entre em contato</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ===== CARD ENTRE AS 2 SECTIONS ===== */}
      <div className="relative z-30 mx-auto h-0 w-full max-w-[1400px] px-4">
        <article className="-translate-y-1/2 w-full rounded-[34px] bg-[#b68c5a] px-8 py-10 shadow-[0_22px_60px_rgba(0,0,0,0.16)]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-4 px-4 py-4 xl:border-r xl:border-white/20">
              <img
                className="h-14 w-14 shrink-0 object-contain"
                src="/icons/counter_1_1.svg"
                alt=""
              />
              <div>
                <p  className="text-white uppercase text-4xl  leading-none">
                  10k+
                </p>
                <p className="text-white text-xl mt-1">Casos atendidos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-4 xl:border-r xl:border-white/20">
              <img
                className="h-14 w-14 shrink-0 object-contain"
                src="/icons/counter_1_2.svg"
                alt=""
              />
              <div>
                <p className="text-white uppercase text-4xl  leading-none">
                  12k
                </p>
                <p className="text-white text-xl mt-1">Clientes atendidos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-4 xl:border-r xl:border-white/20">
              <img
                className="h-14 w-14 shrink-0 object-contain"
                src="/icons/counter_1_3.svg"
                alt=""
              />
              <div>
                <p  className="text-white text-4xl uppercase leading-none">
                  15k+
                </p>
                <p className="text-white text-xl mt-1">Clientes satisfeitos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-4">
              <img
                className="h-14 w-14 shrink-0 object-contain"
                src="/icons/counter_1_4.svg"
                alt=""
              />
              <div>
                <p className="text-white uppercase text-4xl leading-none">
                  20+
                </p>
                <p className="text-white text-xl mt-1">
                  {"Anos de experi\u00eancia"}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
