var EdmamamUrl = "https://api.edamam.com/api/recipes/v2";
// var PinterestUrl =" https://pin.it/1JyKAWz";

var EdmamamAPIkey = "7c47c1f19353798865f2d5450e4f4c1c"; // API key for Edmamam
var EdmamamAPIid = "5fe7465b"; // API id for Edmamam

//var PinterestAPIkey = "2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81";

var testQuery = "macaroni";


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
        document.querySelector('ul').innerHTML=""
        data.hits.forEach(recipe => {
            const listEl=document.createElement("li")
            listEl.innerHTML=`<a href=${recipe.recipe.url}>${recipe.recipe.label}</a>`
            
            
            document.querySelector('ul').append(listEl)
        
        })
})
}
searchButton.addEventListener("click", getRecipe); 

