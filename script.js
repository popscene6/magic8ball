$(document).ready(function(){
var magic8Ball = { };
  
	magic8Ball.listOfAnswers = ["No", "Yes", " I don't think so...", "Of Course!", "Indubitably", "In your dreams."];
    
  $("#answer").hide();
    

magic8Ball.askQuestion = function(question){
 $("#answer").fadeIn(4000);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
$
          
  
var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
$("#answer").text(answer);
  
	
	console.log(question);
	console.log(answer);
};
	
var onClick = function(){
    $("#answer").hide();	
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    $("#8ball").effect("shake");
  
  setTimeout (
  function() {
     
  var question = prompt("Ask A Yes/No Question!");
	magic8Ball.askQuestion(question);}, 500);


};
	$("#questionButton").click(onClick);
	
});