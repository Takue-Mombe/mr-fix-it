import React from "react";
import Header from "./layout/Header";
import HeroSection from "./home/HeroSection";
import ProductCategories from "./home/ProductCategories";
import TestimonialsSection from "./home/TestimonialsSection";
import BlogPreview from "./home/BlogPreview";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />

        {/* Special Offers Section */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-red-800 mb-2">
                Special Offers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take advantage of these limited-time deals on our quality
                products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Offer 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-red-200 hover:border-red-500 transition-colors">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"
                    alt="Plumbing Sale"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                    30% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    Plumbing Essentials
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Complete range of pipes, fittings, and fixtures at
                    discounted prices
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 line-through mr-2">
                        $120
                      </span>
                      <span className="text-red-600 font-bold">$84</span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Offer 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-red-200 hover:border-red-500 transition-colors">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1581147036324-c47a03a81d48?w=600&q=80"
                    alt="Tools Sale"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                    25% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Power Tools Set</h3>
                  <p className="text-gray-600 mb-3">
                    Professional-grade power tools for all your construction
                    needs
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 line-through mr-2">
                        $250
                      </span>
                      <span className="text-red-600 font-bold">$187.50</span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Offer 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-red-200 hover:border-red-500 transition-colors">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80"
                    alt="Paint Sale"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                    20% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Premium Paints</h3>
                  <p className="text-gray-600 mb-3">
                    High-quality interior and exterior paints in various colors
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 line-through mr-2">
                        $75
                      </span>
                      <span className="text-red-600 font-bold">$60</span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
