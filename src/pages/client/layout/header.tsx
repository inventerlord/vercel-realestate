// Updated Header component
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Home, Phone, User, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'Overview', href: '#properties' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#contact', icon: Phone },
    { name: 'FloorPlan', href: '#agents', icon: User },
    { name: 'Contact', href: '#agents', icon: User },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60 border-border/40"
          : "bg-transparent backdrop-blur-none border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Home className={cn(
              "h-8 w-8 transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white"
            )} />
            <span className={cn(
              "text-xl font-bold transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Residem
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors duration-300",
                    isScrolled 
                      ? "text-foreground hover:text-primary" 
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Schedule a Visit Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant={"default"}
              className="transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule a Visit</span>
            </Button>
          </div>

          {/* Mobile Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={isScrolled ? "ghost" : "secondary"}
                size="icon"
                className="md:hidden transition-all duration-300"
              >
                <Menu className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isScrolled ? "text-foreground" : "text-white"
                )} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <div className="flex flex-col h-full">
                {/* Sheet Header */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <Home className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">Residem</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-6">
                  <div className="space-y-4">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <SheetClose asChild key={item.name}>
                          <a
                            href={item.href}
                            className="flex items-center space-x-3 text-lg font-medium py-3 px-2 rounded-lg transition-colors hover:bg-muted"
                          >
                            {Icon && <Icon className="h-5 w-5" />}
                            <span>{item.name}</span>
                          </a>
                        </SheetClose>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile Schedule Button */}
                <div className="border-t pt-6">
                  <Button className="w-full flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Schedule a Visit</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;