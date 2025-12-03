import { CATEGORY } from '../data/courses-data.js';
import { state, renderCourses, clearSearchInput } from './index.js';
/**
 * Фильтрация
 */
// Рендер фильтров
const coursesFilters = document.getElementById('coursesFilters');

export const renderFilters = (filters) => {
  coursesFilters.innerHTML = '';
  filters.forEach((filter) => {
    if (state.courses.filter) {
      const btn = document.createElement('button');
      
      btn.classList.add('filter-btn');
      btn.setAttribute('id', 'active-btn');

      if (filter === CATEGORY.All) {
        btn.classList.add('filter-btn--active');
      }

      const btnText = document.createElement('div');
      btnText.classList.add('filter-btn__text');
      btnText.textContent = CATEGORY[filter];
      btn.appendChild(btnText);

      const btnCounter = document.createElement('span');
      btnCounter.classList.add('filter-btn__counter');
      btnCounter.textContent = state.counters[filter];
      btn.appendChild(btnCounter);

      btn.dataset.category = filter;
      coursesFilters.appendChild(btn);
    }
  });
};

renderFilters(state.categories);

// Логика фильтров
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    state.filteredCourses =
      category === 'All'
        ? state.courses
        : state.courses.filter((course) => course.category === CATEGORY[category]) ?? [];

    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach((btn) => {
      btn.classList.remove('filter-btn--active');
      btn.removeAttribute('id');
    });


    button.classList.add('filter-btn--active');
    button.setAttribute('id', 'active-btn');

    
    console.log(button);

    clearSearchInput();
    renderCourses(state.filteredCourses);
  });
});
