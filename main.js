document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true
  });

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  const updateSlides = (direction) => {
    slides[currentSlide].classList.remove('active');
    if (direction === 'next') {
      currentSlide = (currentSlide + 1) % slides.length;
    } else if (direction === 'prev') {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    slides[currentSlide].classList.add('active');
  };

  document.querySelector('.swiper-button-next').addEventListener('click', () => updateSlides('next'));
  document.querySelector('.swiper-button-prev').addEventListener('click', () => updateSlides('prev'));

  // Set the initial slide to active
  slides[currentSlide].classList.add('active');
});
