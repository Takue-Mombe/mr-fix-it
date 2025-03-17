import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface ProductFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
  categories?: string[];
  brands?: string[];
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  ratings: number[];
}

const ProductFilters = ({
  onFilterChange,
  categories = [
    "Tools",
    "Building Materials",
    "Electrical",
    "Plumbing",
    "Paint",
    "Garden Supplies",
  ],
  brands = [
    "DeWalt",
    "Bosch",
    "Makita",
    "Stanley",
    "Black & Decker",
    "Dulux",
    "Cobra",
    "Ryobi",
  ],
}: ProductFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    brands: [],
    ratings: [],
  });

  const [activeFilters, setActiveFilters] = useState<number>(0);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    const updatedFilters = {
      ...filters,
      categories: updatedCategories,
    };

    setFilters(updatedFilters);
    setActiveFilters(countActiveFilters(updatedFilters));
    onFilterChange?.(updatedFilters);
  };

  const handleBrandChange = (brand: string) => {
    const updatedBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];

    const updatedFilters = {
      ...filters,
      brands: updatedBrands,
    };

    setFilters(updatedFilters);
    setActiveFilters(countActiveFilters(updatedFilters));
    onFilterChange?.(updatedFilters);
  };

  const handlePriceChange = (value: number[]) => {
    const updatedFilters = {
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    };

    setFilters(updatedFilters);
    setActiveFilters(countActiveFilters(updatedFilters));
    onFilterChange?.(updatedFilters);
  };

  const handleRatingChange = (rating: number) => {
    const updatedRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];

    const updatedFilters = {
      ...filters,
      ratings: updatedRatings,
    };

    setFilters(updatedFilters);
    setActiveFilters(countActiveFilters(updatedFilters));
    onFilterChange?.(updatedFilters);
  };

  const resetFilters = () => {
    const resetState = {
      categories: [],
      priceRange: [0, 1000],
      brands: [],
      ratings: [],
    };

    setFilters(resetState);
    setActiveFilters(0);
    onFilterChange?.(resetState);
  };

  const countActiveFilters = (filterState: FilterState): number => {
    let count = 0;
    if (filterState.categories.length > 0) count++;
    if (filterState.brands.length > 0) count++;
    if (filterState.ratings.length > 0) count++;
    if (filterState.priceRange[0] > 0 || filterState.priceRange[1] < 1000)
      count++;
    return count;
  };

  return (
    <div className="w-full h-full bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        {activeFilters > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="text-sm"
          >
            Reset ({activeFilters})
          </Button>
        )}
      </div>

      <Separator className="my-4" />

      <Accordion
        type="multiple"
        defaultValue={["categories", "price", "brands", "ratings"]}
        className="space-y-2"
      >
        <AccordionItem value="categories">
          <AccordionTrigger className="text-base font-medium">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 1000]}
                value={[filters.priceRange[0], filters.priceRange[1]]}
                max={1000}
                step={10}
                onValueChange={handlePriceChange}
                className="my-6"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  ${filters.priceRange[0]}
                </span>
                <span className="text-sm font-medium">
                  ${filters.priceRange[1]}
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger className="text-base font-medium">
            Brands
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="text-sm cursor-pointer"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ratings">
          <AccordionTrigger className="text-base font-medium">
            Ratings
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={filters.ratings.includes(rating)}
                    onCheckedChange={() => handleRatingChange(rating)}
                  />
                  <Label
                    htmlFor={`rating-${rating}`}
                    className="text-sm cursor-pointer flex items-center"
                  >
                    {Array(rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    {Array(5 - rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    <span className="ml-1">& Up</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {activeFilters > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {filters.categories.map((category) => (
              <Badge
                key={`badge-${category}`}
                variant="outline"
                className="flex items-center gap-1"
              >
                {category}
                <button
                  onClick={() => handleCategoryChange(category)}
                  className="ml-1 h-4 w-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300"
                >
                  ×
                </button>
              </Badge>
            ))}
            {filters.brands.map((brand) => (
              <Badge
                key={`badge-${brand}`}
                variant="outline"
                className="flex items-center gap-1"
              >
                {brand}
                <button
                  onClick={() => handleBrandChange(brand)}
                  className="ml-1 h-4 w-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300"
                >
                  ×
                </button>
              </Badge>
            ))}
            {(filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) && (
              <Badge variant="outline" className="flex items-center gap-1">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
