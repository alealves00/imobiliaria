function createSlider(sliderClass, prevButtonId, nextButtonId) {
  const sliderElements = document.querySelectorAll(`.${sliderClass}`);
  const btnPrev = document.getElementById(prevButtonId);
  const btnNext = document.getElementById(nextButtonId);
  const numSlides = sliderElements.length;

  let currentSlide = 0;

  function toggleSlide(direction) {
    currentSlide = (currentSlide + direction + numSlides) % numSlides;
    hideSlider();
    showSlider();
  }

  function hideSlider() {
    sliderElements.forEach(item => item.classList.remove('on'));
  }

  function showSlider() {
    sliderElements[currentSlide].classList.add('on');
  }

  btnNext.addEventListener('click', () => toggleSlide(1));
  btnPrev.addEventListener('click', () => toggleSlide(-1));
}

createSlider('sliderSala', 'prevButtonSala', 'nextButtonSala');
createSlider('sliderCozinha', 'prevButtonCozinha', 'nextButtonCozinha');
createSlider('sliderQuarto', 'prevButtonQuarto', 'nextButtonQuarto');
createSlider('sliderVaranda', 'prevButtonVaranda', 'nextButtonVaranda');
createSlider('sliderQuintal', 'prevButtonQuintal', 'nextButtonQuintal');