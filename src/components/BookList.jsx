import { useSelector } from 'react-redux';
import styles from '../css/components/bookslist.module.css';
import Book from './Book';

const BookList = () => {
  const state = useSelector((state) => state.books);
  /* const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'Action',
    },
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'Action',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
    },
  ]; */
  const bookComponents = [];
  state.forEach((book) => (bookComponents.push(
    <Book title={book.title} author={book.author} genre={book.genre} key={book.id} />,
  )));

  return (
    <ul className={`page-container ${styles.booksContainer}`}>
      {bookComponents}
    </ul>
  );
};

export default BookList;
