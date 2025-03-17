import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  imageUrl?: string;
  priceUSD?: number;
  priceZWL?: number;
  rating?: number;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "prod-001",
  name = "Heavy Duty Power Drill",
  imageUrl = "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80",
  priceUSD = 89.99,
  priceZWL = 8999.0,
  rating = 4.5,
  onAddToCart = () => {},
}: ProductCardProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400 fill-half"
          />,
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Card className="w-full max-w-[280px] overflow-hidden transition-all duration-200 hover:shadow-lg bg-white">
      <div className="relative h-[200px] w-full overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800">
          {name}
        </h3>
        <div className="mb-2 flex items-center">
          {renderStars()}
          <span className="ml-1 text-sm text-gray-600">({rating})</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="font-medium text-green-700">
              ${priceUSD.toFixed(2)} USD
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-600">
              ZWL ${priceZWL.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(id)}
          className="w-full bg-green-700 hover:bg-green-800 text-white"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
