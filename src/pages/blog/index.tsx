import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import BlogGrid from "../../components/blog/BlogGrid";
import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPage = () => {
  const [featuredPost, setFeaturedPost] = React.useState({
    id: "featured-1",
    title: "10 Essential Tools Every Zimbabwean Homeowner Should Have",
    excerpt:
      "Discover the must-have tools that will help you tackle common household repairs and maintenance tasks, saving you money and time in the long run.",
    category: "Tools",
    date: "June 5, 2023",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1581147036324-c47a03a81d48?w=1200&q=80",
  });

  const categories = [
    "All",
    "DIY Tips",
    "Tools",
    "Paint",
    "Plumbing",
    "Electrical",
    "Garden",
    "Seasonal",
  ];

  const handleSearch = (query: string) => {
    console.log(`Searching for: ${query}`);
    // In a real implementation, this would filter the blog posts
  };

  const handleCategoryFilter = (category: string) => {
    console.log(`Filtering by category: ${category}`);
    // In a real implementation, this would filter the blog posts
  };

  const handlePageChange = (page: number) => {
    console.log(`Navigating to page: ${page}`);
    // In a real implementation, this would change the page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Helmet>
        <title>Blog - Mr. Fix It Hardware</title>
        <meta
          name="description"
          content="DIY tips, product updates, and hardware guides from Mr. Fix It Hardware in Zimbabwe."
        />
      </Helmet>

      {/* Hero Section with Featured Post */}
      <section className="relative bg-green-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={featuredPost.imageUrl}
            alt="Featured post background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 opacity-90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Mr. Fix It Blog
            </h1>
            <p className="text-xl text-green-100 mb-8">
              DIY tips, product updates, and hardware guides for Zimbabwean
              homeowners
            </p>
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden text-gray-900 max-w-4xl"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img
                  className="h-64 w-full object-cover md:h-full"
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold mb-1">
                  {featuredPost.category} • Featured Post
                </div>
                <h2 className="text-2xl font-bold text-green-800 hover:text-green-700 transition duration-150 mb-2">
                  {featuredPost.title}
                </h2>
                <p className="mt-2 text-gray-600 mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Read Featured Article
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="All" className="mb-8">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-100">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-green-700 data-[state=active]:text-white"
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <BlogGrid
                  onSearch={handleSearch}
                  onCategoryFilter={handleCategoryFilter}
                  onPageChange={handlePageChange}
                  currentPage={1}
                  totalPages={3}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-yellow-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
            Get the latest DIY tips, product updates, and special offers
            delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <Button className="bg-green-700 hover:bg-green-800 text-white rounded-l-none px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
