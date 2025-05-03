
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/useCart';
import { useToast } from "@/components/ui/use-toast";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please fill in all required fields",
        description: `Missing: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return;
    }
    
    // Process order (simulated)
    toast({
      title: "Order Placed!",
      description: "Your order has been successfully placed.",
    });
    
    clearCart();
    navigate('/order-confirmation');
  };
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="mb-8">Add some products to your cart before proceeding to checkout.</p>
          <Button onClick={() => navigate('/shop')}>
            Continue Shopping
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                {/* Shipping Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Zip Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Payment Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="expDate">Expiration Date *</Label>
                      <Input
                        id="expDate"
                        name="expDate"
                        placeholder="MM/YY"
                        value={formData.expDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        type="password"
                        maxLength={4}
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-shop-purple hover:bg-shop-dark-purple text-white w-full"
                >
                  Place Order
                </Button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.name} × {item.quantity}</p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>${tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
