import { CATEGORY } from '../data/courses-data.js';
import { state, renderCourses } from './index.js';

// Дебаунс поиска
let debounceTimeout;

const debounce = (func, delay = 200) => {
  return (...args) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const searchInput = document.getElementById('search');

// Основная логика поиска
const handleSearch = () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm.length === 0) {
    state.filteredCourses =
      state.activeCategory === CATEGORY.All
        ? state.courses
        : state.courses.filter((course) => course.category === state.activeCategory);
  } else {
    state.filteredCourses = state.filteredCourses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm)
    );
  }

  renderCourses(state.filteredCourses);
};

// Применение дебаунса с задержкой в 300 мс
searchInput.addEventListener('input', debounce(handleSearch, 200));

// Очистка поля ввода
export const clearSearchInput = () => {
  searchInput.value = '';
};
