import type { Metadata } from "next";
import { Anton, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { BroadcastBoot } from "@/components/BroadcastBoot";
import { SiteHeader } from "@/components/SiteHeader";
import { CustomCursor } from "@/components/CustomCursor";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "DANNI MORENO — CEFEIDA Transmission",
  description:
    "Danni Moreno: cantautora, productora y creadora audiovisual de Ciudad de México. CEFEIDA, disponible ahora.",
  openGraph: {
    title: "DANNI MORENO — CEFEIDA Transmission",
    description:
      "Cantautora, productora y creadora audiovisual. CEFEIDA, disponible ahora.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} ${spaceMono.variable} h-full`}
    >
      <body className="grain scanlines min-h-full bg-void text-paper antialiased">
        <BroadcastBoot />
        <SiteHeader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
