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
var timer = 30;
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
    if (questionIndex < questionList.length){
        questionIndex++;
        console.log("questionIndex++");
        timer = 30;
        runTimer();
        timeOutId = setTimeout(timeOutScreen, 1000 * 30)
        $(".questionArea").html(questionList[questionIndex].q);
        $(".answerArea").empty();
        
        //display all the answer options
        var answers = questionList[questionIndex].answerList;
        for (var i = 0; i < answers.length; i++){
            var answerDiv = $("<div>");
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
            clearInterval(intervalId);
            var answerId = $(this).attr("id");
            var correctId = questionList[questionIndex].correctIndex;
            if (answerId === correctId){
                console.log(correctId);
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
}

function incorrectScreen(){
    $(".questionArea").html("<h2>Wrong</h2>");
    showCorrectAnswer();
}

function showCorrectAnswer(){
    $(".answerArea").html(questionList[questionIndex].answerList[questionList[questionIndex].correctIndex]);
    console.log("new game in 3");
    setTimeout(newQuestion, 3000);
}

//add 1 to timer
function timeCount () {
    $(".timerArea").html("remaining time : " + timer);
    timer--;
    //console.log(timer);
}

//run function timeCount every second using setInterval
function runTimer(){
    console.log("timer is running")
    intervalId = setInterval(timeCount, 1000); 
}

function timeOutScreen(){
    //something
    console.log("time up");
    //add this when choosing correct or incorrect answers, no need for timeoutScreen
    //clearTimeout(timeOutId); 
    clearInterval(intervalId);
}

reset();