import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import HeroSection from "@/components/custom/heroSec";
import Products from "@/components/custom/products";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
export default function Home() {
  return (
   <main className="relative">
     <Header/>
     <HeroSection/>
     <About/>
     <Products/>
     <Contact/>
     <Footer/>
   </main>
  );
}
