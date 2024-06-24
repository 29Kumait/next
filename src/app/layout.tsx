import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
