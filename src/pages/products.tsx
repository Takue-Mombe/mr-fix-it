import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductFilters from "@/components/products/ProductFilters";
import ProductGrid from "@/components/products/ProductGrid";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  priceUSD: number;
  priceZWL: number;
  rating: number;
  category: string;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  ratings: number[];
}

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState<"USD" | "ZWL">("USD");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([
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
      category: "Garden Supplies",
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
    {
      id: "prod-009",
      name: "Cordless Circular Saw",
      imageUrl:
        "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&q=80",
      priceUSD: 129.99,
      priceZWL: 12999.0,
      rating: 4.8,
      category: "Tools",
    },
    {
      id: "prod-010",
      name: "Exterior House Paint 20L",
      imageUrl:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80",
      priceUSD: 79.99,
      priceZWL: 7999.0,
      rating: 4.4,
      category: "Paint",
    },
    {
      id: "prod-011",
      name: "Gardening Tool Set",
      imageUrl:
        "https://images.unsplash.com/photo-1585513553738-84971d9c2f8d?w=500&q=80",
      priceUSD: 49.99,
      priceZWL: 4999.0,
      rating: 4.2,
      category: "Garden Supplies",
    },
    {
      id: "prod-012",
      name: "Brick Set 500pcs",
      imageUrl:
        "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=500&q=80",
      priceUSD: 199.99,
      priceZWL: 19999.0,
      rating: 4.3,
      category: "Building Materials",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredProducts(results);
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  };

  // Handle filter change
  const handleFilterChange = (filters: FilterState) => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      let results = [...products];

      // Filter by categories
      if (filters.categories.length > 0) {
        results = results.filter((product) =>
          filters.categories.includes(product.category),
        );
      }

      // Filter by price range
      results = results.filter((product) => {
        const price =
          activeCurrency === "USD" ? product.priceUSD : product.priceZWL;
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });

      // Filter by ratings
      if (filters.ratings.length > 0) {
        results = results.filter((product) => {
          const productRatingFloor = Math.floor(product.rating);
          return filters.ratings.some((rating) => productRatingFloor >= rating);
        });
      }

      setFilteredProducts(results);
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  };

  // Handle add to cart
  const handleAddToCart = (id: string) => {
    // This would typically interact with a cart state or API
    console.log(`Added product ${id} to cart`);
    // Show a toast notification
    alert(`Added product to cart!`);
  };

  // Toggle currency
  const toggleCurrency = (currency: "USD" | "ZWL") => {
    setActiveCurrency(currency);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-green-700 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">Products</h1>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <form onSubmit={handleSearch} className="flex-1 w-full">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border-0 focus-visible:ring-2 focus-visible:ring-yellow-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  Search
                </Button>
              </div>
            </form>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className={`${showFilters ? "bg-white text-green-700" : "bg-transparent text-white border-white"}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Tabs defaultValue="USD" className="w-[180px]">
                <TabsList className="grid w-full grid-cols-2 bg-green-800">
                  <TabsTrigger
                    value="USD"
                    onClick={() => toggleCurrency("USD")}
                    className={
                      activeCurrency === "USD"
                        ? "data-[state=active]:bg-white data-[state=active]:text-green-700"
                        : "text-white"
                    }
                  >
                    USD
                  </TabsTrigger>
                  <TabsTrigger
                    value="ZWL"
                    onClick={() => toggleCurrency("ZWL")}
                    className={
                      activeCurrency === "ZWL"
                        ? "data-[state=active]:bg-white data-[state=active]:text-green-700"
                        : "text-white"
                    }
                  >
                    ZWL
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Show on larger screens or when toggled */}
          <div
            className={`${showFilters ? "block" : "hidden md:block"} w-full md:w-1/4 lg:w-1/5`}
          >
            <ProductFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Product Grid */}
          <div
            className={`w-full ${showFilters ? "md:w-3/4 lg:w-4/5" : "md:w-3/4 lg:w-4/5"}`}
          >
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <ProductGrid
              products={filteredProducts}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              onAddToCart={handleAddToCart}
              isLoading={isLoading}
            />

            {filteredProducts.length === 0 && !isLoading && (
              <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                <div className="rounded-full bg-yellow-100 p-6 mb-4">
                  <Search className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 mb-6 max-w-md">
                  We couldn't find any products matching your search or filters.
                  Try adjusting your search terms or filters.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setFilteredProducts(products);
                  }}
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
