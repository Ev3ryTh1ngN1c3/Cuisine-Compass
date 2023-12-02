var EdmamamUrl = "https://api.edamam.com/api/recipes/v2";
// var PinterestUrl =" https://pin.it/1JyKAWz";

var EdmamamAPIkey = "7c47c1f19353798865f2d5450e4f4c1c"; // API key for Edmamam
var EdmamamAPIid = "5fe7465b"; // API id for Edmamam

//var PinterestAPIkey = "2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81";

var testQuery = "macaroni";

EdmamamUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=" + testQuery + "&app_id=" + EdmamamAPIid + "&app_key=" + EdmamamAPIkey;
fetch (EdmamamUrl, {
    method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
}).then(function(response){
   return response.json();
   
}) .then(function(data){
    console.log(data)
});

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
const recipeInput = document.querySelector('.recipe-input');
const searchButton = document.querySelector('.search-button');

const getRecipe = () => {
    const recipeName = recipeInput.value.trim(); // Get user entered recipe and remove extra spaces
    
    if (!recipeName) return;  // Return if recipeName is empty
    const EdmamamAPIUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=" + recipeName + "&app_id=" + EdmamamAPIid + "&app_key=" + EdmamamAPIkey;

    //Get entered recipe from API response
    fetch(EdmamamAPIUrl).then(res => res.json()).then(data =>{
        if(!data.length) return alert("No recipe found for " + recipeName);
        const {  } = data[0];
    }).catch(() => {
        alert("An error occurred while fetching the recipe!");
    });     
}

searchButton.addEventListener("click", getRecipe); 



