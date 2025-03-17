import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroSectionProps {
  promotions?: Promotion[];
  autoplaySpeed?: number;
}

const HeroSection = ({
  promotions = [
    {
      id: 1,
      title: "Season Sale",
      description: "Get up to 30% off on all building materials this month!",
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
      ctaText: "Shop Now",
      ctaLink: "/products",
    },
    {
      id: 2,
      title: "New Tools Arrived",
      description:
        "Check out our latest collection of professional-grade tools",
      imageUrl:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      ctaText: "Explore",
      ctaLink: "/products?category=tools",
    },
    {
      id: 3,
      title: "DIY Project Kits",
      description: "Everything you need for your home improvement projects",
      imageUrl:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80",
      ctaText: "Get Started",
      ctaLink: "/products?category=diy",
    },
  ],
  autoplaySpeed = 5000,
}: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [promotions.length, autoplaySpeed]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + promotions.length) % promotions.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-100">
      {/* Carousel slides */}
      <div className="relative w-full h-full">
        {promotions.map((promotion, index) => (
          <div
            key={promotion.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${promotion.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-start px-8 md:px-16 lg:px-24 z-10">
              <div className="max-w-xl text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {promotion.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  {promotion.description}
                </p>
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md"
                  asChild
                >
                  <a href={promotion.ctaLink}>{promotion.ctaText}</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
