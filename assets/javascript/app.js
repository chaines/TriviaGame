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

// To do: Create a timer

// This function will hide the start screen and show the trivia game and start the timer.
// To do: add timer start
function renderGame() {
    $('#startScreen').css('display','none');
    $('.resultScreen').css('display','none');
    $('.quizElement').css('display','inline-block');
};

function results() {
    $('.quizElement').css('display','none');
    $('.resultScreen').css('display','inline-block');
    $('#correct').text('Correct: ' + correct);
    $('#incorrect').text('Incorrect: ' + incorrect);
    $('#unanswered').text('Unanswered: ' + unanswered);
}






// Logic of the game
// This block of code is what detects the click and runs the renderGame function to start the game.
$('#begin').on("click", function(startGame){
    renderGame();
});

// To do: Make an if statement to detect Correct/Incorrect/Unanswered results when the "Submit" button is clicked.

// To do: Display the results on a different screen after submitting the quiz.
$('#submitButton').on('click', function(showResults){
    results();
});
// "Start Over" button restarts the game.
$('#restart').on('click', function(restartGame){
    renderGame();
});