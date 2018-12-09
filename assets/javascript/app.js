
$(document).ready(function () {

 var topics = ["Bird","Elephant","Chameleon"];


 function displayGifs(){

 
   console.log("click")
  var animal = $(this).attr("data-name");
  console.log(animal);
  var api_key= "7mU1zc5sZ2ekXXjWNvmUnRjTEoxRJjjZ"
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=" + api_key + "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      var results = response.data;
      console.log(response);
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animalImg = $("<img>");
        animalImg.attr("src", results[i].images.fixed_height_still.url);
        animalImg.attr("data-still", results[i].images.original_still.url);
        animalImg.attr("data-animate", results[i].images.original.url);
        animalImg.attr("data-state", "still");
        animalImg.attr("class", "gif");

        gifDiv.prepend(p);
        gifDiv.prepend(animalImg);

        $(".gifcontainer").prepend(gifDiv);
      }
    });
 }

 function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#button-container").empty();
    
    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("btn btn-primary Gif-btn");
      a.attr("type", "button");
      a.attr("id", "GIF-btn");
      // Adding a data-attribute
      a.attr("data-name", topics[i]);
      // Providing the initial button text
      a.text(topics[i]);
      // Adding the button to the buttons-view div
      $(".button-container").append(a);
    } 
}

$("#add-animal").on("click", function(event) {
  console.log(event);
  event.preventDefault();
  // This line grabs the input from the textbox
  var topic = $(".useranimal").val().trim();
  if(topic === ""){
    
  }
  else{
    topics.push(topic);
  }
  console.log(topic);
  // Adding movie from the textbox to our array
  //topics.push(topic);
  console.log(topics);
  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

function gifAnimateStill(){
  // $(".gif").on("click", function(event) {
    event.preventDefault();
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      console.log(state);
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    // });
}

  renderButtons();
  $(document).on("click", "#GIF-btn", displayGifs);
  $(document).on("click", ".gif", gifAnimateStill);
  
});





