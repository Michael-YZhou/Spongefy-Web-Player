let BASE_URL = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://meowfacts.herokuapp.com';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://api.example.com';
} else {
  BASE_URL = 'http://localhost:3000';
}

export { BASE_URL, TIME_OUT };
