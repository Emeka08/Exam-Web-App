import changeOptionColor from "./changeOptionColor.js";
import questions from "./questions.js";

let option = document.querySelectorAll("label span");
let questionNumber = document.querySelector("h2 span");
let question = document.querySelector("h2");
let button = document.querySelectorAll("button");
let approvalButtons = document.querySelector(".question-to-submit");
let SubmitButton = document.querySelector(".btn-to-submit");
let questionsContainer = document.querySelector(".question.question-screen");
let resultScreen = document.querySelector(".result-screen");
let submitContainer = document.querySelector(".btn-submit-container");
let SubmitButtonDiv = document.querySelector(".btn-container");

questions();

let setQuestions = (i) => {
  questionNumber.innerText = `${i + 1}:`;
  question.innerHTML = `<span>${questions()[i][0]}:</span> ${
    questions()[i][1]
  }`;
  option[0].innerText = questions()[i][2];
  option[1].innerText = questions()[i][3];
  option[2].innerText = questions()[i][4];
  option[3].innerText = questions()[i][5];
  // Use this part to prevent the reset of color per each question
  option[0].className = "fail";
  option[1].className = "fail";
  option[2].className = "fail";
  option[3].className = "fail";
};

setQuestions(0);

changeOptionColor();

let answer = [];

let getAnswer = (a) => {
  let selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("You need to pick a question");
    return;
  }
  if (questionNumber.innerText == `${a}:`) {
    answer[a - 1] = option[i].innerText;
    //console.log(answer);
    //console.log(` question num = ${a}`);
  }
};

let answerPercentage = (ans, total) => {
  let percentage = (ans / total) * 100;
  return percentage;
};

for (let i = 1; i <= questions().length; i++) {
  getAnswer(i);
}

let i = 0;
button[0].addEventListener("click", () => {
  if (i > questions().length - 1) {
    i--;
  } else if (i < questions().length) {
    i = 0;
  }
  setQuestions(i);
});

button[1].addEventListener("click", () => {
  if (i < questions().length - 1) {
    i++;
  } else if (i > questions().length) {
    i = questions().length - 1;
  }
  setQuestions(i);
});

let checkResult = [];

let getResult = (c) => {
  if (answer[c] === questions()[c][6]) {
    checkResult.push(`question ${c + 1}`);
  }
};

//Create a button for submit
button[4].addEventListener("click", () => {
  approvalButtons.style.display = "block";
  SubmitButton.style.position = "inherit";
  SubmitButton.style.paddingTop = "1.6rem";
  SubmitButton.style.paddingLeft = "1.2rem";
});

button[2].addEventListener("click", () => {
  for (let i = 0; i < questions().length; i++) {
    getResult(i);
  }
  console.log(`You Score Is ${checkResult.length}.`);
  console.log(checkResult);
  let score = answerPercentage(checkResult.length, questions().length);
  score = Math.round(score);
  resultScreen.innerHTML = `<h2>Your Percentage is ${score}%. And You Got ${checkResult.length} Questions. Numbers answered correctly ${checkResult}</h2>`;
  questionsContainer.style.display = "none";
  submitContainer.style.display = "none";
  SubmitButtonDiv.style.display = "none";
});

button[3].addEventListener("click", () => {
  approvalButtons.style.display = "none";
  SubmitButton.style.position = "relative";
  SubmitButton.style.padding = "0";
});
