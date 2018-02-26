// This is the logic for the Trivia game
// Declaring global variables
// Constant variables
var TOTAL_QUESTIONS = 5;
var TIME_LEFT = 30;
// Variables that will change
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var begin = false;

// Functions
// This function will hide the start screen and show the trivia game and start the timer.
function renderGame() {
    $('#startScreen').css('display','none');
    $('.quizElement').css('display','inline-block');
};






// Logic of the game
// This block of code is what detects the click and runs the renderGame function to start the game.
$('#begin').on("click", function(startGame){
    renderGame();
});