"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mariana Oliveira",
    role: "Cliente - Direito de Família",
    text: "Fui atendida com muita atenção e clareza em um momento delicado. O escritório conduziu tudo com profissionalismo e me deixou segura durante todo o processo.",
  },
  {
    name: "Carlos Henrique Santos",
    role: "Cliente - Área Empresarial",
    text: "Recebi uma orientação jurídica objetiva, estratégica e muito bem fundamentada. O suporte foi ágil e fez diferença na tomada de decisão da minha empresa.",
  },
  {
    name: "Patrícia Almeida",
    role: "Cliente - Direito do Consumidor",
    text: "Desde o primeiro contato percebi o comprometimento da equipe. Tive total transparência sobre cada etapa e um atendimento realmente humanizado.",
  },
  {
    name: "Roberto Ferreira",
    role: "Cliente - Consultoria Jurídica",
    text: "O escritório uniu conhecimento técnico, seriedade e disponibilidade. Recomendo pelo cuidado no atendimento e pela confiança transmitida em cada orientação.",
  },
];

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const updateCardsPerView = () => {
      setCardsPerView(mediaQuery.matches ? 1 : 2);
    };

    updateCardsPerView();
    mediaQuery.addEventListener("change", updateCardsPerView);

    return () => {
      mediaQuery.removeEventListener("change", updateCardsPerView);
    };
  }, []);

  const pages = useMemo(() => {
    const result = [];

    for (let i = 0; i < testimonials.length; i += cardsPerView) {
      result.push(testimonials.slice(i, i + cardsPerView));
    }

    return result;
  }, [cardsPerView]);

  const safeCurrentPage = Math.min(currentPage, Math.max(pages.length - 1, 0));

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentPage((page) => {
      const safePage = Math.min(page, Math.max(pages.length - 1, 0));
      return safePage === 0 ? pages.length - 1 : safePage - 1;
    });
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentPage((page) => {
      const safePage = Math.min(page, Math.max(pages.length - 1, 0));
      return safePage === pages.length - 1 ? 0 : safePage + 1;
    });
  };

  return (
    <section
      id="diferenciais"
      className="bgTesti py-16 scroll-mt-28 md:py-20"
    >
      <div className="maxW">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.34em] text-[#B68C5A] md:text-base">
              Depoimentos
            </h3>
            <h1 className="mt-3 text-3xl font-medium text-AzulP sm:text-4xl lg:text-5xl">
              Depoimentos de clientes
            </h1>
          </div>

          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center cursor-pointer justify-center rounded-full bg-[#B68C5A] text-AzulP transition hover:-translate-y-0.5 hover:bg-[#c79a61]"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center cursor-pointer rounded-full bg-[#B68C5A] text-AzulP transition hover:-translate-y-0.5 hover:bg-[#c79a61]"
            >
              <FaArrowLeft className="rotate-180" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={`${cardsPerView}-${safeCurrentPage}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 70 : -70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -70 : 70 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-5 lg:grid-cols-2 lg:gap-8"
            >
              {pages[safeCurrentPage]?.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="group relative flex min-h-[320px] overflow-hidden rounded-[24px] border-b-[6px] border-Douradop bg-white px-6 py-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,53,93,0.10)] sm:px-8 lg:min-h-[340px] lg:px-10"
                >
                  <div className="absolute right-0 top-0 flex h-20 w-20 items-center justify-center rounded-bl-[28px] bg-[#F5F5F5] text-AzulP transition duration-500 group-hover:bg-AzulP group-hover:text-white">
                    <FaQuoteRight className="text-[30px]" />
                  </div>

                  <div className="pr-8">
                    <h3 className="text-2xl font-semibold text-AzulP">
                      {testimonial.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#868686] sm:text-[12px]">
                      {testimonial.role}
                    </p>

                    <div className="mt-3 flex gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>

                    <p className="mt-5 text-[15px] leading-7 text-[#6f7480]">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para o slide ${index + 1}`}
              onClick={() => {
                setDirection(index > safeCurrentPage ? 1 : -1);
                setCurrentPage(index);
              }}
              className={`h-2.5 rounded-full transition-all ${
                index === safeCurrentPage ? "w-8 bg-AzulP" : "w-2.5 bg-AzulP/25 hover:bg-AzulP/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
