export function setUpSlider() {

  const container = document.querySelector('.news_card_container');
  const cards = document.querySelectorAll('.product_card');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  function updateSlide(){
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () =>{
    currentIndex = (currentIndex > 0) ? currentIndex -1 : cards.length - 1;
    updateSlide()
  })

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    updateSlide();
  });

}