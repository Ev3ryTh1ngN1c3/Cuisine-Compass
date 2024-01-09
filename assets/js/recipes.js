const recipeInput = document.querySelector('.recipe-input'); // The Search Bar
//adding the recent searches to page
function recentSearch() {

    // Reach the recentSearches div within the HTML
    var recentSearches = document.getElementById("recentSearchList");


    // either get receipes from localstorage or set to empty array
    var recentRecipes = localStorage.getItem('recipeSearch') || [];
    // localStorage.setItem('recipeSearch', recipeSearch);

    // Clear the recentSearches div before adding new elements
    // recentSearches.innerHTML = "";

    // Create a card element for recent searches
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("has-background-orange-light");

    // Create a card title for recent searches
    var cardTitle = document.createElement("p");
    cardTitle.classList.add("title");
    cardTitle.textContent = "Your Recent Recipe Searches";
    card.appendChild(cardTitle);

  //   recipeSearch.forEach(function (recipeSearch) {

  //   var RecipeList = document.createElement("li");
  //   RecipeList.textContent = receipeSearched;
  //   card.appendChild(RecipeList);

  // });

  // recentSearches.appendChild(card);
  }
  
  function clearRecipes() {
    window.localStorage.removeItem('recipeSearch');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearRecipes;
  
  // run function when page loads
  recentSearch();
  
  