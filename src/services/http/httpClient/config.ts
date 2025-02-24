// let BASE_URL = '';
// if (import.meta.env.MODE === 'development') {
//   BASE_URL = 'http://codercba.com:9002';
// } else if (import.meta.env.MODE === 'production') {
//   BASE_URL = 'http://codercba.com:9002';
// } else {
//   BASE_URL = 'http://codercba.com:9002';
// }

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TIME_OUT = 60000;

export { BASE_URL, TIME_OUT };
