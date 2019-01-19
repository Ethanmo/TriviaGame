var questionList = [
    {
        q : "Question 1",
        answerList : [
            "answer a",
            "answer b",
            "answer c",
            "answer d"
        ],
        correctIndex : 2
    },

    {
        q : "Question 2",
        answerList : [
            "answer a",
            "answer b",
            "answer c",
            "answer d"
        ],
        correctIndex : 1
    },

    {
        q : "Question 3",
        answerList : [
            "answer a",
            "answer b",
            "answer c",
            "answer d"
        ],
        correctIndex : 0
    },

    {
        q : "Question 4",
        answerList : [
            "answer a",
            "answer b",
            "answer c",
            "answer d"
        ],
        correctIndex : 3
    }
]

var correctCount;
var incorrectCount;
var unansweredCount;
var timer = 10;
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
        timer = 10;
        $(".timerArea").html("remaining time : " + timer);
        startTimer();
        givenTime = setTimeout(timeOutScreen, 1000 * 10)
        $(".questionArea").html(questionList[questionIndex].q);
        $(".answerArea").empty();
        
        //display all the answer options
        var answers = questionList[questionIndex].answerList;
        for (var i = 0; i < answers.length; i++){
            var answerDiv = $("<div>", 
            {css: {
                "margin-bottom": "10px",
                "background-color": "White"
            }
            });
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
    setTimeout(newQuestion, 1000);
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
    $(".answerArea").append("<button class='restart' onClick='reset()'>Play Again</button>")
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

