import { NavLinks } from '@/components/layout/nav-links';
import { ModeToggle } from '@/components/mode-toggle';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-14 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            <a href="/">OHC</a>
          </h1>
          <nav className="flex gap-4 items-center text-sm font-medium">
            <NavLinks />
            <ModeToggle />
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-20 pt-10 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 백상수. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
