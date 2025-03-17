import React from "react";
import { Card, CardContent } from "../ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface CompanyHistoryProps {
  title?: string;
  subtitle?: string;
  timelineEvents?: TimelineEvent[];
}

const CompanyHistory = ({
  title = "Our Journey",
  subtitle = "The story of Mr. Fix It Hardware - From humble beginnings to Zimbabwe's trusted hardware supplier",
  timelineEvents = [
    {
      year: "1995",
      title: "Humble Beginnings",
      description:
        "Mr. Fix It Hardware started as a small family-owned shop in Harare with just a handful of essential hardware products.",
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    },
    {
      year: "2003",
      title: "Expansion to Bulawayo",
      description:
        "After years of steady growth, we opened our second location in Bulawayo to serve customers in Zimbabwe's second-largest city.",
      imageUrl:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    },
    {
      year: "2010",
      title: "Weathering Economic Challenges",
      description:
        "During Zimbabwe's economic difficulties, we adapted our business model to continue providing essential hardware supplies to our communities.",
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description:
        "We launched our first e-commerce platform to make our products accessible to customers throughout Zimbabwe.",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    },
    {
      year: "2023",
      title: "Today",
      description:
        "Now with 5 physical locations and a robust online presence, Mr. Fix It Hardware has become Zimbabwe's trusted source for quality hardware and building supplies.",
      imageUrl:
        "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&q=80",
    },
  ],
}: CompanyHistoryProps) => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Year marker */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 border-4 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {event.year.slice(-2)}
                    </span>
                  </div>
                </div>

                <Card
                  className={`md:w-5/12 ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"} relative z-10 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="md:hidden mb-2 inline-block bg-yellow-500 text-white text-sm font-bold rounded-full px-3 py-1">
                      {event.year}
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      {event.imageUrl && (
                        <div className="md:w-1/3">
                          <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="w-full h-40 object-cover rounded-md"
                          />
                        </div>
                      )}
                      <div className={event.imageUrl ? "md:w-2/3" : "w-full"}>
                        <div className="hidden md:block text-green-700 font-bold mb-1">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
