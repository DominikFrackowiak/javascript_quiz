const correctAnswers = ["B", "B", "A", "A", "B"];

const result = document.querySelector(".result");
const resultSpan = result.querySelector("span");

const form = document.querySelector(".quiz-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const points = 100 / correctAnswers.length;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += points;
    }
  });

  window.scrollTo(0, 0);
  let i = 0;
  const index = setInterval(() => {
    i++;
    resultSpan.textContent = `${i}%`;
    if (i === score) clearInterval(index);
  }, 20);

  result.classList.remove("d-none");
});
