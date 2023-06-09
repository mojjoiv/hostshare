// axios.defaults.baseURL = 'https://airbnb-clone-production.up.railway.app';
axios.defaults.baseURL = 'https://airbnb-api-5s7s.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;