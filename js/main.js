// Плавный показ контента при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");

  // После загрузки страницы скрываем загрузчик и показываем контент
  setTimeout(() => {
    loader.style.display = "none"; // Скрываем загрузчик
    content.classList.add("visible"); // Показываем контент
  }, 300); // Задержка 1 секунда для анимации
});

// Секция вопросы и ответы
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");
  const svg = faq.querySelector("svg");

  question.addEventListener("click", () => {
    const isActive = faq.classList.contains("active");

    faqs.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".answer").style.maxHeight = null;
      item.querySelector("svg").style.transform = "";
    });

    if (!isActive) {
      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      svg.style.transform = "rotate(180deg)";
    }
  });
});
