"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const categorias = [
  {
    nome: "Lavanderia",
    sub: ["Sabão líquido", "Amaciante", "Tira manchas", "Alvejante"],
    img: "/amaciantes.png",
  },
  {
    nome: "Cozinha",
    sub: ["Detergente", "Desengordurante", "Esponjas", "Limpador pesado"],
    img: "/detergentes.png",
  },
];

export default function DropdownProdutos() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-bold text-[#1A365D] hover:text-[#3182CE] transition-colors uppercase">
        Produtos <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute left-0 top-full w-[700px] bg-white shadow-2xl border border-[#A0AEC0]/30 z-[100] overflow-hidden rounded-b-md">
          <div className="grid grid-cols-12">
            <div className="col-span-4 bg-[#EBF8FF] border-r border-[#A0AEC0]/10">
              {categorias.map((cat, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  className={`px-6 py-4 cursor-pointer text-sm font-bold ${
                    active === index ? "bg-white text-[#3182CE]" : "text-[#1A365D]"
                  }`}
                >
                  {cat.nome}
                </div>
              ))}
            </div>
            <div className="col-span-8 p-6 grid grid-cols-2 gap-4 bg-white">
              {categorias[active].sub.map((item, i) => (
                <Link key={i} href="#" className="text-sm text-[#1A365D] hover:text-[#3182CE] no-underline">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}