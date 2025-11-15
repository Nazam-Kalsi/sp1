import { ArrowRightIcon, Facebook, Instagram, Mail, Youtube } from 'lucide-react';
import * as React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Spotlight } from '../ui/spotlight';
import { BackgroundBeams } from '../ui/background-beams';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const HeroSection: React.FC = () => {
  const icons = {
    Instagram: Instagram,
    Facebook: Facebook,
    Youtube: Youtube,
    Mail: Mail,
  };
  return (
    <section id='herosection' className='h-screen flex flex-col gap-2 md:gap-8 items-center justify-center relative'>  
     {/*<BackgroundBeams className='z-[-10]'/> */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />  
     <div className='text-center flex flex-col items-center justify-center px-2 gap-1'> 
      <div
        className="group rounded-full border border-black/5  text-base transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
        <div className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ name</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
        </div>
            
      <h1 className='text-6xl text-center font-bold'>Welcome to our website!</h1>
      <p className='text-center font-semibold'>Explore our products and services.</p>
      <p>Our mission is to provide high-quality products and exceptional customer service.</p>
    </div>
    <div className='flex gap-2'>  
      <Link href='#products'><Button variant='outline'>Products</Button></Link>      
      <Link href='#contact'><Button>Contact us</Button></Link>
      <div className='flex items-center justify-center gap-6 absolute bottom-14 sm:right-14 right-24'>
        {
          ['Instagram', 'Facebook', 'Youtube', 'Mail'].map((x)=>{
            const Icon = icons[x];
            return(
              <Tooltip key={x}>
                <TooltipTrigger>                  
                  <Icon className='hover:scale-110 hover:-translate-y-1 transition-all'/>              
                </TooltipTrigger>
                <TooltipContent>
                  <p>{x}</p>
                </TooltipContent>
              </Tooltip>
            )
          })
        }
      </div>
      </div>
    </section>
  );
};

export default HeroSection;