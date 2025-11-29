// src/pages/Recipes.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Users, Star, Heart, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data
const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    description: "A delicious and creamy pasta dish with fresh herbs and parmesan cheese",
    image: "/api/placeholder/400/300",
    chef: "Maria Rodriguez",
    chefId: 1,
    rating: 4.8,
    cookTime: 25,
    likes: 124,
    category: "Dinner",
    occasion: "Family Dinner",
    difficulty: "Easy",
    ingredients: 8
  },
  {
    id: 2,
    title: "Avocado Toast Breakfast",
    description: "Healthy and delicious avocado toast with poached eggs and cherry tomatoes",
    image: "/api/placeholder/400/300",
    chef: "James Wilson",
    chefId: 2,
    rating: 4.6,
    cookTime: 15,
    likes: 89,
    category: "Breakfast",
    occasion: "Quick Meal",
    difficulty: "Easy",
    ingredients: 6
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with molten center, perfect for special occasions",
    image: "/api/placeholder/400/300",
    chef: "Sarah Chen",
    chefId: 3,
    rating: 4.9,
    cookTime: 35,
    likes: 203,
    category: "Dessert",
    occasion: "Date Night",
    difficulty: "Medium",
    ingredients: 10
  },
  {
    id: 4,
    title: "Grilled Salmon",
    description: "Perfectly grilled salmon with lemon butter sauce and fresh dill",
    image: "/api/placeholder/400/300",
    chef: "Mike Johnson",
    chefId: 4,
    rating: 4.7,
    cookTime: 20,
    likes: 156,
    category: "Lunch",
    occasion: "Healthy Eating",
    difficulty: "Medium",
    ingredients: 7
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    description: "Colorful vegetable stir fry with tofu and teriyaki sauce",
    image: "/api/placeholder/400/300",
    chef: "Lisa Wang",
    chefId: 5,
    rating: 4.5,
    cookTime: 15,
    likes: 78,
    category: "Dinner",
    occasion: "Quick Meal",
    difficulty: "Easy",
    ingredients: 12
  },
  {
    id: 6,
    title: "Classic Beef Burger",
    description: "Juicy beef burger with all the classic toppings and secret sauce",
    image: "/api/placeholder/400/300",
    chef: "Tom Anderson",
    chefId: 6,
    rating: 4.4,
    cookTime: 30,
    likes: 167,
    category: "Lunch",
    occasion: "Weekend BBQ",
    difficulty: "Medium",
    ingredients: 9
  }
];

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Vegetarian"];
const occasions = ["All", "Family Dinner", "Date Night", "Quick Meal", "Weekend BBQ", "Healthy Eating"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const filteredRecipes = recipes
    .filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.chef.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchesOccasion = selectedOccasion === 'All' || recipe.occasion === selectedOccasion;
      const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesOccasion && matchesDifficulty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'cookTime':
          return a.cookTime - b.cookTime;
        case 'likes':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-11/12 mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Discover Recipes</h1>
          <p className="text-muted-foreground text-lg">
            Explore {recipes.length}+ amazing recipes from talented chefs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder="Search recipes, chefs, or ingredients..."
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
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Occasion" />
              </SelectTrigger>
              <SelectContent>
                {occasions.map(occasion => (
                  <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="cookTime">Quickest</SelectItem>
                <SelectItem value="likes">Most Liked</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredRecipes.length} of {recipes.length} recipes
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {recipe.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg leading-tight">{recipe.title}</h3>
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 flex-1">
                    {recipe.description}
                  </p>

                  <div className="space-y-2 mb-3">
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">{recipe.category}</Badge>
                      <Badge variant="outline">{recipe.occasion}</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.cookTime}m</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{recipe.ingredients} ingredients</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{recipe.rating}</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-sm">
                        by <Link to={`/chefs/${recipe.chefId}`} className="hover:text-primary font-medium">{recipe.chef}</Link>
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">{recipe.likes} likes</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find more recipes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;