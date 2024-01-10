const recipeInput = document.querySelector('.recipe-input'); // The Search Bar

//Adding the recent searches to page
function recentSearch() {

    // Reach the recentSearches div within the HTML
    var recentSearches = document.getElementById("recipes");

    //Get recent receipes from localstorage or set to empty array

    var recentRecipes = JSON.parse(localStorage.getItem('recipeSearch'));
   
    console.log(recentRecipes);
   
    // Create a card element for recent searches
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("has-background-orange");

    recentRecipes.forEach(function (recipeSearch) {

    var RecipeList = document.createElement("li");
    RecipeList.textContent = recipeSearch;
    card.appendChild(RecipeList);
      document.querySelector('recipes');
      recipes.style.backgroundColor = '';
      recipes.style.color = 'orange';
  });

  recentSearches.appendChild(card);
  }
  
  function clearRecipes() {
    window.localStorage.removeItem('recipeSearch');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearRecipes;
  
  // run function when page loads
  recentSearch();
  
  