import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import { profile } from "@/data/portfolio";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    type: "website",
  },
};

const themeScript = `
try {
  var stored = localStorage.getItem('theme');
  var dark = stored ? stored === 'dark' : !window.matchMedia('(prefers-color-scheme: light)').matches;
  document.documentElement.classList.toggle('dark', dark);
} catch (e) {
  document.documentElement.classList.add('dark');
}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sora.variable} ${jetbrains.variable} antialiased`}>
        <ScrollProgress />
        <Backdrop />
        <Navbar />
        {children}
        <footer className="border-t border-line py-10 text-center text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &
            Tailwind CSS.
          </p>
        </footer>
      </body>
    </html>
  );
}
