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
  title: "Kone | Empire",
  description: "Meilleure Agence de voyage au Mali",
  openGrah:{
    title: "Kone-Empire",
    description: "Site officiel de l'agence de voyage Kone-Empire",
    image: [{
      url: "/image/logo.png",
      width: 800,
      height: 500
    }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
