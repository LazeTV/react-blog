export interface BlogPost {
  _id?: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    _id: "4",
    title: "Strength Training Fundamentals: A Complete Guide",
    excerpt: "Learn the essential principles of strength training, from proper form to progressive overload, and build a solid foundation for your fitness journey.",
    content: `# Strength Training Fundamentals: A Complete Guide

Strength training is the foundation of physical fitness and athletic performance. Whether you're a beginner or an experienced athlete, understanding these fundamental principles will help you achieve your goals safely and effectively.

## The Core Principles

### 1. Progressive Overload
The cornerstone of strength training is progressive overload - gradually increasing the demands on your body to force adaptation. This can be achieved through:
- Increasing weight
- Adding repetitions
- Reducing rest periods
- Improving exercise form

### 2. Proper Form
Maintaining correct form is crucial for:
- Preventing injuries
- Maximizing muscle engagement
- Ensuring balanced development
- Building proper movement patterns

### 3. Recovery and Rest
Recovery is where the magic happens. Your body needs time to:
- Repair muscle tissue
- Replenish energy stores
- Adapt to training stress
- Prevent overtraining

## Essential Exercises

### Compound Movements
1. Squats
   - Targets: Quadriceps, hamstrings, glutes, core
   - Benefits: Full-body strength, mobility, stability

2. Deadlifts
   - Targets: Posterior chain, core, grip
   - Benefits: Total body strength, posture improvement

3. Bench Press
   - Targets: Chest, shoulders, triceps
   - Benefits: Upper body pushing strength

### Accessory Exercises
1. Pull-ups
   - Targets: Back, biceps, core
   - Benefits: Upper body pulling strength

2. Overhead Press
   - Targets: Shoulders, triceps, core
   - Benefits: Vertical pushing strength

## Training Programs

### Beginner Program
- Frequency: 3 days per week
- Focus: Full-body workouts
- Volume: 3-4 exercises per session
- Rest: 2-3 minutes between sets

### Intermediate Program
- Frequency: 4 days per week
- Focus: Upper/lower split
- Volume: 4-6 exercises per session
- Rest: 1-2 minutes between sets

## Nutrition and Recovery

### Key Nutrients
1. Protein
   - 1.6-2.2g per kg of bodyweight
   - Sources: Lean meats, fish, eggs, dairy

2. Carbohydrates
   - 3-5g per kg of bodyweight
   - Sources: Whole grains, fruits, vegetables

3. Healthy Fats
   - 0.5-1g per kg of bodyweight
   - Sources: Nuts, avocados, olive oil

### Recovery Strategies
1. Sleep
   - 7-9 hours per night
   - Consistent sleep schedule

2. Hydration
   - 3-4 liters of water daily
   - More during intense training

3. Active Recovery
   - Light cardio
   - Stretching
   - Mobility work

## Common Mistakes to Avoid

1. Skipping Warm-ups
   - Always prepare your body
   - Include dynamic stretching
   - Start with light weights

2. Poor Form
   - Focus on technique
   - Use appropriate weights
   - Consider professional guidance

3. Overtraining
   - Listen to your body
   - Take rest days
   - Monitor recovery

## Progress Tracking

### What to Track
1. Workout Log
   - Exercises
   - Sets and reps
   - Weight used
   - Rest periods

2. Body Measurements
   - Weight
   - Body composition
   - Strength gains

3. Performance Metrics
   - Personal records
   - Workout duration
   - Recovery time

## Conclusion

Strength training is a journey that requires patience, consistency, and proper guidance. By following these fundamental principles and maintaining a balanced approach to training, nutrition, and recovery, you'll build a strong foundation for long-term success in your fitness journey.

Remember: The best program is the one you'll stick to consistently. Start where you are, focus on proper form, and progress gradually. Your future self will thank you for building a solid foundation today.`,
    date: "March 20, 2024",
    author: "John Doe",
    category: "Fitness",
    readTime: "15 min read",
    tags: ["Strength Training", "Fitness", "Workout", "Nutrition", "Recovery"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  }
]; 