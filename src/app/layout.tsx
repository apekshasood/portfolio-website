import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";

export const metadata: Metadata = {
  title: "Apeksha Sood — Frontend Engineer",
  description:
    "Frontend engineer with 5.8 years building web & mobile apps in React, React Native & Angular. Currently a UI Developer at Saksoft working across the full stack on an AI/LLM platform.",
  keywords: [
    "Apeksha Sood",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "React Native",
    "UI Developer",
    "Full Stack",
  ],
  authors: [{ name: "Apeksha Sood" }],
  openGraph: {
    title: "Apeksha Sood — Frontend Engineer",
    description:
      "Frontend engineer building web products end to end — including the AI parts.",
    type: "website",
  },
};

// Prevents a flash of the wrong theme before hydration (defaults to dark).
const noFlashScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
