import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface FooterProps {
  companyName?: string;
  address?: string;
  phone?: string;
  email?: string;
  storeHours?: {
    days: string;
    hours: string;
  }[];
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}

const Footer = ({
  companyName = "Mr. Fix It Hardware",
  address = "123 Samora Machel Avenue, Harare, Zimbabwe",
  phone = "+263 242 123456",
  email = "info@mrfixit.co.zw",
  storeHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 5:30 PM" },
    { days: "Saturday", hours: "8:00 AM - 3:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  socialLinks = [
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Twitter", url: "https://twitter.com" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="mb-6">
              Your trusted partner for all hardware and building supplies in
              Zimbabwe.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.platform === "Facebook" && <Facebook size={20} />}
                  {link.platform === "Instagram" && <Instagram size={20} />}
                  {link.platform === "Twitter" && <Twitter size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>{email}</span>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Store Hours</h3>
            <div className="space-y-2">
              {storeHours.map((schedule, index) => (
                <div key={index} className="flex items-start">
                  <Clock className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{schedule.days}</p>
                    <p>{schedule.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to receive updates on new products and special offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-green-800 border-green-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="border-t border-green-800 mt-10 pt-6 text-center md:flex md:justify-between md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
