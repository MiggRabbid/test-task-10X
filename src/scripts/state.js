import { coursesData, CATEGORY, CATEGORY_KEY_MAP } from '../data/courses-data.js';

/**
 * State
 */
// Основной стейт приложения
export const state = {
  categories: CATEGORY_KEY_MAP,
  courses: coursesData,
  filteredCourses: coursesData,
  activeCategory: CATEGORY.All,
  counters: {},
};

// динамическое заполнение счетчиков курсов по категориям
const getCoursesCategory = () => {
  CATEGORY_KEY_MAP.forEach((key) => {
    if (key === CATEGORY.All) {
      state.counters[key] = coursesData.length;
    } else {
      state.counters[key] =
        coursesData.filter((course) => course.category === CATEGORY[key])?.length || 0;
    }
  });
};

getCoursesCategory();
