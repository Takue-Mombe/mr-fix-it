import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help.
            Reach out to us using any of the methods below.
          </p>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Mon-Fri: 8am - 5:30pm</p>
            <a
              href="tel:+2632421234567"
              className="text-green-600 font-medium hover:text-green-700"
            >
              +263 242 123 4567
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
            <a
              href="mailto:info@mrfixit.co.zw"
              className="text-green-600 font-medium hover:text-green-700"
            >
              info@mrfixit.co.zw
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-3">
              123 Hardware Avenue, Harare CBD
            </p>
            <p className="text-green-600 font-medium">Harare, Zimbabwe</p>
          </div>
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="order-2 lg:order-1">
            <ContactMap />
          </div>
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Do you offer delivery services?
              </h3>
              <p className="text-gray-600">
                Yes, we offer delivery services within Harare and surrounding
                areas. Delivery fees vary based on location and order size.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept cash (USD and ZWL), bank transfers, mobile money
                payments (EcoCash, OneMoney), and major credit/debit cards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Do you offer product installation services?
              </h3>
              <p className="text-gray-600">
                Yes, we provide professional installation services for select
                products. Please inquire about installation when making your
                purchase.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We accept returns within 7 days of purchase, provided the
                product is in its original condition with packaging. Some items
                may have specific return policies.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
