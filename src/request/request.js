import axios from 'axios';
import { store } from '../store';
import { logOut, selectCurrentToken } from '@modules/Auth/authSlice';
import { removeSelectedCompanyId } from '@utils/cryptoUtils';

// const baseURLs = {
// development: 'http://192.168.1.8:8080/',
//   production: 'https://api.endlessc.in/',
//   staging: 'https://api.endlessc.in/',
// };


// Alternative base URLs (commented out)
const baseURLs = {
  development: 'http://192.168.1.8:8080/',
  production: 'https://api.endlessc.in/',
  staging: 'https://api.endlessc.in/',
};

const environment = 'production';

export const IMG_BASE_URL = baseURLs[environment];

export const baseRequest = axios.create({
  baseURL: baseURLs[environment],
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

baseRequest.interceptors.request.use(
  (config) => {
    const token = selectCurrentToken(store.getState());
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

baseRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('openKeys');
      localStorage.removeItem('persist');
      removeSelectedCompanyId();
      store.dispatch(logOut());
    
      window.location.href = '/signin';
    }
    
    return Promise.reject(error);
  }
);