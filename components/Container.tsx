import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  narrow?: boolean;
}

export default function Container({ children, className = "", as: Tag = "div", narrow = false }: ContainerProps) {
  return (
    <Tag className={`${narrow ? "max-w-3xl" : "max-w-[1400px]"} mx-auto px-5 sm:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
