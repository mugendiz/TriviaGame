// variables
var correct = 0;
var wrong = 0;


// Click start Button
// Remove start screen
// Append Questions to the page.
// On Trivia Submit. Calculate Score.
// Remove questions from the screen.
// Append Results and Start Over button
// If button is clicked, start from step two again


$(document).ready(function(){
  console.log(ready);
});

$("#submit").empty;

// Start Button


$('#start').on('click', function() {
  for (var i = 0; i < questions.length; i++) {
    result.append("<h2>" + questions[i].question + "</h2>");
    for (var j = 0; j < questions[i].answers.length; j++) {
      result.append("<input type='radio' name= 'question- " + i + "'>" + questions[i].answers[j] + "</p>");{
			}
    }
  }
});

// Question objects appended after Start button

var questions = [{
    question: "What is the ocean between the contents of North America and Asia?",
    answers: [
      'Pacific Ocean',
      'Atlantic Ocean',
      'Mediterrian Sea',
      'Dead Sea'
    ],
    correctAnswer: 'Pacific ocean'
  },
  {
    question: "What Ocean is Zanzibar Island on?",
    answers: [
      'Pacific Ocean',
      'Indian Ocean',
      'Antarctic Ocean',
      'Mediterian Sea'
    ],
    correctAnswer: 'c'
  },
  {
    question: "The Kara Sea is North of where?",

    answers: [
      'Russia',
      'England',
      'Australia',
      'North Korea'
    ],
    correctAnswer: 'Russia'
  },
  {
    question: "How many countries surround the Gulf of Mexico?",
    answers: [
      'Five',
      'Two',
      'Three',
      'None'
    ],
    correctAnswer: 'Y'
  },
  {
    question: "What ocean boarders Antarctica?",
    answers: [
      'Southern Ocean',
      'Mid-Atlanctic Basin',
      'Pacicific Ocean',
      'Tasmanian Sea'
    ],
    correctAnswer: 'Southern Ocean'
  }

];


var result = $("#result");


console.log(questions[0].question);
console.log(questions[1].question);
console.log(questions[2].answers);


submitButton.onclick = function(){
	showResults(questions);
}






// Timer for time remaining

// setTimeout(fiftySeconds, 10000 *5);
//
// setTimeout(timeUp, 1000 * 15);
//
//
// // First Question with 4 answer options, display in innerHTML
// // User can click only one option (on.click (function)
// // Answer is stored until used to display the correct and incorrent answers, and the unanswered.
// // (with the call-back function)
//
//
//
//
// // Result is calculated
// // If user runs out of time show result or if finished, clicks the "#doneButton" to show result
