var EdmamamAPIkey = "7c47c1f19353798865f2d5450e4f4c1c"; // API key for Edmamam
var EdmamamAPIid = "5fe7465b"; // API id for Edmamam

const spoonApiKey = "497c7229c7814b50a5c35eabba55735b"; // API key for Spoonacular";

const recipeInput = document.querySelector('.recipe-input'); // The Search Bar
const searchButton = document.querySelector('.search-button'); // The Search Button

// var recipeSearch = []; //Declare a variable to store the searched recipe

const getRecipe = () => {

const recipeName = recipeInput.value.trim(); // Get user entered recipe and remove extra spaces
   
  //Function is pushing information into an array, info is also saved regardless of refresh
  function saveRecipe() {

    //When the user hits submit, their search is saved to local storage
    var searchHistory = JSON.parse(localStorage.getItem("recipeName")) || [];
        
    searchHistory.push(recipeName);
    //Displaying the most recent five items if the array goes above 5 items 
    if (searchHistory.length > 5) {
      searchHistory = searchHistory.slice(-5);
    }

  }
    localStorage.setItem("recipeName", recipeName);  // Storing Recipes Input in Local Storage
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
      show(data);

    });
  // Displaying Spoonacular's Data on the Page
  function show(data) {
    let tab =
      `<tr>
          <th>Recipe Image</th>
          <th>Recipe Title</th>
         </tr>`;

    // Loop to access all rows 
    // create an image tag with a link <~ (Lisa comment)
    for (let r of data.results) {
      tab += `<tr> 
    <td><a href=${r.image}><img src=${r.image} alt=${r.title} style="width: 50%; height: auto;"><a></td>
    <td>${r.title}</td>         
    </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("recipes").innerHTML = tab;
  }   
 saveRecipe();
}


// //function is pushing information into an array, info is also saved regardless of refresh
// function saveRecipe(recipeSearched) {
//   var searchHistory = localStorage.getItem("recentRecipes") || [];

//   searchHistory.push(recipeSearched);
//   //this will pull the most recent five items if the array goes above five items
//   if (searchHistory.length > 5) {
//     searchHistory = searchHistory.slice(-5);
//   }

//   localStorage.setItem("recentRecipes", JSON.stringify(searchHistory));
// }

searchButton.addEventListener("click", getRecipe); //Event listener when user clicks the submit button

