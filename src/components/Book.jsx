import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from '../css/components/book.module.css';
import buttonStyles from '../css/components/button.module.css';
import BookHeader from './BookHeader';
import BookButtonsSection from './BookButtonSections';
import Progress from './Progress';

const Book = (props) => {
  const {
    title,
    author,
    genre,
    id,
    percentage,
  } = props;
  const dispatch = useDispatch();

  const removeThisBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className={styles.book}>
      <div className={styles.bookSection}>
        <span className={styles.bookGenre}>{ genre }</span>
        <BookHeader title={title} author={author} />
        <BookButtonsSection />
      </div>
      <div className={styles.bookSection}>
        <div className={styles.progressContainer}>
          <Progress percentage={percentage} />
        </div>
        <span className={styles.bookSectionDivision} />
        <div>
          <h4 className={styles.chapterLabel}>Current chapter</h4>
          <p className={styles.chapterCurrent}>Chapter 17</p>
          <button
            type="button"
            className={`${buttonStyles.button}
              ${buttonStyles.main}
              ${styles.button}
            `}
          >
            update progress
          </button>
        </div>
      </div>
      <button
        type="button"
        title="Delete"
        className={`
          ${buttonStyles.button}
          ${buttonStyles.red}
        `}
        onClick={removeThisBook}
      >
        X
      </button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  title: '',
  author: '',
  genre: '',
};

export default Book;
