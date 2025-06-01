const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {

    // 모든 답변 닫기
    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove("active");
        q.nextElementSibling.classList.remove("active");
      }
    });

    const answer = question.nextElementSibling;
    question.classList.toggle("active");
    answer.classList.toggle("active");
  });
});
