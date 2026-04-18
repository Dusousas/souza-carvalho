"use client";

import type { ReactNode } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaPen,
  FaPhone,
  FaUser,
} from "react-icons/fa6";

function FieldIcon({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#B68C5A]">
      {children}
    </span>
  );
}

export default function Form() {
  return (
    <form className="rounded-[24px] bg-AzulP p-2" action="">
      <p className="text-center text-white/82">Atendimento personalizado</p>
      <h2 className="mt-2 text-center text-3xl text-white lg:text-[3rem]">
        Fale com a nossa equipe
      </h2>

      <div className="relative mt-8">
        <input
          className="w-full rounded-full bg-white px-5 py-4 pr-14 text-black outline-0 placeholder:text-[#7B808B]"
          placeholder="Nome completo"
          type="text"
          name=""
          id=""
        />
        <FieldIcon>
          <FaUser />
        </FieldIcon>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="relative">
          <input
            className="w-full rounded-full bg-white px-5 py-4 pr-14 text-black outline-0 placeholder:text-[#7B808B]"
            placeholder="Email"
            type="text"
            name=""
            id=""
          />
          <FieldIcon>
            <FaEnvelope />
          </FieldIcon>
        </div>

        <div className="relative">
          <input
            className="w-full rounded-full bg-white px-5 py-4 pr-14 text-black outline-0 placeholder:text-[#7B808B]"
            placeholder="Telefone"
            type="text"
            name=""
            id=""
          />
          <FieldIcon>
            <FaPhone />
          </FieldIcon>
        </div>
      </div>

      <div className="relative mt-6">
        <textarea
          className="w-full resize-none rounded-[28px] bg-white px-5 py-5 pr-14 text-black outline-0 placeholder:text-[#7B808B]"
          placeholder="Descreva sua demanda"
          name=""
          rows={7}
          id=""
        ></textarea>
        <span className="pointer-events-none absolute right-5 top-6 text-[#B68C5A]">
          <FaPen />
        </span>
      </div>

      <button className="hero-cta mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#B88B5A] px-4 py-4 text-white shadow-[0_14px_28px_rgba(184,139,90,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#c69964]">
        <span>Enviar mensagem</span>
        <FaPaperPlane className="text-sm" />
      </button>
    </form>
  );
}
