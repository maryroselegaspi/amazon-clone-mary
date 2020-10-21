import axios from 'axios';

const instance = axios.create({
    baseURL:'...' // Api (cloud function) URL
});

export default instance;