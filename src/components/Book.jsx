import PropTypes from 'prop-types';
import styles from '../css/components/book.module.css';
import BookHeader from './BookHeader';
import Progress from './Progress';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className={styles.book}>
      <div className={styles.bookSection}>
        <span className={styles.bookGenre}>Action</span>
        <BookHeader title={title} author={author} />
        <div className={styles.buttonContainer}>
          <button className={styles.bookButton} type="button">Comments</button>
          <span className={styles.buttonSeparator} />
          <button className={styles.bookButton} type="button">Remove</button>
          <span className={styles.buttonSeparator} />
          <button className={styles.bookButton} type="button">Edit</button>
        </div>
      </div>
      <div className={styles.bookSection}>
        <Progress />
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
