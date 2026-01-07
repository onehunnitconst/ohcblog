import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "A technical blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased min-h-screen bg-background text-foreground")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <header className="mb-14 flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight">
                <a href="/">DevBlog</a>
              </h1>
              <nav className="flex gap-4 items-center text-sm font-medium">
                <a href="/" className="hover:underline underline-offset-4">Posts</a>
                <a href="/about" className="text-muted-foreground hover:text-foreground">About</a>
                <ModeToggle />
              </nav>
            </header>
            <main>{children}</main>
            <footer className="mt-20 pt-10 border-t text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} DevBlog. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
