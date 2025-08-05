
const projects = [
  {
    id: 1,
    category: 'data-science',
    title: 'Sentiment Analysis Pipeline',
    description: 'A pipeline to analyze and classify sentiment from text data.',
    img: 'https://via.placeholder.com/600x400?text=Sentiment+Analysis',
    github: 'https://github.com/yourusername/sentiment-analysis'
  },
  {
    id: 2,
    category: 'electrical',
    title: 'Smart Electrical Grid',
    description: 'An IoT project for smart electrical grid monitoring.',
    img: 'https://via.placeholder.com/600x400?text=Smart+Grid',
    github: 'https://github.com/yourusername/electrical-project'
  },
  {
    id: 3,
    category: 'data-science',
    title: 'Housing Price Predictor',
    description: 'ML model to predict housing prices based on features.',
    img: 'https://via.placeholder.com/600x400?text=Price+Predictor',
    github: 'https://github.com/yourusername/housing-price-predictor'
  },
  {
    id: 4,
    category: 'electrical',
    title: 'Energy Dashboard',
    description: 'Dashboard showing real-time energy usage data.',
    img: 'https://via.placeholder.com/600x400?text=Energy+Dashboard',
    github: 'https://github.com/yourusername/energy-dashboard'
  },
  {
    id: 5,
    category: 'data-science',
    title: 'Customer Segmentation',
    description: 'Clustering model for marketing segmentation.',
    img: 'https://via.placeholder.com/600x400?text=Customer+Segmentation',
    github: 'https://github.com/yourusername/customer-segmentation'
  }
];

const container = document.getElementById('carouselContainer');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderProjects(filter) {
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  container.innerHTML = '';
  
  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="project-image" />
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank">Explore More on GitHub</a>
      </div>
    `;
    container.appendChild(card);
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    renderProjects(filter);
  });
});

document.getElementById('leftScroll').addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('rightScroll').addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});

// Initial load
renderProjects('all');

