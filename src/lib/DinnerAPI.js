const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

// API Helper methods
const baseRecipesUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';
const createSearchUrl = (type, filter) => {
  
  const queryParams = [`instructionsRequired=true`];
  
  if (type !== undefined && type !== 'all') {
    queryParams.push(`type=${encodeURIComponent(type)}`);
  }
  
  if (filter !== undefined && filter !== '') {
    queryParams.push(`query=${encodeURIComponent(filter)}`);
  }
  queryParams.push(`number=9`)
  
  return `${baseRecipesUrl}/search?${queryParams.join('&')}`
};
const createDishUrl = (id) => {

  const queryParams = [`includeNutrition=true`];
  return `${baseRecipesUrl}/${id}/information?${queryParams.join('&')}`
};

const processResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  throw response;
};

const getResults = (response) => response.results; 

const handleError = (error) => {
  if (error.json) {
    error.json().then(error => {
      console.error('Dinner API Error:', error.message || error);
    });
  } else {
    console.error('Dinner API Error:', error.message || error);
  }
};

const createDishObject = dish => ({
  id: dish.id,
  name: dish.title,
  image: `https://spoonacular.com/recipeImages/${dish.image}`
});

const createDishDetailObject = dish => ({
  id: dish.id,
  name: dish.title,
  image: dish.image,
  price: dish.pricePerServing,
  ingredients: dish.extendedIngredients.map(ingredient => ({
    name: ingredient.name,
    amount: ingredient.amount,
    unit: ingredient.unit,
  })),
  preparation: dish.instructions,
});

const createDinnerAPI = fetch => ({

  fetchAllDishes: (type, filter) => fetch(createSearchUrl(type, filter), httpOptions)
                        .then(processResponse)
                        .then(getResults)
                        .then(results => results.map(createDishObject)),

  fetchDish: (id) => fetch(createDishUrl(id), httpOptions)
                  .then(processResponse)
                  .then(createDishDetailObject)
  
  
});

export default createDinnerAPI;