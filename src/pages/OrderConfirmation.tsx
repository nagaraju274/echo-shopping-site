
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Random order number
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="mb-6 text-green-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 mx-auto" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="bg-gray-50 p-4 rounded mb-6">
            <p className="text-gray-600">Order Number:</p>
            <p className="font-semibold text-lg"># {orderNumber}</p>
          </div>
          
          <p className="text-gray-600 mb-8">
            A confirmation email has been sent to your email address with all the details of your order.
          </p>
          
          <div className="space-y-3">
            <Link to="/shop">
              <Button 
                variant="outline" 
                className="w-full border-shop-purple text-shop-purple hover:bg-shop-purple hover:text-white"
              >
                Continue Shopping
              </Button>
            </Link>
            <Link to="/">
              <Button className="w-full bg-shop-purple hover:bg-shop-dark-purple text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
