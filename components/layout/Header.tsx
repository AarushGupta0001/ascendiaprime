"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavItem from "@/components/ui/NavItem";
import GradientButton from "@/components/ui/GradientButton";
import MegaMenu from "@/components/layout/MegaMenu";
import { contactCta, headerNavItems, solutionsTrigger } from "@/lib/navigation";

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#split-services-wrapper", label: "Solutions" },
  { href: "/our-partners", label: "Our Partners" },
  { href: "/#case-studies", label: "Case Studies" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div id="site-header-wrapper">
      <header id="site-header" className={isScrolled ? "scrolled" : ""}>
        <Link href="/" id="header-logo-anchor" className="header-logo-link" aria-label="AscendiaPrime home">
          <div className="stellar-logo-wrap">
            <img
              src="/images/logos/header-logo-default.png"
              alt="AscendiaPrime"
              className="header-logo-img default-logo"
            />
            <img
              src="/images/logos/header-logo-scrolled.png"
              alt="AscendiaPrime"
              className="header-logo-img scrolled-logo"
            />
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-us">About Us</NavItem>

          <div className="solutions-group">
            <NavItem href={solutionsTrigger.href} className="mega-menu-trigger" showChevron>
              {solutionsTrigger.label}
            </NavItem>
            <MegaMenu />
          </div>

          {headerNavItems.slice(2).map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}

          <div className="header-cta-wrap">
            <GradientButton href={contactCta.href}>{contactCta.label}</GradientButton>
          </div>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          id="mobile-menu-btn"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg className="mobile-toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        {mobileLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-link"
            style={{ transitionDelay: mobileOpen ? `${index * 0.05}s` : "0s" }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <GradientButton href={contactCta.href} className="mobile-menu-cta" onClick={() => setMobileOpen(false)}>
          {contactCta.label}
        </GradientButton>
      </div>
    </div>
  );
}
