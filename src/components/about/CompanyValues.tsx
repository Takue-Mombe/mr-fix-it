import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Heart, Users, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({
  icon,
  title = "Value Title",
  description = "Value description goes here.",
}: ValueCardProps) => {
  return (
    <Card className="h-full bg-white border-2 border-green-600 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-green-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

interface CompanyValuesProps {
  values?: Array<{
    icon: keyof typeof valueIcons;
    title: string;
    description: string;
  }>;
  title?: string;
  subtitle?: string;
}

const valueIcons = {
  quality: <Award className="w-6 h-6" />,
  service: <Heart className="w-6 h-6" />,
  community: <Users className="w-6 h-6" />,
  expertise: <Shield className="w-6 h-6" />,
};

const CompanyValues = ({
  values = [
    {
      icon: "quality",
      title: "Quality Products",
      description:
        "We source only the highest quality hardware products from trusted manufacturers to ensure durability and reliability.",
    },
    {
      icon: "service",
      title: "Customer Service",
      description:
        "Our dedicated team is committed to providing exceptional service and expert advice for all your hardware needs.",
    },
    {
      icon: "community",
      title: "Community Support",
      description:
        "We're proud to support local Zimbabwean communities through employment opportunities and community initiatives.",
    },
    {
      icon: "expertise",
      title: "Technical Expertise",
      description:
        "Our staff undergoes regular training to stay updated with the latest products and techniques in the hardware industry.",
    },
  ],
  title = "Our Core Values",
  subtitle = "The principles that guide everything we do at Mr. Fix It Hardware",
}: CompanyValuesProps) => {
  return (
    <section className="py-16 px-4 bg-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={valueIcons[value.icon]}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
