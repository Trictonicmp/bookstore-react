import styles from '../css/components/book.module.css';

const BookButtonsSection = () => (
  <div className={styles.buttonContainer}>
    <button className={styles.bookButton} type="button">Comments</button>
    <span className={styles.buttonSeparator} />
    <button className={styles.bookButton} type="button">Remove</button>
    <span className={styles.buttonSeparator} />
    <button className={styles.bookButton} type="button">Edit</button>
  </div>
);

export default BookButtonsSection;
