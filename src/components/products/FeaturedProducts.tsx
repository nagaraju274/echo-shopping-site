
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductGrid from './ProductGrid';
import { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/shop">
            <Button variant="link" className="text-shop-purple">
              View all
            </Button>
          </Link>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
