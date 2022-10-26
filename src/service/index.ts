import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://market-task-service.herokuapp.com',
});

export default instance;
