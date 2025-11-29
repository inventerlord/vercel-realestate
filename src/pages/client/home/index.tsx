import { motion } from 'framer-motion';
import {
  Search,
  Home,
  Building,
  LandPlot,
  Star,
  ArrowRight,
  Shield,
  Trophy,
  Users,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import img1 from "@/assets/1.jpg"
import img2 from "@/assets/2.jpg"
import img3 from "@/assets/3.jpg"
import img4 from "@/assets/4.jpg"
import img5 from "@/assets/5.jpg"
import img6 from "@/assets/6.jpg"

const Page = () => {
  // Hero carousel data
  const heroSlides = [
    {
      id: 1,
      image: img1,
      title: "Modern Family Homes",
      subtitle: "Discover your perfect family sanctuary",
      description: "Beautiful homes designed for modern living with spacious layouts and premium amenities"
    },
    {
      id: 2,
      image: img2,
      title: "Luxury Apartments",
      subtitle: "Experience urban luxury living",
      description: "Premium apartments in prime locations with stunning views and world-class facilities"
    },
    {
      id: 3,
      image: img3,
      title: "Beachfront Properties",
      subtitle: "Live your dream by the ocean",
      description: "Exclusive beachfront villas and properties offering breathtaking ocean views"
    },
    {
      id: 4,
      image: img4,
      title: "Commercial Spaces",
      subtitle: "Grow your business in style",
      description: "Prime commercial properties for offices, retail, and business establishments"
    }
  ];

  // Featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$750,000",
      address: "123 Park Avenue, New York",
      type: "House",
      beds: 4,
      baths: 3,
      area: 2400,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Apartment",
      price: "$450,000",
      address: "456 Downtown, Chicago",
      type: "Apartment",
      beds: 3,
      baths: 2,
      area: 1800,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Beachfront Villa",
      price: "$1,200,000",
      address: "789 Ocean Drive, Miami",
      type: "Villa",
      beds: 5,
      baths: 4,
      area: 3200,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "City Studio",
      price: "$280,000",
      address: "321 Urban Street, Seattle",
      type: "Studio",
      beds: 1,
      baths: 1,
      area: 800,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop",
      featured: false
    }
  ];

  // Property types
  const propertyTypes = [
    { name: "House", icon: Home, count: "1,234" },
    { name: "Apartment", icon: Building, count: "856" },
    { name: "Villa", icon: Home, count: "342" },
    { name: "Commercial", icon: Building, count: "567" },
    { name: "Land", icon: LandPlot, count: "198" }
  ];

  // Stats data
  const stats = [
    { number: "10,000+", label: "Properties Listed" },
    { number: "5,000+", label: "Happy Customers" },
    { number: "100+", label: "Expert Agents" },
    { number: "15+", label: "Years Experience" }
  ];

  // Features data
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your transactions are safe with our verified properties and secure payment system."
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "Recognized as the best real estate platform for 3 consecutive years."
    },
    {
      icon: Users,
      title: "Expert Agents",
      description: "Connect with certified real estate professionals for personalized service."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id} className='p-0'>
                <div
                  className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white px-4 max-w-4xl mx-auto">
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl mb-6 text-white/90"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg mb-8 text-white/80 max-w-2xl mx-auto"
                      >
                        {slide.description}
                      </motion.p>

                      {/* Search Bar */}

                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation */}
          <CarouselPrevious className="absolute bottom-1/2 left-8  bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="absolute bottom-1/2 right-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </Carousel>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Property Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Property Type</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our diverse range of properties tailored to meet your specific needs and preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {propertyTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center cursor-pointer group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{type.name}</h3>
                    <p className="text-muted-foreground text-sm">{type.count} Properties</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Properties</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked selection of premium properties that match your lifestyle and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {property.featured && (
                      <Badge className="absolute top-3 left-3 bg-primary">
                        Featured
                      </Badge>
                    )}
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{property.title}</h3>
                      <span className="text-primary font-bold text-lg">{property.price}</span>
                    </div>

                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.address}
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground border-t pt-3">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        {property.beds} Beds
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        {property.baths} Baths
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        {property.area} sqft
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              View All Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EstatePro?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide exceptional service and innovative solutions to make your property journey seamless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of satisfied customers who found their perfect home with EstatePro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Browse Properties
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground">
                Contact Agent
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;