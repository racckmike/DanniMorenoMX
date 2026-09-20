import type { Metadata } from "next";
import { Anton, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { BroadcastBoot } from "@/components/BroadcastBoot";
import { SiteHeader } from "@/components/SiteHeader";

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
  metadataBase: new URL("https://www.dannimoreno.com"),
  title: "Danni Moreno",
  description:
    "Danni Moreno: cantautora, productora y creadora audiovisual de Ciudad de México. Escucha CEFEIDA, disponible ahora.",
  openGraph: {
    title: "Danni Moreno",
    description:
      "Cantautora, productora y creadora audiovisual de Ciudad de México. Escucha CEFEIDA, disponible ahora.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danni Moreno",
    description:
      "Cantautora, productora y creadora audiovisual de Ciudad de México. Escucha CEFEIDA, disponible ahora.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} ${spaceMono.variable} h-full`}
    >
      <body className="grain min-h-full bg-void text-paper antialiased">
        <BroadcastBoot />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
