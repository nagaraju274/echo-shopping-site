
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-shop-purple">Echo</span>
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex max-w-md w-full mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="search" 
                placeholder="Search for products..." 
                className="pl-10 w-full" 
              />
            </div>
          </div>

          {/* Navigation - desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/shop" className="text-gray-700 hover:text-shop-purple transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-shop-purple transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-shop-purple transition-colors">
              About
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart}
              className="relative"
            >
              <ShoppingCart />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-shop-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>

          {/* Cart button - mobile */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart}
              className="relative"
            >
              <ShoppingCart />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-shop-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t animate-fade-in">
            <div className="flex items-center mb-3">
              <Search className="text-gray-400 ml-3" size={18} />
              <Input 
                type="search" 
                placeholder="Search for products..." 
                className="ml-2" 
              />
            </div>
            <div className="space-y-1">
              <Link 
                to="/shop" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
