
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import CartItem from './CartItem';

const CartSidebar: React.FC = () => {
  const { cartItems, isCartOpen, toggleCart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };
  
  return (
    <div className={`cart-flyout ${isCartOpen ? 'open' : 'closed'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleCart}
            >
              <X />
            </Button>
          </div>
        </div>
        
        {/* Cart items */}
        <div className="flex-grow overflow-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
            <Button
              className="w-full bg-shop-purple hover:bg-shop-dark-purple text-white"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
            <div className="mt-2 flex justify-center">
              <Button variant="link" onClick={clearCart} className="text-sm text-gray-500">
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
