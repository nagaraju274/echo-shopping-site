
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex py-4 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              {item.name}
            </h3>
            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border rounded">
            <button 
              className="px-3 py-1 border-r"
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            >
              -
            </button>
            <span className="px-3 py-1">{item.quantity}</span>
            <button 
              className="px-3 py-1 border-l"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => removeFromCart(item.id)}
            className="text-gray-500 hover:text-red-500"
          >
            <span className="sr-only">Remove</span>
            <X size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
