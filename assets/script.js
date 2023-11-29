var EdmamamUrl = "https://api.edamam.com/api/recipes/v2";
//var PinterestUrl =" https://pin.it/1JyKAWz";

var EdmamamAPIkey = "7c47c1f19353798865f2d5450e4f4c1c";
var EdmamamAPIid = "5fe7465b";

var PinterestAPIkey = "2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81";

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

var PinterestUrl = 'https://pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com/api/data?url=https%3A%2F%2Fpin.it%2F5TZnIsk';
var PinterestOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81',
		'X-RapidAPI-Host': 'pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com'
	}
};
	fetch(PinterestUrl, PinterestOptions)
    .then(function(response){
    return response.json();

    }).then(function(data){
        console.log(data)
    });


var KeyWordsUrl = 'https://pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com/api/basesearch?query=messi';
var KeyWordOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bea213985msh50cb50abbd7c5aep110f09jsn698b428cce81',
		'X-RapidAPI-Host': 'pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com'
	}
};

	fetch(KeyWordsUrl, KeyWordOptions)
    .then(function(response){
    return response.json();
    
    }).then(function(data){
        console.log(data)
    });