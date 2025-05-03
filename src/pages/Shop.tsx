
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { sampleProducts, sampleCategories } from '@/data/sampleData';
import { Search } from 'lucide-react';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter products based on search query and category
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let filtered = sampleProducts;
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(filtered);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop All Products</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block space-y-6 p-6 bg-white rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="all"
                    name="category"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                    className="h-4 w-4 text-shop-purple focus:ring-shop-purple border-gray-300"
                  />
                  <label htmlFor="all" className="ml-2 text-sm text-gray-700">All Categories</label>
                </div>
                
                {sampleCategories.map(category => (
                  <div key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      id={category.id}
                      name="category"
                      value={category.name}
                      checked={selectedCategory === category.name}
                      onChange={() => setSelectedCategory(category.name)}
                      className="h-4 w-4 text-shop-purple focus:ring-shop-purple border-gray-300"
                    />
                    <label htmlFor={category.id} className="ml-2 text-sm text-gray-700">{category.name}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Price Range</h3>
              <Slider defaultValue={[0, 100]} max={100} step={1} />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">$0</span>
                <span className="text-sm text-gray-600">$100+</span>
              </div>
            </div>
            
            <Button 
              onClick={handleSearch}
              className="w-full bg-shop-purple hover:bg-shop-dark-purple text-white"
            >
              Apply Filters
            </Button>
          </div>
          
          {/* Products grid */}
          <div className="lg:col-span-3">
            {/* Search and sort - Mobile & Desktop */}
            <div className="mb-6">
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="search" 
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full" 
                  />
                </div>
                <Button type="submit" className="bg-shop-purple hover:bg-shop-dark-purple text-white">
                  Search
                </Button>
              </form>
            </div>
            
            {/* Mobile filters toggle */}
            <div className="lg:hidden mb-6">
              <Button variant="outline" className="w-full mb-4">
                Filter Products
              </Button>
            </div>
            
            {/* Results count and sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <p className="text-gray-600 mb-2 sm:mb-0">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select className="p-2 border border-gray-300 rounded-md">
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setFilteredProducts(sampleProducts);
                  }}
                  className="bg-shop-purple hover:bg-shop-dark-purple text-white"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
