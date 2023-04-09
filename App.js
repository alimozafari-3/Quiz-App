let quizdata = [
  {
    question: "which language runs in a web browser?",
    a: "java",
    b: "c",
    c: "python",
    d: "javaScript",
  },
  {
    question: "what does css stand for?",
    a: "central style sheets",
    b: "cascading style sheets",
    c: "cascading simple sheets",
    d: "cars suvs sailboats",
  },
  {
    question: "what year was javaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
  },
];

const submitbtn = document.getElementById("submit");
const question = document.querySelector(".question");
const questionul = document.getElementById("questionul");
let current = 0;
window.addEventListener("load", (e) => {
  question.innerHTML = `${quizdata[current].question}`;
  questionul.innerHTML = `
        <li>
        <input type="radio" name="answer" class="answer">
        <label for="" class="label-text">${quizdata[current].a}</label>
        </li>
        <li>
        <input type="radio" name="answer" class="answer">
        <label for="" class="label-text">${quizdata[current].b}</label>
        </li>
        <li>
        <input type="radio" name="answer" class="answer">
        <label for="" class="label-text">${quizdata[current].c}</label>
        </li>
        <li>
        <input type="radio" name="answer" class="answer">
        <label for="" class="label-text">${quizdata[current].d}</label>
        </li>
        `;
  const answerinput = document.querySelectorAll(".answer");
  submitbtn.classList.add("disble");
  answerinput.forEach((el) => {
    el.addEventListener("change", (e) => {
      submitbtn.classList.remove("disble");
    });
  });
});
submitbtn.addEventListener("click", (e) => {
  submitbtn.classList.add("disble");
  current++;
  if (current > 2) {
    current = 0;
  }

  question.innerHTML = `${quizdata[current].question}`;
  questionul.innerHTML = `
  <li>
  <input type="radio" name="answer" class="answer">
  <label for="" class="label-text">${quizdata[current].a}</label>
  </li>
  <li>
  <input type="radio" name="answer" class="answer">
  <label for="" class="label-text">${quizdata[current].b}</label>
  </li>
  <li>
  <input type="radio" name="answer" class="answer">
  <label for="" class="label-text">${quizdata[current].c}</label>
  </li>
  <li>
  <input type="radio" name="answer" class="answer">
  <label for="" class="label-text">${quizdata[current].d}</label>
  </li>
  `;
  const answerinput = document.querySelectorAll(".answer");
  answerinput.forEach((el) => {
    el.addEventListener("change", (e) => {
      if (e.target.checked == true) {
        submitbtn.classList.remove("disble");
      }
    });
  });
});
