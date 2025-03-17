import React from "react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";

interface CategoryProps {
  categories?: {
    id: string;
    name: string;
    image: string;
    slug: string;
  }[];
}

const ProductCategories = ({
  categories = [
    {
      id: "1",
      name: "Tools",
      image:
        "https://images.unsplash.com/photo-1581147036324-c47a03a81d48?w=600&q=80",
      slug: "tools",
    },
    {
      id: "2",
      name: "Building Materials",
      image:
        "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80",
      slug: "building-materials",
    },
    {
      id: "3",
      name: "Electrical",
      image:
        "https://images.unsplash.com/photo-1558424871-c0cc3c951926?w=600&q=80",
      slug: "electrical",
    },
    {
      id: "4",
      name: "Plumbing",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
      slug: "plumbing",
    },
    {
      id: "5",
      name: "Paint",
      image:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
      slug: "paint",
    },
    {
      id: "6",
      name: "Garden Supplies",
      image:
        "https://images.unsplash.com/photo-1599685315640-4a9ba2613f46?w=600&q=80",
      slug: "garden-supplies",
    },
  ],
}: CategoryProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of quality hardware products for all your
            home improvement and construction needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              to={`/products?category=${category.slug}`}
              key={category.id}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="overflow-hidden h-full border-2 border-gray-100 hover:border-green-600 hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      Shop Now
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
