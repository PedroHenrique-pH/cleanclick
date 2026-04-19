import React from "react";
import { Truck, CreditCard, ShieldCheck, Headphones } from "lucide-react";

export default function Features() {
  const items = [
    { icon: <Truck />, title: "Entrega Rápida", sub: "Para todo Brasil" },
    { icon: <CreditCard />, title: "Pagamento Fácil", sub: "Até 12x sem juros" },
    { icon: <ShieldCheck />, title: "Compra Segura", sub: "100% Protegido" },
    { icon: <Headphones />, title: "Suporte", sub: "Atendimento VIP" },
  ];

  return (
    <section className="w-full bg-white py-10 border-b border-[#A0AEC0]/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="text-[#3182CE]">{item.icon}</div>
            <div>
              <h4 className="text-[#1A365D] font-bold text-sm uppercase">{item.title}</h4>
              <p className="text-[#A0AEC0] text-xs">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}