import PropTypes from 'prop-types';
import styles from '../css/components/book.module.css';

const BookHeader = (props) => {
  const { title, author } = props;
  return (
    <>
      <h2 className={styles.bookHeader}>{ title }</h2>
      <span className={styles.bookAuthor}>{ author }</span>
    </>
  );
};

BookHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookHeader;
