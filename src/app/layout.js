// import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import { Providers } from "./redux/provider/provider";
// import FormPopup from "./components/form-popup";
// import Whatsapp from "./components/whatsapp";
import Header from "./components/navbar";
import { Providers } from "./redux/provider/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Providers>
        <Header />
        {/* <Whatsapp />
        <FormPopup /> */}
        {children}
        <Footer />
      </Providers>
    </body>
  </html>
    
     
        
      
  
  );
}
