import styles from '../css/components/addbookform.module.css';
import formStyles from '../css/components/form.module.css';
import buttonStyles from '../css/components/button.module.css';

const AddBookForm = () => (
  <div className="page-container">
    <h2 className={styles.containerTitle}>Add new book</h2>
    <form className={styles.bookForm}>
      <input
        className={`${formStyles.input} ${styles.titleInput}`}
        type="text"
        placeholder="Book title"
        required
      />
      <input
        className={`${formStyles.input} ${styles.authorInput}`}
        type="text"
        placeholder="Author"
        required
      />
      <button
        className={`${buttonStyles.button}
          ${buttonStyles.main}
          ${styles.button}
        `}
        type="submit"
      >
        Add book
      </button>
    </form>
  </div>
);

export default AddBookForm;
