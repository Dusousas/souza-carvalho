"use client";

const serviceCards = [
  {
    icon: "/icons/service_card_1_1.svg",
    title: "Criminal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at quo laudantium nobis possimus nostrum sequi facere earum aliquid odit!",
  },
  {
    icon: "/icons/service_card_1_2.svg",
    title: "Consultoria",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at quo laudantium nobis possimus nostrum sequi facere earum aliquid odit!",
  },
  {
    icon: "/icons/service_card_1_3.svg",
    title: "Contratos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at quo laudantium nobis possimus nostrum sequi facere earum aliquid odit!",
  },
  {
    icon: "/icons/service_card_1_4.svg",
    title: "Fam\u00edlia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at quo laudantium nobis possimus nostrum sequi facere earum aliquid odit!",
  },
  {
    icon: "/icons/service_card_1_5.svg",
    title: "Empresarial",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at quo laudantium nobis possimus nostrum sequi facere earum aliquid odit!",
  },
  {
    icon: "/icons/service_card_1_6.svg",
    title: "Previdenci\u00e1rio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at quo laudantium nobis possimus nostrum sequi facere earum aliquid odit!",
  },
];

export default function Services() {
  return (
    <section className="bg-white pt-40 pb-20">
      <div className="maxW">
        <h3 className="text-[#B68C5A] font-display text-center tracking-[0.34em] uppercase md:text-base">
          Nossos serviços
        </h3>

        <h1 className="text-5xl mt-2 text-AzulP text-center font-medium">
          Lorem ipsum dolor sit.
        </h1>

        <article className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => (
            <div
              key={card.icon}
              className="group relative overflow-hidden rounded-2xl border-b-[6px] border-Douradop bg-[#F5F5F5] px-8 py-10 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(28,53,93,0.16)]"
            >
              <div className="absolute inset-0 z-0 origin-left scale-x-0 bg-[linear-gradient(90deg,#1C355D_0%,#25487E_55%,#1C355D_100%)] transition-transform duration-700 ease-out group-hover:scale-x-100" />
              <div className="absolute inset-y-0 left-0 z-0 w-24 -translate-x-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.16)_50%,transparent_100%)] opacity-0 transition duration-700 group-hover:translate-x-[420px] group-hover:opacity-100" />

              <img
                className="pointer-events-none absolute -right-5 -top-3 z-[1] w-40 max-w-none select-none opacity-[0.10]"
                src={card.icon}
                alt=""
              />

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(28,53,93,0.08)] transition duration-500 group-hover:bg-[#B68C5A]">
                <img
                  className="h-10 w-10 origin-center object-contain transition duration-700 group-hover:rotate-[360deg] group-hover:brightness-0 group-hover:invert"
                  src={card.icon}
                  alt=""
                />
              </div>

              <h2 className="relative z-10 mt-8 text-2xl font-semibold tracking-wider text-AzulP transition duration-500 group-hover:text-white">
                {card.title}
              </h2>

              <p className="relative z-10 mt-3 text-sm leading-7 text-[#868686] transition duration-500 group-hover:text-white">
                {card.description}
              </p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
