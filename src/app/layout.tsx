import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollBlurOverlay } from "@/components/ScrollBlurOverlay";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francisco Lencina Drago — Product Designer",
  description:
    "Product & Design System Designer con experiencia en e-commerce. Buenos Aires, Argentina.",
  openGraph: {
    title: "Francisco Lencina Drago — Product Designer",
    description:
      "Product & Design System Designer con experiencia en e-commerce. Buenos Aires, Argentina.",
    locale: "es_AR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "es";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||((!t||t==='system')&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`}</Script>
      </head>
      <body className="min-h-full bg-background text-foreground theme-transition">
<ThemeProvider>
          <LanguageProvider>
            <ScrollBlurOverlay />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
