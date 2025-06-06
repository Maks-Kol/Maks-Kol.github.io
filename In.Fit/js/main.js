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

// Добавляем клас Open к бургеру
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
  document.querySelector("body").classList.toggle("no-scroll");
});

document.querySelector(".nav-list").addEventListener("click", function () {
  document.querySelector(".burger").classList.remove("active");
  document.querySelector(".nav").classList.remove("open");
  document.querySelector("body").classList.remove("no-scroll");
});

// Скрываем и открываем меню навигации и фиксированную кнопку
// let lastScrollY = window.scrollY;
// const headerNav = document.querySelector(".header__nav");
// const priceBtn = document.querySelector(".price-btn-wrapper");
// const btnFixed = document.querySelector(".price-btn-get-fixed");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    // Когда прокрутили на 30 px вниз - показываем хедер и фиксированную кнопку
    headerNav.classList.remove("hide");

    // Проверка, находится ли прокрутка в самом низу страницы
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      btnFixed.classList.remove("show"); // Скрываем кнопку в самом низу
    } else {
      btnFixed.classList.add("show"); // Показываем кнопку, если не внизу
    }
  } else {
    // Если мы в самом верху, то скрываем хедер и фиксированную кнопку
    headerNav.classList.add("hide");
    btnFixed.classList.remove("show");
  }
});

// Секция вопросы и ответы
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    // Проходим по всем вопросам и закрываем активные, кроме текущего
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq && otherFaq.classList.contains("active")) {
        otherFaq.classList.remove("active"); // Закрываем все активные
      }
    });

    // Открываем или закрываем текущий вопрос
    faq.classList.toggle("active");
  });
});
