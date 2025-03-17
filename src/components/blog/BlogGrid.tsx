import React from "react";
import BlogCard from "./BlogCard";
import { Pagination } from "../ui/pagination";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface BlogGridProps {
  posts?: BlogPost[];
  onPageChange?: (page: number) => void;
  currentPage?: number;
  totalPages?: number;
  onSearch?: (query: string) => void;
  onCategoryFilter?: (category: string) => void;
}

const BlogGrid = ({
  posts = [
    {
      id: "1",
      title: "DIY Home Improvement Tips for Beginners",
      excerpt:
        "Learn the essential skills and tools needed to start your DIY journey with confidence. Perfect for homeowners looking to save money on basic repairs.",
      category: "DIY Tips",
      date: "May 15, 2023",
      readTime: "5 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
    },
    {
      id: "2",
      title: "How to Choose the Right Paint for Your Project",
      excerpt:
        "A comprehensive guide to selecting the perfect paint type, finish, and color for different surfaces and rooms in your home.",
      category: "Paint",
      date: "June 2, 2023",
      readTime: "7 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    },
    {
      id: "3",
      title: "Essential Power Tools Every Homeowner Should Own",
      excerpt:
        "Discover the must-have power tools that will help you tackle a wide range of home maintenance and improvement projects.",
      category: "Tools",
      date: "June 18, 2023",
      readTime: "6 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1572981779307-38e8d365fa2e?w=800&q=80",
    },
    {
      id: "4",
      title: "Building a Raised Garden Bed: Step-by-Step Guide",
      excerpt:
        "Follow this detailed tutorial to create your own raised garden bed using basic materials from your local hardware store.",
      category: "Garden",
      date: "July 5, 2023",
      readTime: "8 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
    },
    {
      id: "5",
      title: "Fixing Common Plumbing Issues Without a Professional",
      excerpt:
        "Learn how to diagnose and repair simple plumbing problems, saving you time and money on professional services.",
      category: "Plumbing",
      date: "July 22, 2023",
      readTime: "10 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    },
    {
      id: "6",
      title: "Weatherproofing Your Home for the Rainy Season",
      excerpt:
        "Prepare your home for Zimbabwe's rainy season with these essential weatherproofing tips and product recommendations.",
      category: "Seasonal",
      date: "August 10, 2023",
      readTime: "6 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
    },
  ],
  onPageChange = (page) => console.log(`Page changed to ${page}`),
  currentPage = 1,
  totalPages = 3,
  onSearch = (query) => console.log(`Searching for: ${query}`),
  onCategoryFilter = (category) =>
    console.log(`Filtering by category: ${category}`),
}: BlogGridProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const categories = [
    "All Categories",
    "DIY Tips",
    "Tools",
    "Paint",
    "Plumbing",
    "Electrical",
    "Garden",
    "Seasonal",
  ];

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <form onSubmit={handleSearch} className="w-full md:w-1/2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search blog posts..."
                className="pl-10 pr-4 py-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white"
                size="sm"
              >
                Search
              </Button>
            </div>
          </form>

          <div className="w-full md:w-1/4">
            <Select
              onValueChange={onCategoryFilter}
              defaultValue="All Categories"
            >
              <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring-green-500">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              imageUrl={post.imageUrl}
              onClick={() => console.log(`Navigating to blog post: ${post.id}`)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <Pagination>
            <Button
              variant="outline"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-2 border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => onPageChange(page)}
                className={
                  currentPage === page
                    ? "mx-1 bg-green-700 hover:bg-green-800 text-white"
                    : "mx-1 border-gray-300 text-gray-700 hover:bg-gray-100"
                }
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="ml-2 border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Next
            </Button>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
