import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactModalProvider } from "@/components/forms/ContactModalProvider";
import "@/styles/layout.css";
import "@/styles/contact-form.css";
import "@/styles/faq.css";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.className} ${poppins.variable} bg-[#020617] antialiased`}>
        <ContactModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
