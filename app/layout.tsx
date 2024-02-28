import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: {
    template: "Acme 🞘 %s",
    default: "Acme",
  },
  description: "",
  keywords: [],
  creator: "",
  metadataBase: new URL("https://yourdomain.com"),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    // icon: '/icon.png',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  // manifest: "https://nextjs.org/manifest.json",
  category: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
    >
      <body>{children}</body>
    </html>
  );
}
