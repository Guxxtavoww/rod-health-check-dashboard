import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/providers/theme-provider';
import { TanstackProvider } from '@/providers/tanstack-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rodriguinho Enteprises',
  description: 'Heath check',
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen p-12 flex">{children}</main>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
