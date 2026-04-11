import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; 
  variant?: "ofertas" | "kits" | "blog" | "sobre_nos" | "minha_conta";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  disabled = false,
  type = "button", 
  variant = "minha_conta",
  className: additionalClassName = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-full font-bold text-base shadow-md whitespace-nowrap transition duration-300 uppercase cursor-pointer no-underline hover:no-underline";

  const variantClasses = {
    ofertas: "bg-light-cyan text-white btn-light-cyan", 
    kits: "bg-light-cyan text-white btn-light-cyan",
    blog: "bg-light-cyan text-white btn-light-cyan", 
    sobre_nos: "bg-light-cyan text-white btn-light-cyan",
    minha_conta: "bg-light-cyan text-white btn-light-cyan"
  };

  const finalVariantClass = disabled
    ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
    : variantClasses[variant];

  const className = `${baseClasses} ${finalVariantClass} ${additionalClassName}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;