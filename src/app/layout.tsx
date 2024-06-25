import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Gigi",
  description: "Gigi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
