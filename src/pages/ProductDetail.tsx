
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { useCart } from '@/hooks/useCart';
import { sampleProducts } from '@/data/sampleData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Find the product in sample data
  const product = sampleProducts.find(p => p.id === Number(id));
  
  // Get related products (sample: same category, excluding current product)
  const relatedProducts = product 
    ? sampleProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/shop')}>
            Back to Shop
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover" 
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.category}</p>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`h-5 w-5 ${i < product.rating ? 'fill-current' : 'stroke-current'}`} 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">{product.reviews} reviews</span>
            </div>
            
            <p className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-sm max-w-none mb-8">
              <p>{product.description}</p>
            </div>
            
            <div className="flex gap-4 mt-auto">
              <Button 
                className="bg-shop-purple hover:bg-shop-dark-purple text-white px-8 py-3"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
              <Button variant="outline" className="border-shop-purple text-shop-purple hover:bg-shop-purple hover:text-white">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You may also like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
