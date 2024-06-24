export function setUpWrapper() {
  document.querySelectorAll('.about_container_title').forEach(title => {
    title.addEventListener('click', () => {
      const arrow = title.querySelector('.arrow');
      const text = title.nextElementSibling.nextElementSibling;
      const isActive = text.classList.contains('open')
  
      // fermer les wrapper
      document.querySelectorAll('.about_container_txt').forEach(txt => {
        txt.classList.remove('open')
      });
  
      // rotate les arrow
      document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.classList.remove('rotated');
      });
  
      // condition pour vérifier l'état du wrapper
      if (!isActive) {
        text.classList.add('open');
      arrow.classList.add('rotated')
      }
    });
  });
}

