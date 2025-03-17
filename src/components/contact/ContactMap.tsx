import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

interface ContactMapProps {
  address?: string;
  city?: string;
  country?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  phoneNumber?: string;
  email?: string;
  businessHours?: {
    days: string;
    hours: string;
  }[];
}

const ContactMap = ({
  address = "123 Hardware Avenue, Harare CBD",
  city = "Harare",
  country = "Zimbabwe",
  coordinates = { lat: -17.831773, lng: 31.045686 },
  phoneNumber = "+263 242 123 4567",
  email = "info@mrfixit.co.zw",
  businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 5:30 PM" },
    { days: "Saturday", hours: "8:00 AM - 1:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
}: ContactMapProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      {/* Map Container */}
      <div className="w-full h-[400px] bg-gray-200 relative">
        {/* This would be replaced with an actual map integration */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+dc3545(${coordinates.lng},${coordinates.lat})/${coordinates.lng},${coordinates.lat},14,0/700x400?access_token=pk.dummy`}
            alt="Store location map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="flex items-center gap-1"
            >
              <Navigation className="h-4 w-4" />
              <span>Directions</span>
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="flex items-center gap-1"
            >
              <ExternalLink className="h-4 w-4" />
              <span>View Larger</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Store Information */}
      <Card className="border-0 shadow-none">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-green-800">
                Our Location
              </h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">{address}</p>
                  <p>
                    {city}, {country}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-medium">Phone:</p>
                <p className="text-green-700">{phoneNumber}</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-green-700">{email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-green-800">
                Business Hours
              </h3>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{schedule.days}</span>
                    <span
                      className={
                        schedule.hours === "Closed" ? "text-red-500" : ""
                      }
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMap;
