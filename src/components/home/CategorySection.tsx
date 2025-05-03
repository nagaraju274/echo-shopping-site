
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="h-48 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.count} products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
