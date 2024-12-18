var pageCounter = 1;
$animalContainer = $("animal-info");
var btn = $("#btn");

btn.on("click", function(){
  $.ajax({
    URL: 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json',
    method: "GET",
    success: function(result) {
      animalContainer.append(result);
    }
  });
  pageCounter++;
 if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

  // ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  // ourRequest.onload = function() {
   // if (ourRequest.status >= 200 && ourRequest.status < 400) {
     // var ourData = JSON.parse(ourRequest.responseText);
    //  renderHTML(ourData);
  //  } else {
     // console.log("We connected to the server, but it returned on error.");
  //  }

 // };

  // ourRequest.oneerror = function() {
    // console.log("connection error");
 // };

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + "is a" + data[i].species + "that likes to eat";

    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if(ii == 0) {

      } else {
        htmlString += "and" + data[i].foods.likes[ii];
      }
    }

    htmlString =+ 'and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if(ii == 0) {

      } else {
        htmlString += "and" + data[i].foods.dislikes[ii];
      }
    }
  
    htmlString += '.</p;>'
  
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

// var thePets = [
//     {
//       "name": "Meowsalot",
//     "species": "cat",
//     "favFood": "tuna"
//     },
//     {
//       "name": "Barky",
//     "species": "dog",
//     "favFood": "carrots"
//     }
//   ]
  
//   thePets[1].favFood