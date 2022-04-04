import { API } from '~/constants';
import getUrl from '../utils/getUrl';

const logout = async (): Promise<void> => {
  try {
    const url = getUrl(API.Logout);
    await fetch(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then( () => localStorage.clear())   
  } catch (error) {
  }
};

export default logout;
