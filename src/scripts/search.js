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
  const filterButton = document.getElementById('active-btn');
  const activeCategory = filterButton.dataset.category;

  const searchTerm = searchInput.value.toLowerCase().trim();

  const targetCourses = activeCategory === CATEGORY.All
    ? state.courses 
    : state.courses.filter((course) => course.category === activeCategory);

  if (searchTerm.length === 0) {
    state.filteredCourses = targetCourses;
    renderCourses(targetCourses);
  } else {
    const updateCourses = targetCourses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm)
    );

    const isCompareArrays = compareArraysByTitle(updateCourses, state.filteredCourses);

    if (!isCompareArrays) {
      state.filteredCourses = updateCourses
      renderCourses(updateCourses);
    }
  }

      console.groupEnd();
};

// Применение дебаунса с задержкой в 300 мс
searchInput.addEventListener('input', debounce(handleSearch, 200));

// Очистка поля ввода
export const clearSearchInput = () => {
  searchInput.value = '';
};

// Проверка равенства массивов по title
const  compareArraysByTitle = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;


  arr1.sort((a, b) => a.title.localeCompare(b.title));
  arr2.sort((a, b) => a.title.localeCompare(b.title));

  return arr1.every((item, index) => item.title === arr2[index].title);
}
