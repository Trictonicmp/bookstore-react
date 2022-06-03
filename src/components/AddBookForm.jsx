import styles from '../css/components/addbookform.module.css';

const AddBookForm = () => (
  <div className={`page-container ${styles.bookFormContainer}`}>
    <h2 className={styles.containerTitle}>Add new book</h2>
    <form className={styles.bookForm}>
      <input type="text" />
      <select placeholder="Category">
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>
      <button type="button">Add book</button>
    </form>
  </div>
);

export default AddBookForm;
