import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  avatar: string;
  rating: number;
  testimonial: string;
  date: string;
}

const Testimonial = ({
  name = "John Doe",
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  rating = 5,
  testimonial = "Great products and excellent service! I highly recommend Mr. Fix It Hardware for all your hardware needs.",
  date = "March 15, 2023",
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-white shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }
            />
          ))}
        </div>
        <p className="text-gray-700">{testimonial}</p>
      </CardContent>
    </Card>
  );
};

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const defaultTestimonials: TestimonialProps[] = [
    {
      name: "Tendai Moyo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tendai",
      rating: 5,
      testimonial:
        "Mr. Fix It Hardware has been my go-to store for all building materials. Their prices are competitive and the staff is very knowledgeable.",
      date: "April 10, 2023",
    },
    {
      name: "Chiedza Mutasa",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chiedza",
      rating: 4,
      testimonial:
        "I renovated my entire kitchen with supplies from Mr. Fix It. The quality of their products is excellent and they always have what I need in stock.",
      date: "May 22, 2023",
    },
    {
      name: "Farai Ndlovu",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farai",
      rating: 5,
      testimonial:
        "As a professional contractor, I appreciate their dual currency options and the wide range of tools they offer. Definitely the best hardware store in Harare!",
      date: "June 15, 2023",
    },
    {
      name: "Nyasha Zimuto",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nyasha",
      rating: 5,
      testimonial:
        "The staff at Mr. Fix It went above and beyond to help me find the right materials for my DIY project. Their customer service is outstanding.",
      date: "July 3, 2023",
    },
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
            across Zimbabwe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                className={`w-3 h-3 rounded-full ${dot === 0 ? "bg-green-600" : "bg-gray-300"}`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
