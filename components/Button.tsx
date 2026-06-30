import Link from "next/link";
import { ReactNode, CSSProperties } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    background: "linear-gradient(90deg,#1784F2,#103FA1)",
    color: "#fff",
    boxShadow: "0 0 24px rgba(23,132,242,0.35)",
  },
  outline: {
    background: "transparent",
    color: "#1784F2",
    border: "1px solid rgba(23,132,242,0.5)",
  },
  ghost: {
    background: "transparent",
    color: "#858EAD",
  },
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  type = "button",
  disabled,
  className = "",
  fullWidth,
}: ButtonProps) {
  const cls = [
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1784F2]",
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-40 pointer-events-none" : "",
    className,
  ].filter(Boolean).join(" ");

  const style = variantStyles[variant];

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{children}</a>
    ) : (
      <Link href={href} className={cls} style={style}>{children}</Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} style={style}>
      {children}
    </button>
  );
}
