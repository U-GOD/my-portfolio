import type { Metadata } from 'next';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fredrick - Web3 Developer',
  description: 'Smart Contract Developer building the decentralized future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}