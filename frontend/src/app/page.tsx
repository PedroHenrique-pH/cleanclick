import Image from 'next/image';
import React from 'react';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <Header />
    </main>
  );
}