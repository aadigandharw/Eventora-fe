import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:5000/api', //For Local 
    baseURL:'https://eventora-be-4juy.onrender.com/api' //For Live
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
