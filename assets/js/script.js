//var EdmamamUrl = "https://api.edamam.com/api/recipes/v2";
// var PinterestUrl =" https://pin.it/1JyKAWz";
//var PinterestAPIkey = "2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81";

//var EdmamamAPIkey = "6e85e34d7a8466f3304bbb34334053fe"; // API key for Edmamam
//var EdmamamAPIid = "4365ecb7"; // API id for Edmamam

spoonacularAPIkey = "497c7229c7814b50a5c35eabba55735b";

const recipeInput = document.querySelector('.recipe-input');
const searchButton = document.querySelector('.search-button');

let query = "";
let page = 1;

keyword = recipeInput.value;




function getRecipe (){

//EdmamamUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=" + EdmamamAPIkey + EdmamamAPIid + keyword + page;
spoonacularUrl = "https://api.spoonacular.com/recipes/complexSearch?query" + spoonacularAPIkey + page;

fetch (spoonacularUrl, {
    
    method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
   
}) .then(function(data){
    const results = data.results;


    const image = document.createElement("img");
    image.src = results.image;
    const ingredients = document.createElement("ingredients");
    ingredients = results.Includeingredients;
    ingredients.target = "_blank";

    ingredients.appendChild(image);
    searchButton.appendChild(Includeingredients);

});
}
//var PinterestUrl = 'https://pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com/api/data?url=https%3A%2F%2Fpin.it%2F5TZnIsk';
// var PinterestOptions = {
	 //method: 'GET',
	// headers: {
		// 'X-RapidAPI-Key': '2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81',
		// 'X-RapidAPI-Host': 'pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com'
	//}
//};
//	fetch(PinterestUrl, PinterestOptions)
  //  .then(function(response){
    // return response.json();

//    }).then(function(data){
       // console.log(data)
  //  });


// var KeyWordsUrl = 'https://pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com/api/basesearch?query=messi';
// var KeyWordOptions = {
	//method: 'GET',
	//headers: {
	//	'X-RapidAPI-Key': '2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81',
	//	'X-RapidAPI-Host': 'pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com'
	//}
//};

	//fetch(KeyWordsUrl, KeyWordOptions)
    //.then(function(response){
    //return response.json();
    
//  }).then(function(data){
     //   console.log(data)
   // });

 

//async function getRecipe (){
//keyword = recipeInput.value;

    //const EdmamamAPIUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=" + keyword + "&app_id=" + EdmamamAPIid + "&app_key=" + EdmamamAPIkey + page;

    // const response = await fetch(EdmamamAPIUrl);
     //const data = await response.json

     //const results = data.results;


    //const image = document.createElement("img");
    //image.src = results.image;
    //const ingredients = document.createElement("ingredients");
    //ingredients = results.Includeingredients;
    //ingredients.target = "_blank";

    //ingredients.appendChild(image);
    //searchButton.appendChild(Includeingredients);

//}

//var results = [
  //  {
       // titleMatch: "",
        //maxReadyTime: 20 
//}
//]
//for (let i = 0; i < results.length; i++) {
  //  var card = `
   // <div class="card">
     // <div class="card-body">
       // <p id="label"></p>
        //<p id="image"></p>
        //<p>label:<span id="flabel1">${results[0]}</span></p>
        //<p>image:<span id="fimage1">${results[1]}</span></p>
        //<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      //</div>
    //</div>`

    //var newDiv = $("<div>");
    //newDiv.html(card);
    //card.append(newDiv);
//}

//Click Handlers
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1;
    getRecipe();
})
