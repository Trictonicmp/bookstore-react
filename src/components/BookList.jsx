import styles from '../css/components/bookslist.module.css';
// import Book from './Book';

const BookList = () => {
  const books = [
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
  ];
  console.log(books);
  return (
    <div className={`page-container ${styles.booksContainer}`} />
  );
};

export default BookList;
