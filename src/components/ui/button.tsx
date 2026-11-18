import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = {
    primary: "bg-forest text-white hover:bg-sage hover:text-forest",
    secondary: "bg-sage text-forest hover:bg-forest hover:text-white",
    outline:
      "border border-forest text-forest hover:bg-forest hover:text-white",
  };

  const buttonStyles = cn(
    "inline-flex items-center justify-center rounded-full px-7 py-3",
    "font-sans text-sm font-semibold tracking-wide",
    "transition-all duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
