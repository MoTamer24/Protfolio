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
  var isDark = stored ? stored === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
} catch (e) {
  document.documentElement.classList.remove('dark');
}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sora.variable} ${jetbrains.variable} antialiased selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/40 dark:selection:text-blue-200`}>
        <ScrollProgress />
        <Backdrop />
        <Navbar />
        <main>{children}</main>
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
