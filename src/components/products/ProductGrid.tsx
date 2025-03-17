import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from "../ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  priceUSD: number;
  priceZWL: number;
  rating: number;
  category: string;
}

interface ProductGridProps {
  products?: Product[];
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  onAddToCart?: (id: string) => void;
  isLoading?: boolean;
}

const ProductGrid = ({
  products = [
    {
      id: "prod-001",
      name: "Heavy Duty Power Drill",
      imageUrl:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80",
      priceUSD: 89.99,
      priceZWL: 8999.0,
      rating: 4.5,
      category: "Tools",
    },
    {
      id: "prod-002",
      name: "Professional Paint Roller Set",
      imageUrl:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&q=80",
      priceUSD: 24.99,
      priceZWL: 2499.0,
      rating: 4.2,
      category: "Paint",
    },
    {
      id: "prod-003",
      name: "Garden Hose with Adjustable Nozzle",
      imageUrl:
        "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=500&q=80",
      priceUSD: 32.5,
      priceZWL: 3250.0,
      rating: 3.8,
      category: "Garden",
    },
    {
      id: "prod-004",
      name: "Premium Cement Bag 50kg",
      imageUrl:
        "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500&q=80",
      priceUSD: 12.75,
      priceZWL: 1275.0,
      rating: 4.0,
      category: "Building Materials",
    },
    {
      id: "prod-005",
      name: "LED Floodlight 50W",
      imageUrl:
        "https://images.unsplash.com/photo-1535723129303-40403ebcce1b?w=500&q=80",
      priceUSD: 45.99,
      priceZWL: 4599.0,
      rating: 4.7,
      category: "Electrical",
    },
    {
      id: "prod-006",
      name: "PVC Pipe Set for Plumbing",
      imageUrl:
        "https://images.unsplash.com/photo-1542013936693-884638332954?w=500&q=80",
      priceUSD: 18.25,
      priceZWL: 1825.0,
      rating: 4.3,
      category: "Plumbing",
    },
    {
      id: "prod-007",
      name: "Measuring Tape 5m",
      imageUrl:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80",
      priceUSD: 5.99,
      priceZWL: 599.0,
      rating: 4.1,
      category: "Tools",
    },
    {
      id: "prod-008",
      name: "Safety Helmet Yellow",
      imageUrl:
        "https://images.unsplash.com/photo-1578255321055-10fa7d3ae116?w=500&q=80",
      priceUSD: 14.5,
      priceZWL: 1450.0,
      rating: 4.6,
      category: "Safety Equipment",
    },
  ],
  itemsPerPage = 8,
  currentPage = 1,
  onPageChange = () => {},
  onAddToCart = () => {},
  isLoading = false,
}: ProductGridProps) => {
  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="w-full bg-gray-50">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[500px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {currentProducts.map((product) => (
              <div key={product.id} className="flex justify-center">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  priceUSD={product.priceUSD}
                  priceZWL={product.priceZWL}
                  rating={product.rating}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center py-8">
              <Pagination>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-green-700 text-green-700 hover:bg-green-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className={
                        currentPage === page
                          ? "bg-green-700 hover:bg-green-800"
                          : "border-green-700 text-green-700 hover:bg-green-50"
                      }
                    >
                      {page}
                    </Button>
                  ),
                )}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="border-green-700 text-green-700 hover:bg-green-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
