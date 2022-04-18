const buildQuiz = () => {
  // variable to store the HTML output
  const output = [];

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      currentQuestion.answers.forEach((answer, index) => {

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value=${index}>
            ${answer} 
          </label>`
        );
      })

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.text} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  document.getElementById('quiz').innerHTML = output.join('');
}

const showSlide = (n) => {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length - 1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

const showNextSlide = () => {
  console.log("show next");
  showSlide(currentSlide + 1);
}

const showPreviousSlide = () => {
  showSlide(currentSlide - 1);
}

// input should be an array of answers' number (A->0, B->1, C->2, D->3), e.g. [0,3,...]
const calcuateResult = (input) => {
  if (input.length !== 8) {
    console.error(
      "请填写所有问题！"
    );
    return;
  }

  const results = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  }
  input.forEach((value, index)=> {
    const questionScore = scores[index].score[value];
    results[questionScore.result] += questionScore.point;
  });

  return maxResult(results);
}

const maxResult = (dict) => {
  // convert dict to array
  let items = Object.keys(dict).map((key) => {
    return [key, dict[key]];
  });

  // Sort the array based on the second element
  items.sort((first, second) => {
    return second[1] - first[1];
  });

  return items[0][0];
}

const showResults = () => {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  const answers = [];
  questions.forEach((_, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    answers.push(userAnswer);
  });

  alert(calcuateResult(answers));
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
