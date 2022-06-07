import axios from 'axios';
import userStore from '../Store/UserStore';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

const authService = {
  clearToken: () => localStorage.clear(),
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      return false;
    }
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return true;
  },
  setAccessToken: (token: string) => localStorage.setItem(ACCESS_TOKEN, token),
  getAccessToken: (): string | null => localStorage.getItem(ACCESS_TOKEN),
  signOut: () => {
    userStore.setUser(null);
    localStorage.clear();
  },
};

export default authService;
