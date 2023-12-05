//Urls for Edamam APIs
var EdmamamUrl = "https://api.edamam.com/api/recipes/v2";

var EdmamamAPIkey = "7c47c1f19353798865f2d5450e4f4c1c"; // API key for Edmamam
var EdmamamAPIid = "5fe7465b"; // API id for Edmamam

const spoonApiKey = "497c7229c7814b50a5c35eabba55735b"; // API key for Spoonacular";

const recipeInput = document.querySelector('.recipe-input');
const searchButton = document.querySelector('.search-button');

const getRecipe = () => {
    const recipeName = recipeInput.value.trim(); // Get user entered recipe and remove extra spaces
    
    if (!recipeName) return;  // Return if recipeName is empty
    const EdmamamAPIUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=" + recipeName + "&app_id=" + EdmamamAPIid + "&app_key=" + EdmamamAPIkey;
    
    //Get entered recipe from API response
    fetch(EdmamamAPIUrl)
    
    .then(function(response){
        return response.json();
        
     }) 
     .then(data=> { 
        
        console.log(data)
        data.hits.forEach(recipe => {
            const markup = `<li><a href=${recipe.recipe.url}>${recipe.recipe.label}</a></li>`;
            
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
        
        })
})
 
return fetch(
  // URL for Spoonacular API
  "https://api.spoonacular.com/recipes/complexSearch?query=" + recipeName + "&apiKey=" + spoonApiKey,
  {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
  }
)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    console.log(data.results[0]);
    

  });

}
  searchButton.addEventListener("click", getRecipe); 