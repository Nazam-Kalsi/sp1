import * as React from 'react';
import { ProductCard } from './productCard';


const Products: React.FC = () => {
  return (
    <section id='products' className='space-y-2 py-4 bg-[#f2e8cf] dark:bg-transparent'>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Our Products</h1>
      <ProductCard/>
    </section>
  );
};

export default Products;