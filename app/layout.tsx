import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactModalProvider } from "@/components/forms/ContactModalProvider";
import "@/styles/layout.css";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AscendiaPrime",
    template: "%s | AscendiaPrime",
  },
  description:
    "AscendiaPrime connects intent, media and technology to power growth through performance marketing, programmatic media, and digital solutions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ascendiaprime.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${poppins.variable} bg-[#020617] font-sans antialiased`}>
        <ContactModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
