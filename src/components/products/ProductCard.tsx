
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-48 w-full object-cover object-center" 
          />
        </Link>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-shop-purple transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => addToCart(product)}
            className="text-shop-purple border-shop-purple hover:bg-shop-purple hover:text-white transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
