
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-shop-purple mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/">
            <Button className="bg-shop-purple hover:bg-shop-dark-purple text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
