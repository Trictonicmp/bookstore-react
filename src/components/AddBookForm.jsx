import styles from '../css/components/addbookform.module.css';
import formStyles from '../css/components/form.module.css';
import buttonStyles from '../css/components/button.module.css';

const AddBookForm = () => (
  <div className={`page-container ${styles.bookFormContainer}`}>
    <h2 className={styles.containerTitle}>Add new book</h2>
    <form className={styles.bookForm}>
      <input className={formStyles.input} type="text" placeholder="Book title" />
      <select className={formStyles.select}>
        <option>Category</option>
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>
      <button className={`${buttonStyles.button} ${styles.button}`} type="button">Add book</button>
    </form>
  </div>
);

export default AddBookForm;
