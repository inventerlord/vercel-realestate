// src/pages/Categories.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data
const categories = [
  {
    name: "Breakfast",
    description: "Start your day right with delicious breakfast recipes",
    recipeCount: 156,
    popularRecipes: ["Pancakes", "Avocado Toast", "Smoothie Bowls"],
    icon: "🌅",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    name: "Lunch",
    description: "Quick and satisfying meals for the middle of the day",
    recipeCount: 234,
    popularRecipes: ["Salads", "Sandwiches", "Wraps"],
    icon: "🌞",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    name: "Dinner",
    description: "Hearty meals to end your day on a high note",
    recipeCount: 189,
    popularRecipes: ["Pasta", "Steak", "Stir Fry"],
    icon: "🌙",
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    name: "Dessert",
    description: "Sweet treats and indulgent creations",
    recipeCount: 98,
    popularRecipes: ["Cakes", "Cookies", "Ice Cream"],
    icon: "🍰",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  },
  {
    name: "Vegetarian",
    description: "Plant-based recipes full of flavor",
    recipeCount: 167,
    popularRecipes: ["Buddha Bowls", "Vegetable Curry", "Lentil Soup"],
    icon: "🥦",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    name: "Quick & Easy",
    description: "Recipes ready in 30 minutes or less",
    recipeCount: 145,
    popularRecipes: ["Stir Fry", "Sheet Pan", "One Pot"],
    icon: "⚡",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
  },
  {
    name: "Healthy",
    description: "Nutritious meals for a balanced lifestyle",
    recipeCount: 178,
    popularRecipes: ["Salads", "Grilled Fish", "Quinoa Bowls"],
    icon: "💚",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20"
  },
  {
    name: "Comfort Food",
    description: "Classic dishes that warm the soul",
    recipeCount: 112,
    popularRecipes: ["Mac & Cheese", "Mashed Potatoes", "Chicken Soup"],
    icon: "🍲",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20"
  }
];

const featuredRecipes = [
  {
    id: 1,
    title: "Blueberry Pancakes",
    category: "Breakfast",
    rating: 4.8,
    cookTime: 20,
    likes: 89,
    chef: "Maria Rodriguez"
  },
  {
    id: 2,
    title: "Caesar Salad",
    category: "Lunch",
    rating: 4.5,
    cookTime: 15,
    likes: 67,
    chef: "James Wilson"
  },
  {
    id: 3,
    title: "Chocolate Cake",
    category: "Dessert",
    rating: 4.9,
    cookTime: 45,
    likes: 124,
    chef: "Sarah Chen"
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-11/12 mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Recipe Categories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse recipes by category to find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full cursor-pointer group">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  
                  {/* Recipe Count */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {category.recipeCount} recipes
                    </Badge>
                  </div>
                  
                  {/* Popular Recipes */}
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Popular:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.popularRecipes.map(recipe => (
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

        {/* Featured Recipes */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-muted-foreground">
              Discover some of our most popular recipes across all categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{recipe.title}</h3>
                      <Badge variant="secondary">{recipe.category}</Badge>
                    </div>
                    
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
                    
                    <div className="flex items-center justify-between">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-primary/5 rounded-2xl p-8"
        >
          <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Browse all recipes or use our advanced search to find exactly what you need.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/recipes"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Browse All Recipes
            </Link>
            <Link 
              to="/chefs"
              className="border border-primary text-primary px-6 py-2 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Meet Our Chefs
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;