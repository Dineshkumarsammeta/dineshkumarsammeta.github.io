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
  document.querySelectorAll(".skills-slider").forEach(slider => {
    const container = slider.querySelector(".skills-scroll-container");
    const leftBtn = slider.querySelector(".skill-scroll-btn.left");
    const rightBtn = slider.querySelector(".skill-scroll-btn.right");
  
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -100, behavior: "smooth" });
    });
  
    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: 100, behavior: "smooth" });
    });
  });
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.getElementById('nextSlide');
  const prevButton = document.getElementById('prevSlide');
  const dotsNav = document.querySelector('.carousel-dots');
  const dots = Array.from(dotsNav.children);
  
  let slideWidth = slides[0].getBoundingClientRect().width;
  
  // Arrange slides next to each other
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach(setSlidePosition);
  
  // Move to slide function
  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };
  
  // Update dots
  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('active');
    targetDot.classList.add('active');
  };
  
  // Get current slide
  let currentSlideIndex = 0;
  slides[currentSlideIndex].classList.add('current-slide');
  dots[currentSlideIndex].classList.add('active');
  
  // Click next
  nextButton.addEventListener('click', () => {
    let currentSlide = slides[currentSlideIndex];
    let currentDot = dots[Math.floor(currentSlideIndex / 1)]; // adjust if showing multiple slides per page
  
    currentSlideIndex++;
    if(currentSlideIndex >= slides.length) currentSlideIndex = 0;
  
    let nextSlide = slides[currentSlideIndex];
    let nextDot = dots[Math.floor(currentSlideIndex / 1)];
  
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
  });
  
  // Click prev
  prevButton.addEventListener('click', () => {
    let currentSlide = slides[currentSlideIndex];
    let currentDot = dots[Math.floor(currentSlideIndex / 1)];
  
    currentSlideIndex--;
    if(currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
  
    let prevSlide = slides[currentSlideIndex];
    let prevDot = dots[Math.floor(currentSlideIndex / 1)];
  
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
  });
  
  // Click dots
  dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
  
    const currentSlide = slides[currentSlideIndex];
    const currentDot = dots.find(dot => dot.classList.contains('active'));
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    
    currentSlideIndex = targetIndex;
    const targetSlide = slides[currentSlideIndex];
  
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
  });
  
  // Responsive: recalc slide width
  window.addEventListener('resize', () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach(setSlidePosition);
    const currentSlide = slides[currentSlideIndex];
    track.style.transform = 'translateX(-' + currentSlide.style.left + ')';
  });
  
