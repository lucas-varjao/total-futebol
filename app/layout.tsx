import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Viga } from "next/font/google";

const viga = Viga({
  variable: "--font-viga",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Total Futebol - Onde o jogo ganha vida!",
  description:
    "Total Futebol é a sua fonte definitiva para notícias, informações e atualizações do mundo do futebol. Acompanhe os últimos jogos, tabelas de classificação, destaques e muito mais em um só lugar. Junte-se à nossa comunidade e viva a paixão pelo futebol conosco!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`font-sans ${viga.variable}`}>
      <body className="bg-white dark:bg-verde-950">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
