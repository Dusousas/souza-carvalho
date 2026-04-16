"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const attorneys = [
  {
    id: 1,
    name: "Guilherme Carvalho",
    role: "Advogado",
    image: "/prof1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "https://instagram.com/",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Fernando Souza",
    role: "Advogado",
    image: "/prof1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "https://instagram.com/",
      linkedin: "#",
    },
  },

];

export default function Attorneys() {
  return (
    <section className="relative overflow-hidden bgTeam py-20">
      <div className="absolute inset-0 bg-[#1C355D]/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C355D]/95 via-[#1C355D]/75 to-[#0f1e36]/90" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#27497d]/30 blur-3xl" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="maxW relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <article className="lg:w-[30%]">
          <p className="text-Douradop text-sm uppercase tracking-[0.3em]">
            Nossa equipe
          </p>

          <h1 className="mt-3 text-4xl font-semibold uppercase text-white md:text-5xl">
            Profissionais
          </h1>
        </article>

        <article className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-[70%] lg:grid-cols-3">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="group relative h-[380px] w-full overflow-hidden rounded-[22px]"
            >
              {/* IMAGEM */}
              <div className="absolute inset-x-0 top-0 h-[290px] overflow-hidden rounded-t-[22px] transition-all duration-500 group-hover:h-full group-hover:rounded-[22px]">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
                />

                {/* OVERLAY HOVER */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1C355D]/55 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <div className="px-6 text-center text-white">
                    <h3 className="text-[20px] font-semibold">
                      {attorney.name}
                    </h3>

                    <p className="mt-1 text-[14px] font-medium uppercase text-white/85">
                      {attorney.role}
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-5 text-[15px]">
                      {attorney.social.facebook && (
                        <a
                          href={attorney.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:scale-115"
                        >
                          <FaFacebookF />
                        </a>
                      )}

                      {attorney.social.twitter && (
                        <a
                          href={attorney.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:scale-115"
                        >
                          <FaTwitter />
                        </a>
                      )}

                      {attorney.social.instagram && (
                        <a
                          href={attorney.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:scale-115"
                        >
                          <FaInstagram />
                        </a>
                      )}

                      {attorney.social.linkedin && (
                        <a
                          href={attorney.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition duration-500 hover:-translate-y-1 hover:rotate-[360deg] hover:scale-115"
                        >
                          <FaLinkedinIn />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* BASE AZUL */}
              <div className="absolute bottom-0 left-0 h-[90px] w-full rounded-b-[22px] border-b-[2px] border-Douradop bg-AzulP px-4 py-5 text-center transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-[15px] font-semibold text-white">
                  {attorney.name}
                </p>
                <p className="text-[13px] font-medium uppercase text-white">
                  {attorney.role}
                </p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
