var questionList = [
    {
        q : "1. In Pokemon Yellow, what does Pikachu do throughout the entire game?",
        answerList : [
            "A. Follows you",
            "B. Eats biscuits",
            "C. Zaps you"
            
        ],
        correctIndex : 0
    },

    {
        q : "2. What's the name of the building where you take your Pokemon to get healed?",
        answerList : [
            "A. Pokemon Disco",
            "B. Pokemon emergency clinic",
            "C. Pokemon hotspring",
            "D. Pokemon Center"
        ],
        correctIndex : 3
    },

    {
        q : "3. What Pokemon does Pikachu evolve into?",
        answerList : [
            "A. Raichu",
            "B. Jolteon",
            "C. Magnimite",
            "D. Electabuzz"
        ],
        correctIndex : 0
    },

    {
        q : "4. In the Second-generation games, which Pokemon is in the middle of Professor Elm's Table?",
        answerList : [
            "A. Chikorita",
            "B. Bayleef",
            "C. Totodile",
            "D. Cyndaquil",
            "E. Mew"
        ],
        correctIndex : 2
    },

    {
        q : "5. Which Pokemon does Oak send out for an example?",
        answerList : [
            "A. Caterpie",
            "B. Nidoran",
            "C. Nidorina",
            "D. Gengar",
            "E. Pikachu",
            "F. Marill"
        ],
        correctIndex : 1
    },

    {
        q : "6. What does the Pokemon ability Levitate do?",
        answerList : [
            "A.It makes the Pokemon with Levitate faster due to flying capabilities.",
            "B.It helps you avoid wild Pokemon because you can float over them.",
            "C.A Pokemon with Levitate is not affected by ground-type moves regardless of the Pokemon with the ability.",
            "D. Levitate makes the moves \"Fly\" and \"Bounce\" stronger due to the ability to go to higher altitudes."
        ],
        correctIndex : 2
    }
    
]

var correctCount;
var incorrectCount;
var unansweredCount;
var timer = 20;
var intervalId;
var timeOutId;
var resultScreenTimeOut;
var questionIndex = -1;

function reset(){
    correctCount = 0;
    incorrectCount = 0;
    unansweredCount = 0;
    questionIndex = -1;
    newQuestion();
}

function newQuestion() {
    if (questionIndex < questionList.length - 1){
        questionIndex++;
        timer = 20;
        $(".timerArea").html("remaining time : " + timer);
        startTimer();
        givenTime = setTimeout(timeOutScreen, 1000 * 20)
        $(".questionArea").html(questionList[questionIndex].q);
        $(".answerArea").empty();
        
        //display all the answer options
        var answers = questionList[questionIndex].answerList;
        for (var i = 0; i < answers.length; i++){
            var answerDiv = $("<div>");
            answerDiv.css('margin-bottom', 20);
            //answerDiv.css('background-color', 'White');
            answerDiv.text(answers[i]);
            answerDiv.attr("class", "answerOptions");
            answerDiv.attr("id", i);
            $(".answerArea").append(answerDiv);
        }
        
    } else {
        showResult();
    }
}
  
$(document).on("click", ".answerOptions", function(){
    clearTimeout(givenTime);
    clearInterval(timeRemain);
    var answerId = $(this).attr("id");
    //var correctId = questionList[questionIndex].correctIndex;
    if (answerId == questionList[questionIndex].correctIndex){
        correctScreen();
    } else {
        incorrectScreen();
    }
});
    

    

//correct screen
function correctScreen(){
    //something
    $(".questionArea").html("<h2>Correct</h2>");
    showCorrectAnswer();
    correctCount++;
}

function incorrectScreen(){
    $(".questionArea").html("<h2>Wrong</h2>");
    showCorrectAnswer();
    incorrectCount++;
}

function timeOutScreen(){
    //something
    unansweredCount++;
    //add this when choosing correct or incorrect answers, no need for timeoutScreen
    //clearTimeout(timeOutId); 
    clearInterval(timeRemain);
    $(".questionArea").html("Times up");
    showCorrectAnswer();
}

function showCorrectAnswer(){
    $(".answerArea").html(questionList[questionIndex].answerList[questionList[questionIndex].correctIndex]);
    setTimeout(newQuestion, 1000 * 3);
}

function showResult(){
    var correctDiv = $("<div>");
    var incorrectDiv = $("<div>");
    var unansweredDiv = $("<div>");
    correctDiv.html("correct : " + correctCount);
    incorrectDiv.html("incorrect : " + incorrectCount);
    unansweredDiv.html("unanswered : " + unansweredCount);
    $(".timerArea").empty();
    $(".questionArea").empty();
    $(".answerArea").empty();
    $(".answerArea").append(correctDiv);
    $(".answerArea").append(incorrectDiv);
    $(".answerArea").append(unansweredDiv);
    var restartButton = $("<button class='restart' onClick='reset()'>Play Again</button>").css({
        'border-radius': 10,
        'cursor': 'pointer',
        'background-color': '#ffcc99',
        'border-width': 0,
        'color': '#666699'
    });
    $(".answerArea").append(restartButton);
}

//add 1 to timer
function timeCount () {
    timer--;
    $(".timerArea").html("remaining time : " + timer);
   }

//run function timeCount every second using setInterval
function startTimer(){
    timeRemain = setInterval(timeCount, 1000); 
}

