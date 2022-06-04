import styles from '../css/pages/bookspage.module.css';

import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';

const BooksPage = () => (
  <>
    <section className={styles.booksPage}>
      <BookList />
    </section>
    <span className="page-division" />
    <section className={styles.booksPage}>
      <AddBookForm />
    </section>
  </>
);

export default BooksPage;
