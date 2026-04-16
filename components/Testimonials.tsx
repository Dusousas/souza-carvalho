"use client";

import { FaArrowLeft, FaQuoteRight, FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <>
      <section className="bgTesti py-20">
        <div className="maxW">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[#B68C5A] font-display tracking-[0.34em] font-bold uppercase md:text-base">
                Depoimentos
              </h3>
              <h1 className="text-5xl text-AzulP font-medium">
                O que dizem sobre nós
              </h1>
            </div>

            <div className="flex gap-4 justify-center items-center">
              <div className="bg-[#B68C5A] h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                <FaArrowLeft />
              </div>
              <div className="bg-[#B68C5A] rotate-180 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                <FaArrowLeft />
              </div>
            </div>
          </div>

          {/* DEPOIMENTOS WRAPER */}
          <article className="mt-10 flex gap-8">
            <div className="group relative bg-white py-10 shadow-lg border-b-6 border-Douradop rounded-xl px-10 flex overflow-hidden transition duration-400 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,53,93,0.10)]">
              <div className="absolute right-0 top-0 flex h-22 w-22 items-center justify-center rounded-bl-[28px] bg-[#F5F5F5] text-AzulP transition duration-500 group-hover:bg-AzulP group-hover:text-white">
                <FaQuoteRight className="text-[34px]" />
              </div>
              <div>
                <h3 className="text-AzulP text-2xl font-semibold">
                  Eduardo Sousa
                </h3>
                <p className="text-[#868686] text-[12px] uppercase">
                  CEO - Agência Youon
                </p>
                <FaStar className="text-yellow-500 mt-2" />

                <p className="text-[#868686] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  earum maiores vero odit veniam labore recusandae magni
                  quibusdam, repellat cumque at accusamus necessitatibus
                  delectus aspernatur cupiditate quod, accusantium ullam
                  eligendi?
                </p>
              </div>
            </div>

                        <div className="group relative bg-white py-10 shadow-lg border-b-6 border-Douradop rounded-2xl px-10 flex overflow-hidden transition duration-400 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,53,93,0.10)]">
              <div className="absolute right-0 top-0 flex h-22 w-22 items-center justify-center rounded-bl-[28px] bg-[#F5F5F5] text-AzulP transition duration-500 group-hover:bg-AzulP group-hover:text-white">
                <FaQuoteRight className="text-[34px]" />
              </div>
              <div>
                <h3 className="text-AzulP text-2xl font-semibold">
                  Eduardo Sousa
                </h3>
                <p className="text-[#868686] text-[12px] uppercase">
                  CEO - Agência Youon
                </p>
                <FaStar className="text-yellow-500 mt-2" />

                <p className="text-[#868686] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  earum maiores vero odit veniam labore recusandae magni
                  quibusdam, repellat cumque at accusamus necessitatibus
                  delectus aspernatur cupiditate quod, accusantium ullam
                  eligendi?
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
