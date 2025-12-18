import { Geist, Geist_Mono, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import "./responsive.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agence | Voyage",
  description: "Meilleure Agence de voyage au Mali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head><link rel="icon" href="/logo.png"/></head>
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
