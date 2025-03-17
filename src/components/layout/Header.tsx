import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Toggle } from "@/components/ui/toggle";

interface HeaderProps {
  logoSrc?: string;
  cartItemCount?: number;
}

const Header = ({ logoSrc = "/logo.png", cartItemCount = 0 }: HeaderProps) => {
  const [currency, setCurrency] = useState<"USD" | "ZWL">("USD");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "ZWL" : "USD"));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="font-bold text-green-800">MF</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline-block">
              Mr. Fix It
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/products"
              className="hover:text-yellow-300 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="hover:text-yellow-300 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Currency Toggle */}
            <Toggle
              pressed={currency === "ZWL"}
              onPressedChange={toggleCurrency}
              className="bg-green-700 data-[state=on]:bg-yellow-500 data-[state=on]:text-green-800 h-8 px-3"
            >
              {currency}
            </Toggle>

            {/* Search */}
            <div className="relative hidden sm:block">
              {isSearchOpen ? (
                <div className="absolute right-0 top-0 w-64 flex">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="bg-green-700 text-white placeholder:text-green-300 border-green-600"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-1 text-white hover:bg-green-700"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-green-700"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white hover:bg-green-700"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-green-700"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-green-800 text-white">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    to="/products"
                    className="text-lg hover:text-yellow-300 transition-colors"
                  >
                    Products
                  </Link>
                  <Link
                    to="/about"
                    className="text-lg hover:text-yellow-300 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="text-lg hover:text-yellow-300 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/blog"
                    className="text-lg hover:text-yellow-300 transition-colors"
                  >
                    Blog
                  </Link>
                  <div className="pt-4">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="bg-green-700 text-white placeholder:text-green-300 border-green-600"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
