

// The game restarts whenever the player wins or loses.
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//The app should show the number of games the player wins and loses. 
//To that end, do not refresh the page as a means to restart the game.
   
var counter //player's score counter.
var targetNumber 
var win=0;
var lost=0;

function reset(){
  targetNumber = Math.floor(Math.random()*101)+19;// player will guess a random number between 19-120 
  counter=0
  $("#number-to-guess").text(targetNumber);
$("#crystals").empty()
  // create a for loop to create 4 crystals.
  for (var i = 0; i <4; i++) {
    var random = Math.floor(Math.random()*12)+1 ;//random hidden value between 1 - 12.
    console.log(random);
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "file:///Users/raianazaman/temp/unit-4-game/assets/images/crystal-icon-png-25.jpg.png");
    imageCrystal.attr({"data-crystalvalue": random});
   
   
    imageCrystal.html(random);

    $("#crystals").append(imageCrystal);
  }
}
reset();
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(document).on("click",".crystal-image", 
  
  function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);//convert string to number
    counter += crystalValue;

  
    alert("New score: " + counter);
    
// The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.
    
if (counter === targetNumber) {
      alert("You win!");
      win++;
      $("#win").html("Win: " + win);
      reset();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      lost++;
      $("#lost").html("Lost: " + lost);
      reset();
    }

  });

