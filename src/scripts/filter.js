import { coursesData, CATEGORY_KEY_MAP } from '../data/courses-data.js';

const coursesFilters = document.getElementById('coursesFilters');

const renderFilters = (filters) => {
	console.log('START renderFilters')
  coursesFilters.innerHTML = '';
  filters.forEach((filter) => {
    if (coursesData.filter) {
      const card = document.createElement('button');
      card.classList.add('courses__filter');
      card.dataset.category = filter;
      card.textContent = CATEGORY[filter];
      coursesFilters.appendChild(card);
    }
  });
};

renderFilters(CATEGORY_KEY_MAP);

const filterButtons = document.querySelectorAll('.courses__filter');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const filteredCourses =
      category === 'All'
        ? coursesData
        : coursesData.filter((course) => course.category === category);
    renderCourses(filteredCourses);
  });
});
