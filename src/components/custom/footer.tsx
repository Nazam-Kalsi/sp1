'use client'
import * as React from "react";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="w-full py-14 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="max-w-3xl mx-auto">
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About</a></li>
            <li><a href="#products" className="">Products</a></li>
            <li><a href="#contact" className="">Contact</a></li>
          </ul>
        </div>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#a8dadc] hover:bg-[#a8dacc] text-black" onClick={() => window.location.href = "tel:+911234567890"}>
            <Phone/>Call
                </Button>
          
                <Button className="bg-green-600 hover:bg-green-700">
                  <Link href='https://api.whatsapp.com/send?phone=+918872906032&text=hello' className="flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.96C.16 5.317 5.43 0 12.02 0c3.178 0 6.167 1.24 8.413 3.488a11.8 11.8 0 013.498 8.402c-.003 6.59-5.32 11.86-11.886 11.86a11.9 11.9 0 01-5.96-1.588L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.43 9.889-9.867.003-5.462-4.415-9.89-9.881-9.894-5.46-.004-9.89 4.415-9.894 9.88a9.82 9.82 0 001.588 5.22l-.999 3.648 3.905-1.579zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a1.327 1.327 0 00-.57.074c-.198.099-.52.248-.792.521-.272.273-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                  Whatsapp
                  </Link>
                </Button>
          
                <Button onClick={() => window.location.href = "mailto:example@gmail.com"}>
                  <Mail/> Mail
                </Button>
        </div>
        <p className= 'text-center'>© 2025 Your Company, Inc. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
