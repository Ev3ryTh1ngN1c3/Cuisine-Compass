//var EdmamamUrl = "https://api.edamam.com/api/recipes/v2";
// var PinterestUrl =" https://pin.it/1JyKAWz";
//var PinterestAPIkey = "2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81";

var EdmamamAPIkey = "6e85e34d7a8466f3304bbb34334053fe"; // API key for Edmamam
var EdmamamAPIid = "4365ecb7"; // API id for Edmamam


const recipeInput = document.querySelector('.recipe-input');
const searchButton = document.querySelector('.search-button');

 

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
}
searchButton.addEventListener("click", getRecipe); 

