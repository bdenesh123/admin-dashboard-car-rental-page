import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Car Rental Admin Dashboard",
  description: "Admin Dashboard for SoCar sample task",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white dark:bg-black">
      <body className="text-black dark:text-white">{children}</body>
    </html>
  );
}
