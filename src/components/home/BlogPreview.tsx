import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import BlogCard from "../blog/BlogCard";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface BlogPreviewProps {
  title?: string;
  subtitle?: string;
  posts?: BlogPost[];
  onViewAllClick?: () => void;
}

const BlogPreview = ({
  title = "Latest From Our Blog",
  subtitle = "Discover DIY tips, product updates, and home improvement inspiration",
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
      category: "Paint Guide",
      date: "June 2, 2023",
      readTime: "7 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    },
    {
      id: "3",
      title: "Essential Tools Every Homeowner Should Have",
      excerpt:
        "Our experts share the must-have tools that will help you tackle common household repairs and maintenance tasks with ease.",
      category: "Tools",
      date: "June 18, 2023",
      readTime: "6 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    },
  ],
  onViewAllClick = () => console.log("View all blog posts clicked"),
}: BlogPreviewProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              imageUrl={post.imageUrl}
              onClick={() => console.log(`Blog post ${post.id} clicked`)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            onClick={onViewAllClick}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md inline-flex items-center gap-2"
          >
            View All Blog Posts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
