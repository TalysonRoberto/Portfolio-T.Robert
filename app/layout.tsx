import type { Metadata } from "next";

import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-t-robert.vercel.app"),

  title: "T.Robert | Desenvolvedor Full Stack",

  description:
    "Portfólio de T.Robert, desenvolvedor Full Stack especializado em React, Next.js, UI/UX e aplicações modernas.",

  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "UI UX",
    "Portfólio",
    "Programador",
    "Frontend",
    "Backend",
    "Desenvolvedor Web",
  ],

  authors: [{ name: "Talyson Robert" }],

  creator: "T.Robert",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "T.Robert | Desenvolvedor Full Stack",

    description:
      "Portfólio moderno com projetos, experiências e tecnologias.",

    url: "https://portfolio-t-robert.vercel.app",

    siteName: "T.Robert",

    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Portfólio T.Robert",
      },
    ],

    locale: "pt_BR",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "T.Robert | Desenvolvedor Full Stack",
    description:
      "Portfólio moderno com projetos, experiências e tecnologias.",
    images: ["/banner.png"],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}