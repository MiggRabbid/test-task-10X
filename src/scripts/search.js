import { coursesData } from '../data/courses-data.js';

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm)
  );
  renderCourses(filteredCourses);
});
