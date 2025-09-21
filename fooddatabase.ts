export interface FoodRecommendation {
  food: string;
  condition: string;
  recommendation: 'recommended' | 'avoid';
  explanation: string;
}

export const foodDatabase: FoodRecommendation[] = [
  // OATS - Comprehensive recommendations
  { food: 'Oats', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Whole grain with low glycemic index, helps control blood sugar' },
  { food: 'Oats', condition: 'Hypertension', recommendation: 'recommended', explanation: 'High fiber content helps lower cholesterol and blood pressure' },
  { food: 'Oats', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Provides sustained energy and essential nutrients' },
  { food: 'Oats', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Complex carbs provide steady energy without overstimulation' },
  { food: 'Oats', condition: 'Obesity', recommendation: 'recommended', explanation: 'High fiber keeps you full longer, aids weight management' },
  { food: 'Oats', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest, provides energy during recovery' },
  { food: 'Oats', condition: 'Dengue', recommendation: 'recommended', explanation: 'Soft, easy to consume, provides sustained energy' },
  { food: 'Oats', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Gentle on stomach, provides essential carbohydrates' },
  { food: 'Oats', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft texture, easy to swallow, nutritious' },
  { food: 'Oats', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Soluble fiber helps firm stool consistency' },
  { food: 'Oats', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Light on liver, provides gentle sustained energy' },

  // BROWN RICE - Comprehensive recommendations  
  { food: 'Brown Rice', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Complex carbohydrate that releases glucose slowly' },
  { food: 'Brown Rice', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Whole grain supports heart health and blood pressure control' },
  { food: 'Brown Rice', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Provides steady energy and B vitamins for metabolism' },
  { food: 'Brown Rice', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Complex carbs provide stable energy' },
  { food: 'Brown Rice', condition: 'Obesity', recommendation: 'recommended', explanation: 'High fiber promotes satiety and weight management' },
  { food: 'Brown Rice', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest, provides necessary carbohydrates' },
  { food: 'Brown Rice', condition: 'Dengue', recommendation: 'recommended', explanation: 'Gentle carbohydrate source, easy on stomach' },
  { food: 'Brown Rice', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Well-tolerated, provides energy without irritation' },
  { food: 'Brown Rice', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft when cooked, easy to consume' },
  { food: 'Brown Rice', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Helps bind stool, provides gentle carbohydrates' },
  { food: 'Brown Rice', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Light on liver, easy to digest' },

  // WHITE RICE - Comprehensive recommendations
  { food: 'White Rice', condition: 'Diabetes', recommendation: 'avoid', explanation: 'High glycemic index, causes rapid glucose elevation' },
  { food: 'White Rice', condition: 'Hypertension', recommendation: 'avoid', explanation: 'Refined grain, lacks nutrients beneficial for heart health' },
  { food: 'White Rice', condition: 'Hypothyroidism', recommendation: 'avoid', explanation: 'Refined carb, may slow metabolism further' },
  { food: 'White Rice', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Easy to digest, provides quick energy during recovery' },
  { food: 'White Rice', condition: 'Obesity', recommendation: 'avoid', explanation: 'High glycemic index promotes weight gain' },
  { food: 'White Rice', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest during illness, provides quick energy' },
  { food: 'White Rice', condition: 'Dengue', recommendation: 'recommended', explanation: 'Gentle on stomach, easy to keep down' },
  { food: 'White Rice', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Bland, soft, won\'t irritate intestines' },
  { food: 'White Rice', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft, easy to swallow with mouth sores' },
  { food: 'White Rice', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Part of BRAT diet, helps bind stool' },
  { food: 'White Rice', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Very light on liver, easy to digest' },

  // QUINOA - Comprehensive recommendations
  { food: 'Quinoa', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Complete protein with low glycemic index' },
  { food: 'Quinoa', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Rich in potassium and magnesium for blood pressure' },
  { food: 'Quinoa', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'High protein supports metabolism and thyroid function' },
  { food: 'Quinoa', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Complete protein aids in tissue repair' },
  { food: 'Quinoa', condition: 'Obesity', recommendation: 'recommended', explanation: 'High protein and fiber promote satiety' },
  { food: 'Quinoa', condition: 'Malaria', recommendation: 'recommended', explanation: 'Complete protein supports immune recovery' },
  { food: 'Quinoa', condition: 'Dengue', recommendation: 'recommended', explanation: 'High protein aids in platelet recovery' },
  { food: 'Quinoa', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Easy to digest, provides complete nutrition' },
  { food: 'Quinoa', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft when cooked, nutrient-dense' },
  { food: 'Quinoa', condition: 'Diarrhea', recommendation: 'avoid', explanation: 'High fiber content may worsen symptoms' },
  { food: 'Quinoa', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Light protein source, supports liver healing' },

  // BROCCOLI - Comprehensive recommendations
  { food: 'Broccoli', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Low carb vegetable rich in nutrients and fiber' },
  { food: 'Broccoli', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Rich in potassium and antioxidants for heart health' },
  { food: 'Broccoli', condition: 'Hypothyroidism', recommendation: 'avoid', explanation: 'Raw form contains goitrogens that interfere with thyroid' },
  { food: 'Broccoli', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Goitrogenic compounds help reduce thyroid activity' },
  { food: 'Broccoli', condition: 'Obesity', recommendation: 'recommended', explanation: 'Low calorie, high fiber vegetable for weight loss' },
  { food: 'Broccoli', condition: 'Malaria', recommendation: 'recommended', explanation: 'Rich in vitamin C, supports immune system' },
  { food: 'Broccoli', condition: 'Dengue', recommendation: 'recommended', explanation: 'High vitamin C content aids recovery' },
  { food: 'Broccoli', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Cooked form is gentle and nutritious' },
  { food: 'Broccoli', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Vitamin C boosts immune system for healing' },
  { food: 'Broccoli', condition: 'Diarrhea', recommendation: 'avoid', explanation: 'High fiber may aggravate digestive symptoms' },
  { food: 'Broccoli', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Antioxidants support liver detoxification' },

  // SPINACH - Comprehensive recommendations
  { food: 'Spinach', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Low carb leafy green rich in nutrients' },
  { food: 'Spinach', condition: 'Hypertension', recommendation: 'recommended', explanation: 'High potassium content helps lower blood pressure' },
  { food: 'Spinach', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Iron and nutrients support thyroid function' },
  { food: 'Spinach', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Nutrient-dense, supports overall health' },
  { food: 'Spinach', condition: 'Obesity', recommendation: 'recommended', explanation: 'Very low calorie, high nutrient density' },
  { food: 'Spinach', condition: 'Malaria', recommendation: 'recommended', explanation: 'Iron-rich, supports red blood cell production' },
  { food: 'Spinach', condition: 'Dengue', recommendation: 'recommended', explanation: 'Iron and vitamins support blood health' },
  { food: 'Spinach', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Soft when cooked, provides essential nutrients' },
  { food: 'Spinach', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Vitamin A and C support skin healing' },
  { food: 'Spinach', condition: 'Diarrhea', recommendation: 'avoid', explanation: 'High fiber content may worsen symptoms' },
  { food: 'Spinach', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Antioxidants and iron support liver recovery' },

  // CHICKEN - Comprehensive recommendations
  { food: 'Chicken', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Lean protein with no carbs, stable blood sugar' },
  { food: 'Chicken', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Lean protein without excess sodium' },
  { food: 'Chicken', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'High quality protein supports metabolism' },
  { food: 'Chicken', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Protein helps maintain muscle mass' },
  { food: 'Chicken', condition: 'Obesity', recommendation: 'recommended', explanation: 'Lean protein preserves muscle during weight loss' },
  { food: 'Chicken', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest protein for recovery' },
  { food: 'Chicken', condition: 'Dengue', recommendation: 'recommended', explanation: 'Protein supports immune system and recovery' },
  { food: 'Chicken', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Well-cooked chicken provides essential protein' },
  { food: 'Chicken', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft when cooked, provides healing proteins' },
  { food: 'Chicken', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Well-cooked chicken is gentle protein source' },
  { food: 'Chicken', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Lean protein easier for liver to process' },

  // FISH - Comprehensive recommendations  
  { food: 'Fish', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Omega-3 fatty acids improve insulin sensitivity' },
  { food: 'Fish', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Omega-3s help reduce blood pressure' },
  { food: 'Fish', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Iodine and selenium support thyroid function' },
  { food: 'Fish', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'High quality protein with beneficial omega-3s' },
  { food: 'Fish', condition: 'Obesity', recommendation: 'recommended', explanation: 'Lean protein with metabolism-boosting omega-3s' },
  { food: 'Fish', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest, provides essential proteins' },
  { food: 'Fish', condition: 'Dengue', recommendation: 'recommended', explanation: 'Light protein that\'s easy to keep down' },
  { food: 'Fish', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Soft, digestible protein source' },
  { food: 'Fish', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft texture, high protein for healing' },
  { food: 'Fish', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Well-cooked fish is gentle on stomach' },
  { food: 'Fish', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Light protein source, supports liver recovery' },

  // BANANAS - Comprehensive recommendations
  { food: 'Bananas', condition: 'Diabetes', recommendation: 'avoid', explanation: 'High natural sugar content can spike blood glucose' },
  { food: 'Bananas', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Very high potassium content lowers blood pressure' },
  { food: 'Bananas', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Natural energy source, supports metabolism' },
  { food: 'Bananas', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Potassium helps with heart rhythm regulation' },
  { food: 'Bananas', condition: 'Obesity', recommendation: 'avoid', explanation: 'High calorie and sugar content for weight loss' },
  { food: 'Bananas', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest, provides quick energy' },
  { food: 'Bananas', condition: 'Dengue', recommendation: 'recommended', explanation: 'Easy to consume, provides energy and potassium' },
  { food: 'Bananas', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Soft, bland, easy on irritated intestines' },
  { food: 'Bananas', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft, soothing, easy to swallow' },
  { food: 'Bananas', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Part of BRAT diet, replaces lost potassium' },
  { food: 'Bananas', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Gentle fruit, provides natural energy' },

  // ORANGES - Comprehensive recommendations
  { food: 'Oranges', condition: 'Diabetes', recommendation: 'recommended', explanation: 'High fiber helps slow sugar absorption' },
  { food: 'Oranges', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Potassium and vitamin C support heart health' },
  { food: 'Oranges', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Vitamin C supports immune system and metabolism' },
  { food: 'Oranges', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Vitamin C and antioxidants support recovery' },
  { food: 'Oranges', condition: 'Obesity', recommendation: 'recommended', explanation: 'High fiber and water content promote satiety' },
  { food: 'Oranges', condition: 'Malaria', recommendation: 'recommended', explanation: 'Vitamin C boosts immune system during illness' },
  { food: 'Oranges', condition: 'Dengue', recommendation: 'recommended', explanation: 'Vitamin C and natural hydration aid recovery' },
  { food: 'Oranges', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Vitamin C supports immune function' },
  { food: 'Oranges', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'High vitamin C accelerates healing process' },
  { food: 'Oranges', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Vitamin C and electrolytes aid recovery' },
  { food: 'Oranges', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Natural fruit juice supports liver recovery' },

  // ALMONDS - Comprehensive recommendations
  { food: 'Almonds', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Healthy fats and protein stabilize blood sugar' },
  { food: 'Almonds', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Magnesium and healthy fats support heart health' },
  { food: 'Almonds', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Healthy fats support hormone production' },
  { food: 'Almonds', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Protein and healthy fats provide sustained energy' },
  { food: 'Almonds', condition: 'Obesity', recommendation: 'recommended', explanation: 'Protein and fiber promote satiety (portion control)' },
  { food: 'Almonds', condition: 'Malaria', recommendation: 'avoid', explanation: 'May be too heavy during acute illness' },
  { food: 'Almonds', condition: 'Dengue', recommendation: 'avoid', explanation: 'Hard to digest during illness' },
  { food: 'Almonds', condition: 'Typhoid', recommendation: 'avoid', explanation: 'Too hard and difficult to digest' },
  { food: 'Almonds', condition: 'Chickenpox', recommendation: 'avoid', explanation: 'Hard texture difficult with mouth sores' },
  { food: 'Almonds', condition: 'Diarrhea', recommendation: 'avoid', explanation: 'High fiber and fat may worsen symptoms' },
  { food: 'Almonds', condition: 'Jaundice', recommendation: 'avoid', explanation: 'High fat content burdens recovering liver' },

  // EGGS - Comprehensive recommendations
  { food: 'Eggs', condition: 'Diabetes', recommendation: 'recommended', explanation: 'High protein with minimal carbs, stable blood sugar' },
  { food: 'Eggs', condition: 'Hypertension', recommendation: 'recommended', explanation: 'High quality protein, moderate in preparation' },
  { food: 'Eggs', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Rich in selenium and iodine for thyroid health' },
  { food: 'Eggs', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'High quality protein supports muscle maintenance' },
  { food: 'Eggs', condition: 'Obesity', recommendation: 'recommended', explanation: 'High protein promotes satiety and muscle preservation' },
  { food: 'Eggs', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest protein when boiled' },
  { food: 'Eggs', condition: 'Dengue', recommendation: 'recommended', explanation: 'Complete protein aids in recovery' },
  { food: 'Eggs', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Soft-boiled eggs are gentle and nutritious' },
  { food: 'Eggs', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Soft scrambled eggs easy to consume' },
  { food: 'Eggs', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Well-cooked eggs provide gentle protein' },
  { food: 'Eggs', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Light protein source, supports healing' },

  // YOGURT - Comprehensive recommendations
  { food: 'Yogurt', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Probiotics and protein help regulate blood sugar' },
  { food: 'Yogurt', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Calcium and probiotics support heart health' },
  { food: 'Yogurt', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Probiotics support gut health and metabolism' },
  { food: 'Yogurt', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Cooling, soothing, provides calcium' },
  { food: 'Yogurt', condition: 'Obesity', recommendation: 'recommended', explanation: 'High protein and probiotics aid weight management' },
  { food: 'Yogurt', condition: 'Malaria', recommendation: 'recommended', explanation: 'Easy to digest, provides beneficial bacteria' },
  { food: 'Yogurt', condition: 'Dengue', recommendation: 'recommended', explanation: 'Cooling, easy to consume, provides probiotics' },
  { food: 'Yogurt', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Probiotics help restore healthy gut bacteria' },
  { food: 'Yogurt', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Cool, soothing texture for mouth comfort' },
  { food: 'Yogurt', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Probiotics restore healthy gut microbiome' },
  { food: 'Yogurt', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Easy to digest, supports gut health' },

  // PROCESSED FOODS - Comprehensive recommendations
  { food: 'Processed Foods', condition: 'Diabetes', recommendation: 'avoid', explanation: 'High in refined sugars and unhealthy additives' },
  { food: 'Processed Foods', condition: 'Hypertension', recommendation: 'avoid', explanation: 'Extremely high sodium content raises blood pressure' },
  { food: 'Processed Foods', condition: 'Hypothyroidism', recommendation: 'avoid', explanation: 'Additives and chemicals may disrupt thyroid function' },
  { food: 'Processed Foods', condition: 'Hyperthyroidism', recommendation: 'avoid', explanation: 'Additives may worsen thyroid imbalance' },
  { food: 'Processed Foods', condition: 'Obesity', recommendation: 'avoid', explanation: 'High calories, low nutrients, promote weight gain' },
  { food: 'Processed Foods', condition: 'Malaria', recommendation: 'avoid', explanation: 'Hard to digest, lack beneficial nutrients' },
  { food: 'Processed Foods', condition: 'Dengue', recommendation: 'avoid', explanation: 'Poor nutritional value when recovery nutrients needed' },
  { food: 'Processed Foods', condition: 'Typhoid', recommendation: 'avoid', explanation: 'May irritate digestive system' },
  { food: 'Processed Foods', condition: 'Chickenpox', recommendation: 'avoid', explanation: 'Lack nutrients needed for healing' },
  { food: 'Processed Foods', condition: 'Diarrhea', recommendation: 'avoid', explanation: 'Additives and preservatives may worsen symptoms' },
  { food: 'Processed Foods', condition: 'Jaundice', recommendation: 'avoid', explanation: 'Chemicals and additives burden recovering liver' },

  // FRIED FOODS - Comprehensive recommendations
  { food: 'Fried Foods', condition: 'Diabetes', recommendation: 'avoid', explanation: 'High in unhealthy fats that worsen insulin resistance' },
  { food: 'Fried Foods', condition: 'Hypertension', recommendation: 'avoid', explanation: 'Trans fats and excess sodium harmful for blood pressure' },
  { food: 'Fried Foods', condition: 'Hypothyroidism', recommendation: 'avoid', explanation: 'High calorie foods may worsen weight gain' },
  { food: 'Fried Foods', condition: 'Hyperthyroidism', recommendation: 'avoid', explanation: 'Hard to digest, may cause digestive distress' },
  { food: 'Fried Foods', condition: 'Obesity', recommendation: 'avoid', explanation: 'Extremely high in calories and unhealthy fats' },
  { food: 'Fried Foods', condition: 'Malaria', recommendation: 'avoid', explanation: 'Very difficult to digest during illness' },
  { food: 'Fried Foods', condition: 'Dengue', recommendation: 'avoid', explanation: 'Hard to digest when body needs gentle nutrition' },
  { food: 'Fried Foods', condition: 'Typhoid', recommendation: 'avoid', explanation: 'May severely irritate inflamed intestines' },
  { food: 'Fried Foods', condition: 'Chickenpox', recommendation: 'avoid', explanation: 'Hard to digest, provides no healing benefits' },
  { food: 'Fried Foods', condition: 'Diarrhea', recommendation: 'avoid', explanation: 'High fat content will worsen digestive symptoms' },
  { food: 'Fried Foods', condition: 'Jaundice', recommendation: 'avoid', explanation: 'High fat content severely burdens recovering liver' },

  // GREEN TEA - Comprehensive recommendations  
  { food: 'Green Tea', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Antioxidants help improve insulin sensitivity' },
  { food: 'Green Tea', condition: 'Hypertension', recommendation: 'recommended', explanation: 'Antioxidants support cardiovascular health' },
  { food: 'Green Tea', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Metabolism-boosting properties (moderate caffeine)' },
  { food: 'Green Tea', condition: 'Hyperthyroidism', recommendation: 'avoid', explanation: 'Caffeine may worsen heart palpitations' },
  { food: 'Green Tea', condition: 'Obesity', recommendation: 'recommended', explanation: 'Boosts metabolism and aids fat burning' },
  { food: 'Green Tea', condition: 'Malaria', recommendation: 'recommended', explanation: 'Antioxidants support immune system recovery' },
  { food: 'Green Tea', condition: 'Dengue', recommendation: 'recommended', explanation: 'Gentle hydration with beneficial antioxidants' },
  { food: 'Green Tea', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Gentle beverage with antimicrobial properties' },
  { food: 'Green Tea', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Antioxidants support immune system and healing' },
  { food: 'Green Tea', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Gentle astringent properties may help firm stool' },
  { food: 'Green Tea', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Antioxidants support liver detoxification' },

  // COCONUT WATER - Comprehensive recommendations
  { food: 'Coconut Water', condition: 'Diabetes', recommendation: 'recommended', explanation: 'Natural electrolytes without refined sugars' },
  { food: 'Coconut Water', condition: 'Hypertension', recommendation: 'recommended', explanation: 'High potassium content helps lower blood pressure' },
  { food: 'Coconut Water', condition: 'Hypothyroidism', recommendation: 'recommended', explanation: 'Natural hydration supports metabolism' },
  { food: 'Coconut Water', condition: 'Hyperthyroidism', recommendation: 'recommended', explanation: 'Electrolytes help with hydration and heart rhythm' },
  { food: 'Coconut Water', condition: 'Obesity', recommendation: 'recommended', explanation: 'Low calorie natural beverage for hydration' },
  { food: 'Coconut Water', condition: 'Malaria', recommendation: 'recommended', explanation: 'Critical for maintaining hydration and electrolytes' },
  { food: 'Coconut Water', condition: 'Dengue', recommendation: 'recommended', explanation: 'Essential for preventing dehydration' },
  { food: 'Coconut Water', condition: 'Typhoid', recommendation: 'recommended', explanation: 'Gentle hydration with natural electrolytes' },
  { food: 'Coconut Water', condition: 'Chickenpox', recommendation: 'recommended', explanation: 'Easy to swallow, maintains hydration' },
  { food: 'Coconut Water', condition: 'Diarrhea', recommendation: 'recommended', explanation: 'Replaces lost electrolytes and fluids' },
  { food: 'Coconut Water', condition: 'Jaundice', recommendation: 'recommended', explanation: 'Natural hydration without stressing liver' },
];

export const healthConditions = [
  'Diabetes', 
  'Hypertension', 
  'Hypothyroidism', 
  'Hyperthyroidism', 
  'Obesity', 
  'Malaria', 
  'Dengue', 
  'Typhoid', 
  'Chickenpox', 
  'Diarrhea', 
  'Jaundice'
];

export const getFoodRecommendation = (food: string, condition: string): FoodRecommendation | null => {
  const normalizedFood = food.toLowerCase().trim();
  const normalizedCondition = condition.toLowerCase().trim();
  
  return foodDatabase.find(item => 
    item.food.toLowerCase() === normalizedFood && 
    item.condition.toLowerCase() === normalizedCondition
  ) || null;
};

export const getAllFoodsForCondition = (condition: string): string[] => {
  return foodDatabase
    .filter(item => item.condition.toLowerCase() === condition.toLowerCase())
    .map(item => item.food);
};

export const getAllFoods = (): string[] => {
  return [...new Set(foodDatabase.map(item => item.food))].sort();
};