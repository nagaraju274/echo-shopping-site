
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from '../cart/CartSidebar';
import { CartProvider } from '@/hooks/useCart';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <CartSidebar />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
