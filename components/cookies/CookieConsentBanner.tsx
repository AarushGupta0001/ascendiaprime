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
        setBannerVisible(false);
      } else {
        const timer = setTimeout(() => {
          setBannerVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setBannerVisible(true);
    }

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
      // Ignore in private browsing
    }

    setPreferences(finalPrefs);
    setBannerVisible(false);
    setModalOpen(false);

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

  const handleDecline = () => {
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
      {/* Sleek Floating Bottom-Right Toast */}
      {bannerVisible && !modalOpen && (
        <aside
          role="region"
          aria-label="Cookie consent"
          className="ap-cookie-banner"
        >
          <div className="ap-cookie-header">
            <h4 className="ap-cookie-title">Cookie Preferences</h4>
            <button
              type="button"
              onClick={handleDecline}
              className="ap-cookie-close"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p className="ap-cookie-text">
            We use cookies to improve your browsing experience, analyse traffic, and personalise content. Read our{" "}
            <Link href="/privacy-cookies-policy">Privacy &amp; Cookies Policy</Link>.
          </p>

          <div className="ap-cookie-actions">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="ap-cookie-btn-primary"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="ap-cookie-btn-secondary"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="ap-cookie-btn-link"
            >
              Preferences
            </button>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {modalOpen && (
        <div
          className="ap-cookie-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ap-cookie-modal-title"
        >
          <div className="ap-cookie-modal">
            {/* Header */}
            <div className="ap-cookie-modal-header">
              <div>
                <h3 id="ap-cookie-modal-title">Cookie Settings</h3>
                <p>Manage how we use cookies across your session</p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="ap-cookie-close"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="ap-cookie-modal-body">
              {/* Strictly Necessary */}
              <div className="ap-cookie-row">
                <div className="ap-cookie-row-top">
                  <span className="ap-cookie-row-label">
                    Strictly Necessary
                    <span className="ap-cookie-badge-always">Required</span>
                  </span>
                  <label className="ap-toggle" aria-label="Strictly Necessary Cookies">
                    <input type="checkbox" checked disabled />
                    <span className="ap-toggle-track" />
                  </label>
                </div>
                <p>Essential for basic site navigation, security, and storing your consent preferences.</p>
              </div>

              {/* Analytics */}
              <div className="ap-cookie-row">
                <div className="ap-cookie-row-top">
                  <span className="ap-cookie-row-label">Analytics &amp; Performance</span>
                  <label className="ap-toggle" aria-label="Analytics Cookies">
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
                    <span className="ap-toggle-track" />
                  </label>
                </div>
                <p>Helps us understand how visitors interact with the site to optimize performance.</p>
              </div>

              {/* Functional */}
              <div className="ap-cookie-row">
                <div className="ap-cookie-row-top">
                  <span className="ap-cookie-row-label">Functional</span>
                  <label className="ap-toggle" aria-label="Functional Cookies">
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
                    <span className="ap-toggle-track" />
                  </label>
                </div>
                <p>Enables enhanced functionality such as remembered interface preferences.</p>
              </div>

              {/* Marketing */}
              <div className="ap-cookie-row">
                <div className="ap-cookie-row-top">
                  <span className="ap-cookie-row-label">Marketing &amp; Attribution</span>
                  <label className="ap-toggle" aria-label="Marketing Cookies">
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
                    <span className="ap-toggle-track" />
                  </label>
                </div>
                <p>Used to measure campaign attribution and relevant ad performance anonymously.</p>
              </div>
            </div>

            {/* Footer */}
            <div className="ap-cookie-modal-footer">
              <button
                type="button"
                onClick={handleDecline}
                className="ap-cookie-btn-secondary"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="ap-cookie-btn-secondary"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="ap-cookie-btn-primary"
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
