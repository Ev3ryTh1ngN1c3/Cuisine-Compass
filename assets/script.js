var EdmamamUrl = "https://api.edamam.com/api/recipes/v2";
var PinterestUrl ="";

var EdmamamAPIkey = "7c47c1f19353798865f2d5450e4f4c1c";
var EdmamamAPIid = "5fe7465b";

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