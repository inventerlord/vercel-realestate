import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import img1 from "@/assets/1.jpg"
import img2 from "@/assets/2.jpg"
import img3 from "@/assets/3.jpg"
import img4 from "@/assets/4.jpg"

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

  const facilities = [
    {
      title: "Smart Home System",
      description: "Veihi hure occaecat do consectetur dolore efficia magna ut anim ut aliqua nulla cilium do cupidatat magna ex."
    },
    {
      title: "Solar Energy Panels",
      description: "Veihi hure occaecat do consectetur dolore efficia magna ut anim ut aliqua nulla cilium do cupidatat magna ex."
    },
    {
      title: "Central Air Conditioning",
      description: "Veihi hure occaecat do consectetur dolore efficia magna ut anim ut aliqua nulla cilium do cupidatat magna ex."
    },
    {
      title: "Home Security System",
      description: "Veihi hure occaecat do consectetur dolore efficia magna ut anim ut aliqua nulla cilium do cupidatat magna ex."
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

      {/* Comfort Meet Elegance Section */}
      <section className="w-9/12 mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="relative">
          <motion.img
            src={img3}
            alt="Modern Home"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl shadow-2xl w-full object-cover h-80"
          />

          <motion.img
            src={img4}
            alt="Interior"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 60, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-2/3 rounded-2xl shadow-xl border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <Badge className="bg-gray-200 text-gray-700 w-fit px-3 py-1">
            Home Overview
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold">
            Comfort Meet Elegance
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Non anim in pariatur in ex excepteur commodo do officia amet incididunt
            ullamco nostrud aliquip minim magna esse dolore ea quis laborum eiusmod
            dolore ex pariatur ut cillum non excepteur irure dolore reprehenderit.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-orange-500 text-xl">✔</span>
              Contemporary design with high ceilings
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-500 text-xl">✔</span>
              Spacious bedrooms with built-in wardrobes
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-500 text-xl">✔</span>
              Fully integrated smart home system
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-orange-500 text-xl">✔</span>
              Garage with electric vehicle charging port
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Room Details Section */}
      <section className="w-full mx-auto px-6 py-24 bg-primary/40">
        <div className='w-8/12 mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gray-200 text-gray-700 w-fit px-3 py-1 mb-4">
              Room Details
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Room
            </h2>
          </motion.div>

          <Tabs defaultValue="living-room" className="w-full">
            <TabsList className="w-full flex justify-center gap-8 bg-transparent p-0 mb-16">
              <TabsTrigger
                value="living-room"
                className="text-lg font-semibold px-6 py-3 data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:border-0 data-[state=active]:shadow-none  text-gray-500 border-b-2 border-transparent transition-all duration-200"
              >
                Living Room
              </TabsTrigger>
              <TabsTrigger
                value="dinning-room"
                className="text-lg font-semibold px-6 py-3 data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:border-0 data-[state=active]:shadow-none text-gray-500 border-b-2 border-transparent transition-all duration-200"
              >
                Dinning Room
              </TabsTrigger>
              <TabsTrigger
                value="kitchen"
                className="text-lg font-semibold px-6 py-3 data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:border-0 data-[state=active]:shadow-none text-gray-500 border-b-2 border-transparent transition-all duration-200"
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger
                value="master-bedroom"
                className="text-lg font-semibold px-6 py-3 data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:border-0 data-[state=active]:shadow-none text-gray-500 border-b-2 border-transparent transition-all duration-200"
              >
                Master Bedroom
              </TabsTrigger>
              <TabsTrigger
                value="bathroom"
                className="text-lg font-semibold px-6 py-3 data-[state=active]:text-gray-900 data-[state=active]:bg-transparent data-[state=active]:border-0 data-[state=active]:shadow-none text-gray-500 border-b-2 border-transparent transition-all duration-200"
              >
                Bathroom
              </TabsTrigger>
            </TabsList>

            {/* Living Room Content */}
            <TabsContent value="living-room" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900">Living Room</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    A cozy, social hub with plush seating and entertainment. Ideal for relaxing,
                    gatherings, and family time.
                  </p>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <img
                    src={img1}
                    alt="Living Room"
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </TabsContent>

            {/* Dinning Room Content */}
            <TabsContent value="dinning-room" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900">Dinning Room</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Elegant dining space perfect for family meals and entertaining guests.
                    Features beautiful lighting and comfortable seating.
                  </p>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <img
                    src={img2}
                    alt="Dinning Room"
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </TabsContent>

            {/* Kitchen Content */}
            <TabsContent value="kitchen" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900">Kitchen</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Modern kitchen equipped with high-end appliances and ample storage.
                    Perfect for cooking enthusiasts and family meals.
                  </p>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <img
                    src={img3}
                    alt="Kitchen"
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </TabsContent>

            {/* Master Bedroom Content */}
            <TabsContent value="master-bedroom" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900">Master Bedroom</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Spacious master bedroom with walk-in closet and en-suite bathroom.
                    A peaceful retreat with plenty of natural light.
                  </p>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <img
                    src={img4}
                    alt="Master Bedroom"
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </TabsContent>

            {/* Bathroom Content */}
            <TabsContent value="bathroom" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900">Bathroom</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Modern bathroom with premium fixtures and finishes. Features a spacious
                    shower and elegant vanity.
                  </p>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <img
                    src={img1}
                    alt="Bathroom"
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-9/12 mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gray-200 text-gray-700 w-fit px-3 py-1 mb-4">
            Modern Facilities
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built For Comfort
          </h2>

          <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {facility.title}
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-3 items-start">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;