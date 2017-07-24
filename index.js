var chosen;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function randomRestaurant() {
  restaurantArray = ['Pedas-pedas', 'Holy Chow', '7/11', 'Mamakan']
  arrayLength = restaurantArray.length
  rand = getRandomInt(0, arrayLength);
  console.log(rand);

  var colorArray = ["black","blue","red","#1d23f4","orange","#123123"]
  var randomNumber = Math.floor((Math.random() * colorArray.length))

  document.getElementById('restaurant').style.color = colorArray[randomNumber] ;
  chosen = restaurantArray[rand];
  restaurant.innerHTML = chosen
}


function addRestaurantListener(){

  var myVar

  function getRandRestaurant() {
    myVar = setInterval(function() {randomRestaurant()}, 100);
  }

  startBtn = document.getElementById('start-random-button');

  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", getRandRestaurant)


  getBtn = document.getElementById('get-restaurant-button');

  // Replace 'functionName' with the name of the function that you have written
  text = document.getElementById('remark');

  getBtn.addEventListener("click",  function () {
      clearInterval(myVar)
      text.innerHTML = "Great, let's go to " + chosen + "!"

  });



}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);
