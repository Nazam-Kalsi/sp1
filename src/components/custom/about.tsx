import * as React from 'react';
import { Titan_One,Satisfy } from "next/font/google";
import Image from 'next/image';

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});
const satisify = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});
const About: React.FC= () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-24 transition-colors bg-[#63A361] dark:bg-linear-to-b dark:from-gray-900 dark:to-transparent dark:bg-transparent"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl text-[#FFFD8F] dark:text-white text-shadow-lg ${titan.className} pb-1`}>
          The Vision That Guides Us
        </h1>
    
        <h5 className="text-base sm:text-lg md:text-xl text-gray-700 leading-none dark:text-gray-300 font-sans pb-3">
          Moving forward with a vision built around people and progress.
        </h5>
    
        <div className=" text-sm sm:text-base md:text-lg text-justify leading-normal font-sans">
          At <span className={`text-[#FFFD8F] ${satisify.className} text-shadow-lg`}>Gobind Rai Engg. Works</span> , we do one thing extremely well:<br/>
          we build tractor parts that <span className={`text-[#FFFD8F] ${satisify.className} text-shadow-lg`}>&nbsp;refuse to quit.</span><br/><br/>
          we specialize in manufacturing <span className='font-semibold'>modified parts, premium spare parts, custom hoods, and essential accessories </span>for tractors of all kinds. Whether it’s performance, durability, raw power, or long-lasting strength — <span className={`text-[#FFFD8F] ${satisify.className} text-shadow-lg`}>&nbsp;we’ve got you covered.</span><br/><br/>
          
          <span className='font-semibold'>Our workshop isn’t just a <span className={`text-[#FFFD8F] ${satisify.className} text-shadow-lg`}>&nbsp;workshop.</span><br/></span>
          It’s where precision engineering meets everyday farming needs.
          Where tough jobs get tougher solutions.
          And where <span className={`text-[#FFFD8F] ${satisify.className} text-shadow-lg`}>&nbsp;“good enough” </span> never makes it past the front gate.          
          From custom modifications to OEM-grade replacements, every product is built with:
          <ul className="list-disc list-inside font-semibold">
            <li>High-grade materials</li>            
            <li>Exacting craftsmanship</li>
            <li>Field-tested durability (because Punjab&apos;s soil isn&apos;t gentle)</li>
            <li>A passion for innovation</li>
          </ul>
          <br/>
          We proudly serve<span className={`text-[#FFFD8F] ${satisify.className} text-shadow-lg`}>&nbsp; farmers, tractor enthusiasts, and anyone who believes machinery should run smoother, last longer, and look sharper.</span>
        </div>
      </div>
    </section>

  );
};

export default About;