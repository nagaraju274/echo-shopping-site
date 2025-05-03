
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import { sampleProducts, sampleCategories } from '@/data/sampleData';

const Index = () => {
  // Get featured products (first 8)
  const featuredProducts = sampleProducts.slice(0, 8);
  
  return (
    <Layout>
      <Hero />
      <CategorySection categories={sampleCategories} />
      <FeaturedProducts products={featuredProducts} />
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Why Shop With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 bg-shop-light-purple p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">We curate high-quality products that are built to last and designed to impress.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 bg-shop-light-purple p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Get your products quickly with our expedited shipping options available worldwide.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 bg-shop-light-purple p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Your transactions are safe with us using the latest encryption technology.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-shop-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-6">Get the latest updates on new products and upcoming sales.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-shop-purple rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
