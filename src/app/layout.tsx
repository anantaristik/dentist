import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dadu Ibu - Show Your Care",
  description: "Apakah Anda tahu cara menyikat gigi yang benar?",
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
