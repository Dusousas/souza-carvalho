"use client";

const processSteps = [
  {
    id: 1,
    icon: "icons/process-1-icon-1.svg",
    title: "Missão",
    description:
      "Oferecer soluções jurídicas estratégicas, com excelência técnica e atendimento personalizado, garantindo segurança e proteção aos direitos de nossos clientes.",
  },
  {
    id: 2,
    icon: "icons/process-1-icon-2.svg",
    title: "Visão",
    description:
      "Ser referência nacional em advocacia estratégica, reconhecida pela qualidade técnica, ética profissional e resultados consistentes.",
  },
  {
    id: 3,
    icon: "icons/process-1-icon-3.svg",
    title: "Valores",
    description:
      "Ética e transparência, comprometimento com resultados, atendimento personalizado, excelência técnica, responsabilidade, confiança e atualização constante.",
  },
];

export default function Process() {
  return (
    <section
      id="valores"
      className="py-20 bg-white relative overflow-hidden scroll-mt-28"
    >
      <img className="absolute right-0" src="/transp/process.png" alt="" />
      <div className="maxW flex items-center gap-20">
        <article className="lg:w-1/2 flex items-center justify-center hidden lg:block">
          <img className="rounded-2xl" src="/hero1-1.png" alt="" />
        </article>

        <article className="lg:w-1/2">
          <h3 className="text-[#B68C5A] font-display tracking-[0.34em] uppercase md:text-base text-center lg:text-left">
            Missão, visão e valores
          </h3>

          <h1 className="text-3xl mt-2 text-AzulP font-medium text-center lg:text-left lg:text-5xl">
            Os princípios que orientam nossa atuação.
          </h1>

          <div className="mt-10 relative">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative flex gap-6 pb-8 last:pb-0">
                <div className="relative flex flex-col items-center">
                  <div className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#B68C5A] z-10 transition duration-500 hover:-translate-y-1 hover:scale-110">
                    <img
                      className="transition duration-700 group-hover:rotate-[360deg]"
                      src={step.icon}
                      alt=""
                    />
                  </div>

                  {index !== processSteps.length - 1 && (
                    <div className="absolute top-16 h-full border-l-2 border-dashed border-[#B68C5A]" />
                  )}
                </div>

                <div>
                  <h1 className="text-AzulP text-xl font-medium">
                    {step.title}
                  </h1>

                  <p className="text-[#868686] mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
