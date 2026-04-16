"use client";

const processSteps = [
  {
    id: 1,
    icon: "icons/process-1-icon-1.svg",
    title: "Consulta inicial",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolorum magnam doloribus fugit saepe",
  },
  {
    id: 2,
    icon: "icons/process-1-icon-2.svg",
    title: "Avaliação do caso",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolorum magnam doloribus fugit saepe",
  },
  {
    id: 3,
    icon: "icons/process-1-icon-3.svg",
    title: "Estratégia jurídica",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolorum magnam doloribus fugit saepe.",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
        <img className="absolute right-0" src="/transp/process.png" alt="" />
      <div className="maxW flex items-center gap-20">
        {/* IMAGEM */}
        <article className="lg:w-1/2 flex items-center justify-center">
          <img className="rounded-2xl" src="/hero1-1.png" alt="" />
        </article>

        {/* TEXTO */}
        <article className="lg:w-1/2">
          {/* NÃO ALTEREI SUA FONTE */}
          <h3 className="text-[#B68C5A] font-display tracking-[0.34em] uppercase md:text-base">
            Como funciona?
          </h3>

          <h1 className="text-5xl mt-2 text-AzulP font-medium">
            Lorem ipsum dolor sit amet.
          </h1>

          {/* PROCESSOS */}
          <div className="mt-10 relative">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative flex gap-6 pb-8 last:pb-0">
                
                {/* COLUNA ÍCONE + LINHA */}
                <div className="relative flex flex-col items-center">
                  {/* ÍCONE */}
                  <div className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#B68C5A] z-10 transition duration-500 hover:-translate-y-1 hover:scale-110">
                    <img
                      className="transition duration-700 group-hover:rotate-[360deg]"
                      src={step.icon}
                      alt=""
                    />
                  </div>

                  {/* LINHA PONTILHADA */}
                  {index !== processSteps.length - 1 && (
                    <div className="absolute top-16 h-full border-l-2 border-dashed border-[#B68C5A]" />
                  )}
                </div>

                {/* TEXTO */}
                <div>
                  {/* NÃO ALTEREI SUA FONTE */}
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
