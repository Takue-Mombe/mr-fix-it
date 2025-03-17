import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CalendarIcon, Clock } from "lucide-react";

interface BlogCardProps {
  title?: string;
  excerpt?: string;
  category?: string;
  date?: string;
  readTime?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const BlogCard = ({
  title = "DIY Home Improvement Tips for Beginners",
  excerpt = "Learn the essential skills and tools needed to start your DIY journey with confidence. Perfect for homeowners looking to save money on basic repairs.",
  category = "DIY Tips",
  date = "May 15, 2023",
  readTime = "5 min read",
  imageUrl = "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
  onClick = () => console.log("Blog card clicked"),
}: BlogCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-yellow-500 hover:bg-yellow-600">
          {category}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <h3
          className="text-xl font-semibold line-clamp-2 text-green-800 hover:text-green-700 cursor-pointer"
          onClick={onClick}
        >
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3 mb-3">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 border-t border-gray-100">
        <Button
          variant="outline"
          className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
          onClick={onClick}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
