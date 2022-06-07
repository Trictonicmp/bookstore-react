import styles from '../css/components/bookslist.module.css';
// import Book from './Book';

const BookList = () => {
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
  console.log('books');
  return (
    <ul className={`page-container ${styles.booksContainer}`}>
      {/* <Book title={books[0].title} author={books[0].author} />
      <Book title={books[1].title} author={books[1].author} />
      <Book title={books[2].title} author={books[2].author} /> */}
    </ul>
  );
};

export default BookList;
