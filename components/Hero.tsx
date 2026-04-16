"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bgHero1 text-white py-30">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1C355D]/95 via-[#1C355D]/86 to-[#0E1A2F]/95" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(237,207,129,0.14),transparent_24%),radial-gradient(circle_at_78%_30%,rgba(237,207,129,0.08),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(10,34,49,0.45),transparent_38%)]" />
      <div className="hero-orb absolute left-[10%] top-[18%] z-0 h-48 w-48 rounded-full bg-[#EDCF81]/12 blur-3xl" />
      <div className="hero-orb-delay absolute bottom-[12%] right-[14%] z-0 h-64 w-64 rounded-full bg-[#163a47]/45 blur-3xl" />

      <div className="relative z-10 maxW flex gap-20 items-center">
        <article className="lg:w-[70%] out-">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-Douradop font-display text-sm tracking-[0.34em] uppercase md:text-base">
              Soluções jurídicas eficientes
            </h3>
          </div>

          <h1 className="text-5xl font-semibold text-white md:text-[65px]">
            Experiência que defende.
            <br />
            Resultados que comprovam.
          </h1>

          <div className="mt-10 flex">
            <a
              className="hero-cta inline-flex items-center gap-3 border border-[#e0b974]/35 bg-[#b68c5a] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_38px_rgba(182,140,90,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-[#c79a61] hover:shadow-[0_20px_42px_rgba(182,140,90,0.38)]"
              href=""
            >
              <span>Fale com um especialista</span>

            </a>
          </div>
        </article>

        <article className="relative mx-auto inline-block w-full max-w-[420px]">
          <div className="absolute -inset-5 -z-10 rounded-[46px] bg-[radial-gradient(circle,rgba(237,207,129,0.18),transparent_60%)] blur-2xl" />
          <div
            className="hero-frame absolute inset-0 translate-x-6 -translate-y-6 rounded-tr-[90px] rounded-bl-[80px]"
            style={{
              border: "2px solid #EDCF81",
            }}
          />
          <div className="absolute inset-0 rounded-tr-[80px] rounded-bl-[80px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(237,207,129,0.12))]" />
          <img
            className="relative z-10 block w-full rounded-tr-[80px] rounded-bl-[80px] border border-white/70 shadow-[0_28px_70px_rgba(0,0,0,0.38)]"
            src="/hero1-1.png"
            alt="Imagem hero"
          />
        </article>
      </div>
    </section>
  );
}
