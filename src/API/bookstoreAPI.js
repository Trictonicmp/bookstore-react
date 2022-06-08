const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const API_KEY = 'KCQ7InVjdDBdlrIKPo1M';

export const getBooksFromAPI = fetch(`${BASE_URL}${API_KEY}/books`)
  .then((response) => {
    if (response.headers.get('content-length') === 0) return [];
    return response.json();
  })
  .catch((error) => {
    throw error;
  });

export const addBookToAPI = (book) => fetch(`${BASE_URL}${API_KEY}/books`, {
  method: 'POST',
  body: JSON.stringify(book),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.text())
  .catch((error) => {
    throw error;
  });

export const removeBookFromAPI = (bookId) => fetch(`${BASE_URL}${API_KEY}/books/${bookId}`, {
  method: 'DELETE',
})
  .then((response) => response.text())
  .catch((error) => {
    throw error;
  });
