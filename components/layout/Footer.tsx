import Link from "next/link";
import SocialIcons from "@/components/ui/SocialIcons";
import GradientButton from "@/components/ui/GradientButton";
import { footerCompanyLinks, footerLegalLinks } from "@/lib/navigation";

function FooterMap() {
  return (
    <section className="footer-map-section" aria-label="Office location map">
      <div className="footer-map-embed">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <>
      <FooterMap />
      <footer className="site-footer" id="colophon">
        <div className="footer-ambient-glow" aria-hidden="true" />
        <div className="footer-top-line" aria-hidden="true" />

        <div className="site-footer__inner">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <Link href="/" className="site-footer__brand-title">
                Ascendia Prime
              </Link>
              <p className="site-footer__description">
                AscendiaPrime brings together data, media, technology, and customer experience to create a
                performance-led growth ecosystem designed for scale, clarity, and measurable outcomes.
              </p>
              <SocialIcons />
            </div>

            <div className="site-footer__company">
              <h4 className="site-footer__heading">Company</h4>
              <div className="site-footer__company-grid">
                {footerCompanyLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="site-footer__company-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="site-footer__partner">
              <h4 className="site-footer__heading">Partner With Us</h4>
              <p className="site-footer__partner-text">
                Ready to scale your customer acquisition? Get in touch to build a custom growth pipeline.
              </p>
              <div className="site-footer__partner-links">
                <a href="mailto:contact@ascendiaprime.com" className="site-footer__email-link">
                  <svg className="site-footer__inline-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact@ascendiaprime.com
                </a>
                <Link href="/advertisers" className="site-footer__advertiser-link">
                  <svg className="site-footer__inline-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Explore Advertiser Solutions
                </Link>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copyright">
              © {new Date().getFullYear()} Ascendia Prime Media Ltd. All rights reserved.
            </p>
            <div className="site-footer__legal-links">
              {footerLegalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="site-footer__legal-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
