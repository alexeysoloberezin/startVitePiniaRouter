import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export default instance;
