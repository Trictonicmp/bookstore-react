import PropTypes from 'prop-types';
import styles from '../css/components/book.module.css';
import buttonStyles from '../css/components/button.module.css';
import BookHeader from './BookHeader';
import BookButtonsSection from './BookButtonSections';
import Progress from './Progress';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className={styles.book}>
      <div className={styles.bookSection}>
        <span className={styles.bookGenre}>Action</span>
        <BookHeader title={title} author={author} />
        <BookButtonsSection />
      </div>
      <div className={styles.bookSection}>
        <div className={styles.progressContainer}>
          <Progress />
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
      >
        X
      </button>
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
