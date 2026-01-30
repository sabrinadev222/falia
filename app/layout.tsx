import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "Falia Siska Rahma Linda",
  icons: {
    icon: "/faviconn.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
