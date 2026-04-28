import type { AppProps } from "next/app";
import { Playfair_Display, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${poppins.variable} ${playfairDisplay.variable} min-h-screen flex flex-col antialiased`}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
