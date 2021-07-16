var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;
console.log(chalk.yellow("Please press the Enter Key\nafter entering your answers\n"));
console.log("------------------------------------");
console.log(chalk.yellow("What is your name? "));
var myName = readlineSync.question();
console.log(chalk.yellow("Welcome ") + chalk.bgBlack(myName) + chalk.yellow(" to ") + chalk.green("How Well Do You Know Ashutosh!\n"));

var questions = [{
  question: "In which state of India do I live? ",
  answer: "West Bengal"
},

{
  question: "In which state of India was I born? ",
  answer: "Bihar"
},

{
  question: "Which company do I work for? ",
  answer: "TCS"
},

{
  question: "In which year did I graduate from Engineering College? ",
  answer: "2020"
},

{
  question: "What was my favourite subject in school? ",
  answer: "Science"
},

{
  question: "What is the name of my roommate from college? ",
  answer: "Manab"
},

{
  question: "Am I older than 25?  Yes/No ",
  answer: "No"
},

{
  question: "What is the laptop brand that I own? ",
  answer: "HP"
},

{
  question: "What was the first movie I watched in a theatre? ",
  answer: "Taare Zameen Par"
},

{
  question: "Where were you most likely to find me when in college? ",
  answer: "Gym"
}]

var highScores = [
  {
    name: "Ashutosh",
    score: 10
  },
  {
    name: "Manab",
    score: 7
  },
  {
    name: "Piyush",
    score: 6
  }
]

function play(question,answer){
  var userAnswer = readlineSync.question(chalk.yellow.bgBlack(question));
  if (answer.toLowerCase() === userAnswer.toLowerCase()){
    console.log(chalk.green.bgBlack("\nYou got the right answer!"));
    score++;
  }else{
    console.log(chalk.red.bgBlack("\nSorry! You were wrong this time"));
  }
  console.log(chalk.cyan.bold("\nYour score is "),score);
}

for(var i = 0; i < questions.length; i++){
  var currentQuestion = (questions[i]);
  play(currentQuestion.question, currentQuestion.answer);
  console.log("------------------------------------");
}

console.log(chalk.cyan.bgBlack("Your final score is "),score);

console.log("------------------------------------");

console.log(chalk.green.bgBlack("Checkout the high scores"));
console.log(chalk.green.bgBlack("",highScores[0].name,highScores[0].score,"\n",highScores[1].name,highScores[1].score,"\n",highScores[2].name,highScores[2].score));

console.log("------------------------------------");

compare(score,highScores[2].score);

function compare(score1,score2){
  if (score1 > score2){
    console.log(chalk.green("Congratulations " + (myName) + "!" + " You are one of the high scorers. Please send me a screenshot!"));
  }
}


