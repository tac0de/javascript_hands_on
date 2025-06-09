const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".icon");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".icon");

    answers.forEach((answer) => {
      answer.classList.remove("active");
    });

    icons.forEach((icon) => {
      icon.textContent = "▶";
    });

    answer.classList.add("active");
    icon.textContent = "▼";
  });
});