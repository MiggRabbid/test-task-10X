import { coursesData } from '../data/courses-data.js';

const coursesGrid = document.getElementById('coursesGrid');

const renderCourses = (courses) => {
  coursesGrid.innerHTML = '';
  courses.forEach((course) => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.innerHTML = `
            <div class="course-card__image" style="background-image: url('public/assets/course-authors/${course.image}')"></div>
            <div class="course-card__category">${course.category}</div>
            <div class="course-card__title">${course.title}</div>
            <div class="course-card__price">${course.price}</div>
            <div class="course-card__author">by ${course.author}</div>
        `;
    coursesGrid.appendChild(card);
  });
};

renderCourses(coursesData);
