"use client";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa6";
import Form from "./subc/Form";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    primary: "contato@escritorio.com",
    secondary: "Resposta rápida e atendimento direto",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    primary: "+55 (11) 99999-9999",
    secondary: "Canal prático para primeiros contatos",
  },
];

export default function Contact() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="maxW">
        <article className="relative mx-auto  overflow-hidden rounded-[30px] bg-[#F5F5F5] p-5">
          <div className="relative z-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[28px] bg-AzulP p-3 md:p-4">
              <Form />
            </div>

            <div className="flex h-full items-center rounded-[28px] border border-[#1C355D]/8 bg-white ">
              <div className="mx-auto flex w-full px-6 flex-col justify-center gap-4">
                <div className="text-center lg:text-left">
                  <h3 className="text-[#B68C5A] font-display text-sm tracking-[0.30em] uppercase">
                    {"Contato"}
                  </h3>

                  <h2 className="mt-2 text-2xl font-medium leading-[0.98] text-AzulP">
                    {"Fale com nossa equipe de forma simples e direta."}
                  </h2>

                  <p className="mt-3 text-sm text-[#6F7480] lg:text-[15px]">
                    {
                      "Não atendemos em local físico. Nosso contato acontece por canais digitais, com orientação inicial, retorno ágil e encaminhamento personalizado para cada necessidade."
                    }
                  </p>
                </div>

                <div className="grid gap-2.5">
                  {contactItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-[20px] border border-[#1C355D]/8 bg-[#F7F7F7] px-3.5 py-2 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(28,53,93,0.06)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-AzulP text-lg text-white shadow-[0_10px_22px_rgba(28,53,93,0.16)]">
                        {item.icon}
                      </div>

                      <div>
                        <p className="font-display font-medium leading-none text-[#B68C5A]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-6 text-AzulP">
                          {item.primary}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-[#7B808B]">
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
                          {"Atendimento digital"}
                        </p>
                        <p className="text-xs leading-5 text-[#6F7480]">
                          {"Segunda a sexta, das 8h às 18h"}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs leading-6 text-[#6F7480]">
                      {
                        "Se preferir, envie sua mensagem pelo formulário e retornamos pelo melhor canal para você."
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
