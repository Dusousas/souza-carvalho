"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section
        id="escritorio"
        className="bg-[#F5F5F5] pt-20 pb-20 relative overflow-hidden scroll-mt-28 lg:pb-40"
      >
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
          className="absolute bottom-0 right-0 pointer-events-none select-none z-0 hidden lg:block"
          src="/transp/about-mart.png"
          alt=""
        />

        <div className="maxW flex flex-col-reverse items-center gap-20 relative z-10 lg:flex-row">
          <article className="flex flex-col items-center gap-6 w-full lg:flex-row">
            <div className="relative shrink-0 hidden lg:block">
              <div className="absolute -top-4 -left-4 w-full h-full border border-AzulP/40 rounded-tl-[80px] rounded-b-[80px] z-0"></div>
              <img
                className="relative z-10 w-[260px] h-[620px] object-cover rounded-tl-[80px] rounded-b-[80px]"
                src="/about-1-left.jpg"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-6">
              <img
                className="relative z-10 h-[310px] object-cover rounded-t-[80px] rounded-br-[80px]"
                src="/gui.png"
                alt=""
              />

              <img
                className="relative z-10 h-[310px] object-cover rounded-b-[80px] rounded-tr-[80px]"
                src="/fer.png"
                alt=""
              />
            </div>
          </article>

          <article className="relative z-10">
            <h3 className="text-[#B68C5A] font-display tracking-[0.34em] text-center lg:text-left uppercase md:text-base">
              Sobre o escritório
            </h3>

            <h1 className="text-3xl mt-2 text-AzulP font-medium text-center lg:text-left lg:text-5xl">
              Advocacia moderna, estratégica e altamente técnica.
            </h1>

            <p className="text-[#868686] mt-6 text-center lg:text-left">
              Fundada em 2024, a Souza Junior & Carvalho Sociedade de Advogados atua em todo o Brasil com atendimento personalizado, análise criteriosa e soluções jurídicas eficientes, tanto na esfera preventiva quanto contenciosa.
            </p>

            <div className="mt-6">
              <p className="flex gap-2 items-center text-AzulP">
                <FaCheck /> {"Ética, transparência e comprometimento com resultados"}
              </p>
              <p className="flex gap-2 items-center text-AzulP mt-1">
                <FaCheck /> {"Estratégias jurídicas personalizadas para cada demanda"}
              </p>
              <p className="flex gap-2 items-center text-AzulP mt-1">
                <FaCheck /> {"Segurança jurídica para pessoas físicas e jurídicas"}
              </p>
              <p className="flex gap-2 items-center text-AzulP mt-1">
                <FaCheck /> {"Proximidade, clareza e responsabilidade em cada atuação"}
              </p>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                className="hero-cta inline-flex items-center gap-3 border border-[#e0b974]/35 bg-[#b68c5a] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_38px_rgba(182,140,90,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-[#c79a61] hover:shadow-[0_20px_42px_rgba(182,140,90,0.38)]"
                href="#contato"
              >
                <span>Entre em contato</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <div className="relative z-30 mx-auto h-0 w-full max-w-[1400px] px-4 hidden lg:block">
        <article className="-translate-y-1/2 w-full rounded-[34px] bg-[#b68c5a] px-8 py-10 shadow-[0_22px_60px_rgba(0,0,0,0.16)]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-4 px-4 py-4 xl:border-r xl:border-white/20">
              <img
                className="h-14 w-14 shrink-0 object-contain"
                src="/icons/counter_1_1.svg"
                alt=""
              />
              <div>
                <p className="text-white uppercase text-4xl leading-none">
                  2024
                </p>
                <p className="text-white text-xl mt-1">Fundação do escritório</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-4 xl:border-r xl:border-white/20">
              <img
                className="h-14 w-14 shrink-0 object-contain"
                src="/icons/counter_1_2.svg"
                alt=""
              />
              <div>
                <p className="text-white uppercase text-4xl leading-none">
                  Brasil
                </p>
                <p className="text-white text-xl mt-1">Atuação nacional</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-4 xl:border-r xl:border-white/20">
              <img
                className="h-14 w-14 shrink-0 object-contain"
                src="/icons/counter_1_3.svg"
                alt=""
              />
              <div>
                <p className="text-white text-4xl uppercase leading-none">
                  Preventiva
                </p>
                <p className="text-white text-xl mt-1">Consultoria estratégica</p>
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
                  Contenciosa
                </p>
                <p className="text-white text-xl mt-1">Defesa técnica e firme</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
