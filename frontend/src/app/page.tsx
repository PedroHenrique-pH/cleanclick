import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      
      {/* Seção de Exemplo para scroll */}
      <section className="h-[500px] flex items-center justify-center">
        <h2 className="text-[#A0AEC0] font-bold">Seção de Produtos em breve...</h2>
      </section>
    </main>
  );
}