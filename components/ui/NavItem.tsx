import Link from "next/link";
import type { ReactNode } from "react";

type NavItemProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showChevron?: boolean;
  onClick?: () => void;
};

export default function NavItem({
  href,
  children,
  className = "",
  showChevron = false,
  onClick,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`magnetic-link-wrap ${className}`.trim()}
      onClick={onClick}
    >
      <span className="magnetic-text">{children}</span>
      {showChevron ? (
        <svg
          className="nav-chevron"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      ) : null}
    </Link>
  );
}
