"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegClock,
} from "react-icons/fa6";
import Form from "./subc/Form";

const contactItems = [
  {
    icon: <FaPhone />,
    label: "Fernando Souza Junior",
    primary: "(16) 99111-0752",
    secondary: "fernando.adv.souza@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Guilherme Carvalho",
    primary: "(14) 99885-0361",
    secondary: "guilhermebcarvalho@adv.oabsp.org.br",
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-white py-20 scroll-mt-28 lg:py-24"
    >
      <div className="maxW">
        <article className="relative mx-auto overflow-hidden rounded-[30px] bg-[#F5F5F5] p-3 sm:p-5">
          <div className="relative z-10 grid gap-5 lg:grid-cols-2">
            <div className="min-w-0 rounded-[28px] bg-AzulP p-3 md:p-4">
              <Form />
            </div>

            <div className="min-w-0 flex h-full items-center py-4 rounded-[28px] border border-[#1C355D]/8 bg-white lg:py-0">
              <div className="mx-auto flex min-w-0 w-full flex-col justify-center gap-4 px-5 sm:px-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-[#B68C5A] font-display text-sm tracking-[0.30em] uppercase">
                    {"Entre em contato"}
                  </h3>

                  <h2 className="mt-2 break-words text-2xl font-medium leading-[1.05] text-AzulP">
                    {"Souza Junior & Carvalho Sociedade de Advogados"}
                  </h2>

                  <p className="mt-3 text-sm text-[#6F7480] lg:text-[15px]">
                    {
                      "Atuamos de forma 100% digital, atendendo clientes em todo o Brasil com agilidade, eficiência e segurança, sem abrir mão da proximidade e do suporte individualizado."
                    }
                  </p>
                </div>

                <div className="grid gap-2.5">
                  {contactItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-[20px] border border-[#1C355D]/8 bg-[#F7F7F7] px-3.5 py-2 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(28,53,93,0.06)] sm:items-center"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-AzulP text-lg text-white shadow-[0_10px_22px_rgba(28,53,93,0.16)]">
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        <p className="font-display font-medium leading-none text-[#B68C5A]">
                          {item.label}
                        </p>
                        <p className="mt-1 break-words text-sm font-medium leading-6 text-AzulP">
                          {item.primary}
                        </p>
                        <p className="mt-0.5 break-all text-xs leading-5 text-[#7B808B]">
                          {item.secondary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="rounded-[22px] bg-[linear-gradient(135deg,rgba(28,53,93,0.08),rgba(237,207,129,0.14))] px-4 py-3.5">
                    <div className="mb-2 flex items-center gap-3 text-AzulP">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base shadow-[0_10px_22px_rgba(28,53,93,0.08)]">
                        <FaRegClock />
                      </span>
                      <div>
                        <p className="font-display text-lg text-AzulP">
                          {"Escritório digital"}
                        </p>
                        <p className="text-xs leading-5 text-[#6F7480]">
                          {"Atendimento em todo o Brasil"}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs leading-6 text-[#6F7480]">
                      {
                        "Utilizamos tecnologia para facilitar reuniões online, envio de documentos digitais e acompanhamento processual à distância."
                      }
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <a
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-AzulP text-white transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:bg-[#B68C5A]"
                    href="#"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-AzulP text-white transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:bg-[#B68C5A]"
                    href="#"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-AzulP text-white transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:bg-[#B68C5A]"
                    href="#"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
