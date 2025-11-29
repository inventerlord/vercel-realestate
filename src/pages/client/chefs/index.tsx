// src/pages/Chefs.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, ChefHat, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data
const chefs = [
  {
    id: 1,
    name: "Maria Rodriguez",
    specialty: "Mexican Cuisine",
    bio: "Passionate about traditional Mexican flavors with a modern twist. 10+ years of experience.",
    recipes: 24,
    rating: 4.8,
    followers: 1250,
    avatar: "/api/placeholder/100/100",
    coverImage: "/api/placeholder/800/200",
    joined: "2022",
    categories: ["Dinner", "Lunch", "Vegetarian"]
  },
  {
    id: 2,
    name: "James Wilson",
    specialty: "Italian Cuisine",
    bio: "Master of Italian cooking techniques. Trained in Florence and Rome.",
    recipes: 18,
    rating: 4.7,
    followers: 890,
    avatar: "/api/placeholder/100/100",
    coverImage: "/api/placeholder/800/200",
    joined: "2023",
    categories: ["Dinner", "Pasta", "Dessert"]
  },
  {
    id: 3,
    name: "Sarah Chen",
    specialty: "Asian Fusion",
    bio: "Bringing together the best of Asian flavors with innovative techniques.",
    recipes: 32,
    rating: 4.9,
    followers: 2100,
    avatar: "/api/placeholder/100/100",
    coverImage: "/api/placeholder/800/200",
    joined: "2021",
    categories: ["Dinner", "Lunch", "Quick Meal"]
  },
  {
    id: 4,
    name: "Mike Johnson",
    specialty: "Seafood Specialist",
    bio: "Fresh seafood recipes from coastal traditions around the world.",
    recipes: 15,
    rating: 4.6,
    followers: 670,
    avatar: "/api/placeholder/100/100",
    coverImage: "/api/placeholder/800/200",
    joined: "2023",
    categories: ["Lunch", "Dinner", "Healthy Eating"]
  },
  {
    id: 5,
    name: "Lisa Wang",
    specialty: "Vegetarian & Vegan",
    bio: "Creating delicious plant-based meals that everyone will love.",
    recipes: 28,
    rating: 4.8,
    followers: 1560,
    avatar: "/api/placeholder/100/100",
    coverImage: "/api/placeholder/800/200",
    joined: "2022",
    categories: ["Vegetarian", "Vegan", "Healthy Eating"]
  },
  {
    id: 6,
    name: "Tom Anderson",
    specialty: "BBQ & Grilling",
    bio: "Smoking and grilling expert with award-winning barbecue recipes.",
    recipes: 21,
    rating: 4.5,
    followers: 980,
    avatar: "/api/placeholder/100/100",
    coverImage: "/api/placeholder/800/200",
    joined: "2023",
    categories: ["Dinner", "BBQ", "Weekend"]
  }
];

const specialties = ["All", "Mexican Cuisine", "Italian Cuisine", "Asian Fusion", "Seafood", "Vegetarian", "BBQ"];

const Chefs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const filteredChefs = chefs
    .filter(chef => {
      const matchesSearch = chef.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          chef.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          chef.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === 'All' || chef.specialty === selectedSpecialty;
      
      return matchesSearch && matchesSpecialty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'recipes':
          return b.recipes - a.recipes;
        case 'followers':
          return b.followers - a.followers;
        case 'newest':
          return new Date(b.joined).getTime() - new Date(a.joined).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-11/12 mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Meet Our Chefs</h1>
          <p className="text-muted-foreground text-lg">
            Discover talented chefs and their amazing recipes
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder="Search chefs by name or specialty..."
              className="pl-12 pr-4 py-3 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map(specialty => (
                  <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="recipes">Most Recipes</SelectItem>
                <SelectItem value="followers">Most Followers</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredChefs.length} of {chefs.length} chefs
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Cover Image */}
                <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 relative">
                  <img 
                    src={chef.coverImage} 
                    alt={`${chef.name}'s cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Avatar and Basic Info */}
                  <div className="flex flex-col items-center text-center mb-4 -mt-12">
                    <div className="w-20 h-20 rounded-full border-4 border-background bg-background overflow-hidden mb-3">
                      <img 
                        src={chef.avatar} 
                        alt={chef.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-1">{chef.name}</h3>
                    <p className="text-primary font-medium mb-2">{chef.specialty}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{chef.rating}</span>
                      <span className="text-muted-foreground text-sm">({chef.recipes} recipes)</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground text-center mb-4 flex-1">
                    {chef.bio}
                  </p>

                  {/* Categories */}
                  <div className="flex gap-2 justify-center flex-wrap mb-4">
                    {chef.categories.slice(0, 3).map(category => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-around text-center border-t pt-4 mb-4">
                    <div>
                      <div className="flex items-center gap-1 justify-center">
                        <ChefHat className="h-4 w-4" />
                        <span className="font-semibold">{chef.recipes}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Recipes</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 justify-center">
                        <Users className="h-4 w-4" />
                        <span className="font-semibold">{(chef.followers / 1000).toFixed(1)}k</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 justify-center">
                        <Heart className="h-4 w-4" />
                        <span className="font-semibold">{chef.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/chefs/${chef.id}`}>View Profile</Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredChefs.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No chefs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find more chefs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chefs;