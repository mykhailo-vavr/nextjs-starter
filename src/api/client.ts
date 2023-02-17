import axios from 'axios';
import { apiRoutes } from './settings';

// TODO: auth token placed here

const apiClient = axios.create({
  baseURL: apiRoutes.BASE_URL,
});

export { apiClient };
