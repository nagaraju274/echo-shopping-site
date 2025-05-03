
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Discover Unique <span className="text-shop-purple">Products</span> for Your Lifestyle
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop our curated collection of high-quality items that will elevate your everyday experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button className="bg-shop-purple hover:bg-shop-dark-purple text-white px-8 py-3 rounded-md font-medium">
                  Shop Now
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" className="border-shop-purple text-shop-purple hover:bg-shop-purple hover:text-white px-8 py-3 rounded-md font-medium">
                  Explore Categories
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Shopping experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Free shipping</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
