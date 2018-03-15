const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const searchUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search';

// API Helper methods
const processResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  throw response;
};

const handleError = (error) => {
  if (error.json) {
    error.json().then(error => {
      console.error('getAllDishes() API Error:', error.message || error)
    })
  } else {
    console.error('getAllDishes() API Error:', error.message || error)
  }
};

const createDinnerModel = fetch => ({

  getAllDishes: () => fetch(searchUrl, httpOptions)
                        .then(processResponse)
                        .catch(handleError),

  
  
});

export default createDinnerModel;