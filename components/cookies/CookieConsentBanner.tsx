"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp?: string;
  version?: string;
};

const COOKIE_STORAGE_KEY = "ascendia_cookie_consent_v1";

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  functional: true,
  marketing: false,
};

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        setPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          functional: Boolean(parsed.functional),
          marketing: Boolean(parsed.marketing),
        });
        setHasConsented(true);
        setBannerVisible(false);
      } else {
        // First time visitor - show banner after brief delay for smooth appearance
        const timer = setTimeout(() => {
          setBannerVisible(true);
        }, 650);
        return () => clearTimeout(timer);
      }
    } catch {
      setBannerVisible(true);
    }

    // Listen for custom open event from footer or other links
    const handleOpenPreferences = () => {
      setModalOpen(true);
    };

    window.addEventListener("open_cookie_preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("open_cookie_preferences", handleOpenPreferences);
    };
  }, []);

  const saveConsent = (updatedPrefs: CookiePreferences) => {
    const finalPrefs: CookiePreferences = {
      ...updatedPrefs,
      necessary: true,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };

    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(finalPrefs));
    } catch {
      // Ignore localStorage errors in private browsing modes
    }

    setPreferences(finalPrefs);
    setHasConsented(true);
    setBannerVisible(false);
    setModalOpen(false);

    // Dispatch global event for analytics or tag managers
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cookie_consent_updated", { detail: finalPrefs })
      );
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
  };

  const handleDeclineNonEssential = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Cookie Consent Banner */}
      {bannerVisible && !modalOpen && (
        <aside
          role="region"
          aria-label="Cookie Consent Banner"
          className="cookie-banner-wrapper"
        >
          <div className="cookie-banner-card">
            <div className="cookie-banner-content">
              <div className="cookie-banner-icon" aria-hidden="true">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="cookie-banner-text">
                <h3>We Value Your Privacy &amp; Digital Experience</h3>
                <p>
                  Ascendia Prime uses cookies and similar technologies to ensure secure navigation, optimize platform performance, analyse audience interaction, and deliver relevant programmatic campaigns. You can accept all cookies, decline non-essential cookies, or customise your preferences anytime. Learn more in our{" "}
                  <Link href="/privacy-cookies-policy">
                    Privacy &amp; Cookies Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="cookie-banner-actions">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="cookie-btn-primary"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleDeclineNonEssential}
                className="cookie-btn-secondary"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="cookie-btn-outline"
              >
                Customise Preferences
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Floating Re-open Trigger Badge (when banner is dismissed) */}
      {hasConsented && !bannerVisible && !modalOpen && (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="cookie-floating-badge"
          aria-label="Open Cookie & Privacy Settings"
          title="Cookie & Privacy Settings"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      )}

      {/* Preferences Modal */}
      {modalOpen && (
        <div
          className="cookie-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          <div className="cookie-modal-container">
            {/* Modal Header */}
            <div className="cookie-modal-header">
              <div className="cookie-modal-title-group">
                <div className="cookie-modal-header-icon">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 id="cookie-modal-title">Customise Cookie Preferences</h2>
                  <p>Manage how Ascendia Prime collects and uses your data</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="cookie-modal-close"
                aria-label="Close cookie preferences modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: Categories */}
            <div className="cookie-modal-body">
              {/* Category 1: Necessary */}
              <div className="cookie-category-card">
                <div className="cookie-category-header">
                  <div className="cookie-category-title">
                    <span>Strictly Necessary Cookies</span>
                    <span className="cookie-badge-required">Always Active</span>
                  </div>
                  <label className="cookie-toggle" aria-label="Strictly Necessary Cookies">
                    <input type="checkbox" checked disabled />
                    <span className="cookie-toggle-slider" />
                  </label>
                </div>
                <p className="cookie-category-desc">
                  Essential for core platform security, page navigation, form token authentication, and consent storage. The website cannot function securely or reliably without these cookies.
                </p>
              </div>

              {/* Category 2: Analytics & Performance */}
              <div className="cookie-category-card">
                <div className="cookie-category-header">
                  <div className="cookie-category-title">
                    <span>Analytics &amp; Performance</span>
                  </div>
                  <label className="cookie-toggle" aria-label="Analytics & Performance Cookies">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          analytics: e.target.checked,
                        }))
                      }
                    />
                    <span className="cookie-toggle-slider" />
                  </label>
                </div>
                <p className="cookie-category-desc">
                  Collect aggregated, non-identifying telemetry to help us measure site responsiveness, monitor traffic sources, and refine page journeys for modern advertisers and partners.
                </p>
              </div>

              {/* Category 3: Functional */}
              <div className="cookie-category-card">
                <div className="cookie-category-header">
                  <div className="cookie-category-title">
                    <span>Functional &amp; Experience</span>
                  </div>
                  <label className="cookie-toggle" aria-label="Functional & Experience Cookies">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          functional: e.target.checked,
                        }))
                      }
                    />
                    <span className="cookie-toggle-slider" />
                  </label>
                </div>
                <p className="cookie-category-desc">
                  Remember regional preferences, active interface configurations, and high-resolution media settings for a tailored browsing experience.
                </p>
              </div>

              {/* Category 4: Marketing & Advertising */}
              <div className="cookie-category-card">
                <div className="cookie-category-header">
                  <div className="cookie-category-title">
                    <span>Marketing &amp; Advertising</span>
                  </div>
                  <label className="cookie-toggle" aria-label="Marketing & Advertising Cookies">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          marketing: e.target.checked,
                        }))
                      }
                    />
                    <span className="cookie-toggle-slider" />
                  </label>
                </div>
                <p className="cookie-category-desc">
                  Enable anonymous cross-network attribution, conversion tracking, and campaign optimization to ensure relevant partner communications without storing unhashed personal data.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="cookie-modal-footer">
              <button
                type="button"
                onClick={handleDeclineNonEssential}
                className="cookie-btn-secondary"
              >
                Reject All Non-Essential
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="cookie-btn-secondary"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="cookie-btn-primary"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
