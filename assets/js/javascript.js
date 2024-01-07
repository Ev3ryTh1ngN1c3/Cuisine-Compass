var EdmamamAPIkey = "7c47c1f19353798865f2d5450e4f4c1c"; // API key for Edmamam
var EdmamamAPIid = "5fe7465b"; // API id for Edmamam

const spoonApiKey = "497c7229c7814b50a5c35eabba55735b"; // API key for Spoonacular";

const recipeInput = document.querySelector('.recipe-input'); // The Search Bar
const searchButton = document.querySelector('.search-button'); // The Search Button


const getRecipe = () => {
    const recipeName = recipeInput.value.trim(); // Get user entered recipe and remove extra spaces
   
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
}

function saveRecipes() {
  // get value of input box
  var searchedRecipe = recipeInput.value.trim();

  // make sure value wasn't empty
  if (searchedRecipe !== '') {

    // get saved recipes from localstorage, or if not any, set to empty array
    var recipes =
      JSON.parse(window.localStorage.getItem('recipes')) || [];

    // format new recipe object for current user
    var newRecipes= {
      searchedRecipe: searchedRecipe,
    };

    // save to localstorage
    recipes.push(newRecipes);
    window.localStorage.setItem('recipes', JSON.stringify(recipes));

    // redirect to next page
    window.location.href = 'recipes.html';
  }
}

searchButton.addEventListener("click", getRecipe); //Event listener when user clicks the submit button

