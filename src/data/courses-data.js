export const CATEGORY = {
  All: 'All',
  Marketing: 'Marketing',
  Management: 'Management',
  HR_and_Recruiting: 'HR & Recruiting',
  Design: 'Design',
  Development: 'Development',
};

export const coursesData = [
  {
    title: 'The Ultimate Google Ads Training Course',
    category: CATEGORY.Marketing,
    price: '$100',
    author: 'Jerome Bell',
    image: 'course1.png',
  },
  {
    title: 'Product Management Fundamentals',
    category: CATEGORY.Management,
    price: '$480',
    author: 'Marvin McKinney',
    image: 'course2.png',
  },
  {
    title: 'HR Management and Analytics',
    category: CATEGORY.HR_and_Recruiting,
    price: '$200',
    author: 'Leslie Alexander Li',
    image: 'course3.png',
  },
  {
    title: 'Brand Management & PR Communications',
    category: CATEGORY.Marketing,
    price: '$530',
    author: 'Kristin Watson',
    image: 'course4.png',
  },
  {
    title: 'Graphic Design Basic',
    category: CATEGORY.Design,
    price: '$500',
    author: 'Guy Hawkins',
    image: 'course5.png',
  },
  {
    title: 'Business Development Management',
    category: CATEGORY.Management,
    price: '$400',
    author: 'Dianne Russell',
    image: 'course6.png',
  },
  {
    title: 'Highload Software Architecture',
    category: CATEGORY.Development,
    price: '$600',
    author: 'Brooklyn Simmons',
    image: 'course7.png',
  },
  {
    title: 'Human Resources - Selection and Recruitment',
    category: CATEGORY.HR_and_Recruiting,
    price: '$150',
    author: 'Kathryn Murphy',
    image: 'course8.png',
  },
  {
    title: 'User Experience. Human-centered Design',
    category: CATEGORY.Design,
    price: '$240',
    author: 'Cody Fisher',
    image: 'course9.png',
  },
];

export const CATEGORY_KEY_MAP = Object.keys(CATEGORY);
export const CATEGORY_VALUE_MAP = Object.values(CATEGORY);
