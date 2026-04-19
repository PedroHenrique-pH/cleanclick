"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, Heart } from "lucide-react";
import DropdownProdutos from "./DropdownProdutos";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white z-[90] border-b border-[#A0AEC0]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-8">
        <Link href="/">
          <div className="text-[#1A365D] font-black text-2xl tracking-tighter">CLEAN<span className="text-[#3182CE]">CLICK</span></div>
        </Link>

        <div className="flex-1 max-w-xl relative hidden md:block">
          <input
            type="text"
            placeholder="O que você procura hoje?"
            className="w-full border border-[#A0AEC0]/40 rounded-full py-2 px-6 focus:outline-none focus:border-[#3182CE] text-sm"
          />
          <Search className="absolute right-4 top-2.5 text-[#A0AEC0]" size={18} />
        </div>

        <div className="flex items-center gap-5 text-[#1A365D]">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3182CE]">
            <User size={22} />
            <span className="text-xs font-bold hidden lg:block">CONTA</span>
          </div>
          <div className="relative cursor-pointer hover:text-[#3182CE]">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-[#3182CE] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 flex items-center gap-8 py-3 border-t border-[#A0AEC0]/10">
        <DropdownProdutos />
        {["OFERTAS", "KITS", "SOBRE NÓS", "CONTATO"].map((item) => (
          <Link key={item} href="#" className="text-xs font-bold text-[#1A365D] hover:text-[#3182CE] no-underline">
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}