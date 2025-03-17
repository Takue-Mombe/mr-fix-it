import React from "react";
import CompanyHistory from "@/components/about/CompanyHistory";
import CompanyValues from "@/components/about/CompanyValues";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

interface AboutPageProps {
  teamMembers?: TeamMember[];
  storeImages?: string[];
}

const AboutPage = ({
  teamMembers = [
    {
      name: "John Moyo",
      position: "Founder & CEO",
      bio: "John founded Mr. Fix It Hardware in 1995 with a vision to provide quality hardware products to Zimbabwean communities. His expertise in construction and passion for customer service has been the foundation of our success.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    {
      name: "Sarah Ndlovu",
      position: "Operations Manager",
      bio: "With over 15 years of experience in retail management, Sarah ensures our stores run efficiently while maintaining our high standards of customer service.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "David Mutasa",
      position: "Product Specialist",
      bio: "David's extensive knowledge of building materials and tools makes him an invaluable resource for both our team and customers seeking expert advice.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
    {
      name: "Grace Chigumba",
      position: "Community Outreach Coordinator",
      bio: "Grace leads our community initiatives, organizing workshops and training programs to support local builders and DIY enthusiasts.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=grace",
    },
  ],
  storeImages = [
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?w=800&q=80",
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
  ],
}: AboutPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md">
        {/* Placeholder for Header component */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-800">
              Mr. Fix It Hardware
            </div>
            <nav className="ml-10 hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-800">
                Home
              </a>
              <a
                href="/products"
                className="text-gray-700 hover:text-green-800"
              >
                Products
              </a>
              <a href="/about" className="text-green-800 font-medium">
                About Us
              </a>
              <a href="/contact" className="text-gray-700 hover:text-green-800">
                Contact
              </a>
              <a href="/blog" className="text-gray-700 hover:text-green-800">
                Blog
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border rounded-md px-3 py-1">
              <span className="font-medium">USD</span> /{" "}
              <span className="text-gray-500">ZWL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
            alt="Hardware store interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Mr. Fix It Hardware
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Zimbabwe's trusted hardware supplier since 1995. We're committed to
            providing quality products, expert advice, and exceptional service
            to our communities.
          </p>
        </div>
      </section>

      {/* Company History Section */}
      <CompanyHistory />

      {/* Store Images Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Stores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit any of our five locations across Zimbabwe to experience our
              wide selection of quality hardware products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Mr. Fix It Hardware Store ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <CompanyValues />

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind Mr. Fix It Hardware's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-red-600"
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-yellow-100 border-4 border-yellow-500">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-green-700 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-4xl mx-auto">
            "To empower Zimbabwean builders, contractors, and homeowners with
            quality hardware products, expert knowledge, and exceptional service
            that helps build stronger communities."
          </p>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mr. Fix It Hardware</h3>
              <p className="text-green-200">
                Zimbabwe's trusted hardware supplier since 1995.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-green-200 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-green-200 hover:text-white"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-green-200 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-green-200 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-green-200 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <address className="not-italic text-green-200">
                123 Samora Machel Avenue
                <br />
                Harare, Zimbabwe
                <br />
                <a href="tel:+2631234567890" className="hover:text-white">
                  +263 123 456 7890
                </a>
                <br />
                <a
                  href="mailto:info@mrfixit.co.zw"
                  className="hover:text-white"
                >
                  info@mrfixit.co.zw
                </a>
              </address>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-green-200 mb-2">
                Subscribe for updates and promotions
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-black rounded-l-md w-full"
                />
                <button className="bg-yellow-500 text-green-900 font-bold px-4 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
            <p>
              &copy; {new Date().getFullYear()} Mr. Fix It Hardware. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
