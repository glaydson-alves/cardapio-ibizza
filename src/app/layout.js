import { Inter } from "next/font/google";
import "./globals.css"
import Header from "@/components/header";
import Footer from "@/components/footer";
import CarrinhoProvider from "@/context/carrinhoContextApi";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cardapio Online",
  description: "Descubra uma variedade de pizzas artesanais deliciosas e acompanhamentos frescos. Peça online e desfrute do melhor sabor da cidade!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
        <CarrinhoProvider>
          <Header/>
          <div className="flex-1">{children}</div>
          <Toaster />
          <Footer className="flex-shrink-0"/>
        </CarrinhoProvider>
        </div>
      </body>
    </html>
  );
}
