import React from 'react';
import { TrendingUp, Star, Shield } from 'lucide-react';

function CompanyBanner() {
  return (
    <section className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-bold">BC's Fastest Growing Construction Company</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-blue-400"></div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="font-semibold">5-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyBanner;