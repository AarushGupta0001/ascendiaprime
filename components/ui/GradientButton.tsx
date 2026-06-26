import Link from "next/link";
import type { ReactNode } from "react";

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function GradientButton({ href, children, className = "", onClick }: GradientButtonProps) {
  const classes = `btn-header ${className}`.trim();

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
