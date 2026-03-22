import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { ChachiEasterEgg } from "@/components/chachi-easter-egg";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "IGY6 x GWAR Crew",
  description: "Mobile-first gaming crew site for Call of Duty and GTA squads."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${rajdhani.variable}`}>
        <ThemeProvider>
          <ChachiEasterEgg />
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
