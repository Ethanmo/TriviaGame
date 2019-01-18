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
var timer = 0;
var intervalId;
var timeOutId;

function reset(){
    correctCount = 0;
    incorrectCount = 0;
    unansweredCount = 0;

}

function newQuestion() {
    timer = 0;
    runTimer();
    timeOutId = setTimeout(timeOutScreen, 1000 * 5)    
}

function timeCount () {
    timer++;
    console.log(timer);
}

function runTimer(){
    intervalId = setInterval(timeCount, 1000); 
}

function timeOutScreen(){
    //something
    console.log("time up")
    clearTimeout(timeOutId);
    clearInterval(intervalId);
}

newQuestion();