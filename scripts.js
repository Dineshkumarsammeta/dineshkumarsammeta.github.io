const carousel = document.getElementById('carouselContainer');
  const leftBtn = document.getElementById('leftScroll');
  const rightBtn = document.getElementById('rightScroll');

  // Amount to scroll each click (adjust to card width + gap)
  const scrollAmount = carousel.querySelector('.project-card').offsetWidth + 20;

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
  // Optional: Active filter buttons (basic show/hide functionality)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if(filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
