import * as React from 'react';
import WorldMap from '../ui/world-map';

const Footer: React.FC = () => {
  return (
    
      <footer id='footer' className="w-full py-14">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto">
<a href="https://pagedone.io/" className="flex justify-center ">
  
</a>
<ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
<li><a href="#" className="text-gray-800 hover:text-gray-900">Pagedone</a></li>
<li><a href="#" className=" text-gray-800 hover:text-gray-900">Products</a></li>
<li><a href="#" className=" text-gray-800 hover:text-gray-900">Resources</a></li>
<li><a href="#" className=" text-gray-800 hover:text-gray-900">Blogs</a></li>
<li><a href="#" className=" text-gray-800 hover:text-gray-900">Support</a></li>
</ul>
</div>
</div>
<WorldMap
       dots={[
         {
           start: {
             lat: 64.2008,
             lng: -149.4937,
           }, // Alaska (Fairbanks)
           end: {
             lat: 34.0522,
             lng: -118.2437,
           }, // Los Angeles
         },
         {
           start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
           end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
         },
         {
           start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
           end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
         },
         {
           start: { lat: 51.5074, lng: -0.1278 }, // London
           end: { lat: 28.6139, lng: 77.209 }, // New Delhi
         },
         {
           start: { lat: 28.6139, lng: 77.209 }, // New Delhi
           end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
         },
         {
           start: { lat: 28.6139, lng: 77.209 }, // New Delhi
           end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
         },
       ]}
     />
</footer>
  );
};

export default Footer;