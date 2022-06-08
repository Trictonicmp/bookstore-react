const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const API_KEY = 'KCQ7InVjdDBdlrIKPo1M';

export const getBooksFromAPI = fetch(`${BASE_URL}${API_KEY}/books`)
  .then((response) => {
    if (!Object.keys(response.data).length) {
      return [];
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
export const addBookToAPI = async () => {

};
