import { state } from './index.js';
/**
 * Курсы
 */
// Рендер курсов
const coursesGrid = document.getElementById('coursesGrid');

// Функция для получения цвета категории
const categoryColors = {
  Marketing: '#03CEA4',
  Management: '#5A87FC',
  Design: '#F52F6E',
  Development: '#7772F1',
  default: '#F89828',
};
const getCoursesCategoryColor = (category) => {
  return categoryColors[category] || categoryColors.default;
};

export const renderCourses = (courses) => {
  const fragment = document.createDocumentFragment();

  courses.forEach((course) => {
    const card = document.createElement('div');
    card.classList.add('course-card');

    const img = document.createElement('img');
    img.classList.add('course-card__image');
    img.src = `public/assets/course-authors/${course.image}`;
    img.alt = course.title;

    const content = document.createElement('div');
    content.classList.add('course-card__content');

    const category = document.createElement('div');
    category.classList.add('course-card__category');
    category.style.backgroundColor = getCoursesCategoryColor(course.category);
    category.textContent = course.category;

    const title = document.createElement('div');
    title.classList.add('course-card__title');
    title.textContent = course.title;

    const footer = document.createElement('div');
    footer.classList.add('course-card__footer');

    const price = document.createElement('div');
    price.classList.add('course-card__price');
    price.textContent = course.price;

    const divider = document.createElement('div');
    divider.classList.add('course-card__divider');

    const author = document.createElement('div');
    author.classList.add('course-card__author');
    author.textContent = `by ${course.author}`;

    footer.appendChild(price);
    footer.appendChild(divider);
    footer.appendChild(author);

    content.appendChild(category);
    content.appendChild(title);
    content.appendChild(footer);

    card.appendChild(img);
    card.appendChild(content);

    fragment.appendChild(card);
  });

  coursesGrid.innerHTML = '';
  coursesGrid.appendChild(fragment);
};

renderCourses(state.filteredCourses);
