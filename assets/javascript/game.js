// Random number generator 
$(document).ready(function(){
    var random = Math.floor(Math.random() * 102 + 19)
    
    // The random number
    $("#targetScore").text(random);
    
    // Get random number for each crystal
    var num1 = Math.floor(Math.random() * 12 + 1)
    var num2 = Math.floor(Math.random() * 12 + 1)
    var num3 = Math.floor(Math.random() * 12 + 1)
    var num4 = Math.floor(Math.random() * 12 + 1)
    
    // Player's score
    var yourScore = 0;
    var Wins = 0;
    var Losses = 0;

    $("#yourWinner").text(winner);
    $("#youLoser").text(losser);
  
  // Resetting
  function reset() {

        random = Math.floor(Math.random() * 102 + 19);
        console.log(Random)

        $("#targetScore").text(random);

        num1= Math.floor(Math.random() * 12 + 1);
        num2= Math.floor(Math.random() * 12 + 1);
        num3= Math.floor(Math.random() * 12 + 1);
        num4= Math.floor(Math.random() * 12 + 1);

        yourScore = 0;

        $("#targetScore").text(yourScore);

        } 

  // Displaying wins
  function yay(){
  alert("Ultimate power! You win!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  // Displaying losses
  function boo(){
  alert ("Lost In Space! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }


  // Clicking on the crystals
    $("#one").on ("click", function() {

      yourScore = yourScore + num1;
      console.log("New yourScore= " + yourScore);
      $("#numberScore").text(yourScore); 


        //Win & lose if/else
          if (yourScore == random) {
            yay();
          }
          else if (yourScore > random) {
            boo();
          }   
    });
    
    
    $("#two").on ('click', function() {

      yourScore = yourScore + num2;
      console.log("New yourScore= " + yourScore);
      $("#numberScore").text(yourScore); 

          if (yourScore == random) {
            yay();
          }
          else if ( yourScore > random) {
            boo();
          } 
    });
    
    
    $("#three").on ("click", function() {

      yourScore = yourScore + num3;
      console.log("New yourScore= " + yourScore);
      $("#numberScore").text(yourScore);
  
            if (yourScore == random) {
            yay();
          }
          else if ( yourScore > random) {
            boo();
          } 
    });
    
    
    $("#four").on ("click", function() {
      yourScore = yourScore + num4;
      console.log("New yourScore= " + yourScore);
      $("#numberScore").text(yourScore); 
        
            if (yourScore == random) {
            yay();
          }
          else if ( yourScore > random) {
            boo();
          }
    });   
  }); 
  
