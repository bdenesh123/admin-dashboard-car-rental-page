import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SewaCar Admin Dashboard",
  description: "Admin Dashboard for SewaCar",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
