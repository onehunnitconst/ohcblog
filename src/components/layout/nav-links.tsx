'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={cn(
          'hover:text-foreground transition-colors',
          pathname === '/' || pathname.startsWith('/posts')
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground'
        )}
      >
        Posts
      </Link>
      <Link
        href="/about"
        className={cn(
          'hover:text-foreground transition-colors',
          pathname === '/about'
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground'
        )}
      >
        About
      </Link>
    </>
  );
}
