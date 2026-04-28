import Head from "next/head";
import About from "@/components/About";
import Attorneys from "@/components/Attorneys";
import Contact from "@/components/Contact";
import CtaLogo from "@/components/CtaLogo";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Souza & Carvalho - Advocacia e Assessoria Juridica</title>
        <meta
          name="description"
          content="Souza & Carvalho - Advocacia e Assessoria Juridica"
        />
      </Head>
      <Hero />
      <About />
      <Services />
      <Attorneys />
      <Process />
      <CtaLogo />
      <Testimonials />
      <Contact />
    </>
  );
}
