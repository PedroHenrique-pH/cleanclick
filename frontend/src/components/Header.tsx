import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 right-0 z-10 flex gap-6 pt-6 pr-6">
      <Button href="/minha_conta" variant="minha_conta">Kits</Button>
      <Button href="/kits" variant="kits">Kits</Button>
    </header>
  );
};

export default Header;