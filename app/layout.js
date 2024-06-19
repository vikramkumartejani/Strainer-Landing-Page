import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "The Strainer Co",
  description: "Recruitment made easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
