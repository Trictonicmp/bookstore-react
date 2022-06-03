import PropTypes from 'prop-types';
import styles from '../css/components/book.module.css';
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
