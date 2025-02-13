let BASE_URL = '';
const TIME_OUT = 10000;

if (import.meta.env.MODE === 'development') {
  BASE_URL = 'http://codercba.com:9002';
} else if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://codercba.com:9002/';
} else {
  BASE_URL = 'http://codercba.com:9002/';
}

export { BASE_URL, TIME_OUT };
