// src/pages/Occasions.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Calendar, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock data
const occasions = [
  {
    name: "Family Dinner",
    description: "Perfect recipes for family gatherings and weeknight meals",
    recipeCount: 89,
    icon: "👨‍👩‍👧‍👦",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    featuredRecipes: ["Lasagna", "Roast Chicken", "Mashed Potatoes"]
  },
  {
    name: "Date Night",
    description: "Romantic meals to impress your special someone",
    recipeCount: 45,
    icon: "💕",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    featuredRecipes: ["Steak Dinner", "Chocolate Fondue", "Wine Pairings"]
  },
  {
    name: "Quick Meal",
    description: "Delicious recipes ready in 30 minutes or less",
    recipeCount: 134,
    icon: "⚡",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    featuredRecipes: ["Stir Fry", "Pasta", "Salads"]
  },
  {
    name: "Weekend BBQ",
    description: "Grilling recipes for outdoor gatherings",
    recipeCount: 67,
    icon: "🍖",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    featuredRecipes: ["Burgers", "Ribs", "Grilled Vegetables"]
  },
  {
    name: "Healthy Eating",
    description: "Nutritious meals for a balanced lifestyle",
    recipeCount: 112,
    icon: "💚",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    featuredRecipes: ["Buddha Bowls", "Salmon", "Quinoa Salads"]
  },
  {
    name: "Holiday Feast",
    description: "Special recipes for holidays and celebrations",
    recipeCount: 78,
    icon: "🎄",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    featuredRecipes: ["Turkey", "Ham", "Pumpkin Pie"]
  },
  {
    name: "Brunch",
    description: "Perfect recipes for lazy weekend mornings",
    recipeCount: 56,
    icon: "🍳",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    featuredRecipes: ["French Toast", "Eggs Benedict", "Mimosas"]
  },
  {
    name: "Comfort Food",
    description: "Hearty meals that warm the soul",
    recipeCount: 91,
    icon: "🍲",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    featuredRecipes: ["Mac & Cheese", "Soup", "Shepherd's Pie"]
  }
];

const popularOccasionRecipes = [
  {
    id: 1,
    title: "Perfect Lasagna",
    occasion: "Family Dinner",
    rating: 4.9,
    cookTime: 90,
    likes: 234,
    chef: "Maria Rodriguez",
    description: "Classic Italian lasagna with layers of pasta, meat sauce, and cheese"
  },
  {
    id: 2,
    title: "Grilled Salmon",
    occasion: "Date Night",
    rating: 4.7,
    cookTime: 25,
    likes: 156,
    chef: "Mike Johnson",
    description: "Elegant grilled salmon with lemon butter sauce and asparagus"
  },
  {
    id: 3,
    title: "BBQ Ribs",
    occasion: "Weekend BBQ",
    rating: 4.8,
    cookTime: 180,
    likes: 189,
    chef: "Tom Anderson",
    description: "Fall-off-the-bone ribs with homemade BBQ sauce"
  }
];

const Occasions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-11/12 mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Recipes for Every Occasion</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect recipe for any event, celebration, or time of day
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full cursor-pointer group">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${occasion.bgColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {occasion.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-xl mb-2">{occasion.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {occasion.description}
                  </p>
                  
                  {/* Recipe Count */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {occasion.recipeCount} recipes
                    </Badge>
                  </div>
                  
                  {/* Featured Recipes */}
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Featured:</p>
                    <div className="flex flex-wrap gap-1">
                      {occasion.featuredRecipes.map(recipe => (
                        <Badge key={recipe} variant="outline" className="text-xs">
                          {recipe}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Popular Recipes Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Popular Occasion Recipes</h2>
            <p className="text-muted-foreground">
              Top-rated recipes perfect for special moments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {popularOccasionRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{recipe.title}</h3>
                        <Badge variant="secondary">{recipe.occasion}</Badge>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {recipe.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{recipe.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{recipe.cookTime}m</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{recipe.likes} likes</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chef and Action */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-muted-foreground">
                        by {recipe.chef}
                      </span>
                      <Link 
                        to={`/recipes/${recipe.id}`}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        View Recipe →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seasonal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Seasonal Specials</h2>
            <p className="text-muted-foreground mb-6">
              Discover recipes perfect for the current season. Fresh ingredients, 
              timely flavors, and celebration-worthy dishes for every time of year.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Badge variant="secondary" className="text-sm py-1 px-3">
                🍂 Autumn Recipes
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                🎄 Holiday Specials
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                🌸 Spring Favorites
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                ☀️ Summer Grilling
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Cook for Your Next Occasion?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Browse all our occasion-based recipes and find the perfect dish for any event.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/recipes"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Browse All Recipes
            </Link>
            <Link 
              to="/categories"
              className="border border-primary text-primary px-6 py-2 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              View Categories
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Occasions;