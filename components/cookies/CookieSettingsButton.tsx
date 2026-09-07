"use client";

export default function CookieSettingsButton() {
  const handleOpen = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open_cookie_preferences"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      className="site-footer__legal-link cursor-pointer bg-transparent border-0 text-inherit p-0 font-inherit inline-block"
      style={{
        background: "transparent",
        border: "none",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        padding: 0,
      }}
    >
      Cookie Settings
    </button>
  );
}
