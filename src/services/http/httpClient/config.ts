let BASE_URL = '';
const TIME_OUT = 10000;

if (import.meta.env.MODE === 'development') {
  BASE_URL = 'https://meowfacts.herokuapp.com';
} else if (import.meta.env.MODE === 'production') {
  BASE_URL = 'https://api.example.com';
} else {
  BASE_URL = 'http://localhost:3000';
}

export { BASE_URL, TIME_OUT };
