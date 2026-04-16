"use client";

import React from "react";

export default function CtaLogo() {
  return (
    <>
      <section className="relative overflow-hidden bg-AzulP py-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_42%,rgba(237,207,129,0.08)_100%)]" />
        <div className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#EDCF81]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/6 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 maxW flex justify-center items-center">
          <div className="group relative inline-flex cursor-pointer items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(237,207,129,0.24),transparent_62%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
            <img
              className="relative z-10 w-[260px] transition duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:rotate-[6deg]"
              src="/logo.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
