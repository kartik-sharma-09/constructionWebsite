import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import CoreValues from '../components/CoreValues';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsPreview from '../components/TestimonialsPreview';
import QuickQuote from '../components/QuickQuote';
import CompanyBanner from '../components/CompanyBanner';

function Home() {
  return (
    <div>
      <Hero />
      <CompanyBanner />
      <ServicesOverview />
      <CoreValues />
      <FeaturedProjects />
      <TestimonialsPreview />
      <QuickQuote />
    </div>
  );
}

export default Home;