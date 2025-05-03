
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Echo</h3>
            <p className="text-gray-600 mb-4">
              The best place to find modern and stylish products for your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.66.255 1.22.598 1.777 1.155.557.557.9 1.116 1.155 1.777.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.155 1.777c-.557.557-1.116.9-1.777 1.155-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.777-1.155 4.903 4.903 0 01-1.155-1.777c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.255-.66.598-1.22 1.155-1.777.557-.557 1.116-.9 1.777-1.155.636-.247 1.363-.416 2.427-.465C9.576 2.013 9.93 2 12.315 2zm.05 10a3.81 3.81 0 100-7.62 3.81 3.81 0 000 7.62zm0-9.67a5.86 5.86 0 100 11.72 5.86 5.86 0 000-11.72z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Shop links */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/all" className="text-gray-600 hover:text-shop-purple">All Products</Link></li>
              <li><Link to="/shop/new" className="text-gray-600 hover:text-shop-purple">New Arrivals</Link></li>
              <li><Link to="/shop/bestsellers" className="text-gray-600 hover:text-shop-purple">Best Sellers</Link></li>
              <li><Link to="/shop/sale" className="text-gray-600 hover:text-shop-purple">On Sale</Link></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-shop-purple">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-shop-purple">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-shop-purple">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-shop-purple">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-shop-purple">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get special offers, free giveaways, and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-shop-purple"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-shop-purple text-white rounded-r hover:bg-shop-dark-purple transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Echo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
