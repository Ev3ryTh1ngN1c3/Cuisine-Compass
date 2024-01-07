function printRecipes() {
    // either get scores from localstorage or set to empty array
    var recipes = JSON.parse(window.localStorage.getItem('recipes')) || [];
  

      for (var i = 0; i < recipes.length; i += 1) {
      // create li tag for each high score
      var liTag = document.createElement('li');
      liTag.textContent = recipes[i];
  
      // display on page
      var olEl = document.getElementById('recipes');
      olEl.appendChild(liTag);
      console.log(olEl);
    }
  }
  
  function clearRecipes() {
    window.localStorage.removeItem('recipes');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearRecipes;
  
  // run function when page loads
  printRecipes();
  
  