import { useDispatch, useSelector } from 'react-redux';
import styles from '../css/components/addbookform.module.css';
import formStyles from '../css/components/form.module.css';
import buttonStyles from '../css/components/button.module.css';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addNewBook = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      genre: 'action',
      id: books.length,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="page-container">
      <h2 className={styles.containerTitle}>Add new book</h2>
      <form
        className={styles.bookForm}
        onSubmit={addNewBook}
      >
        <input
          className={`${formStyles.input} ${styles.titleInput}`}
          type="text"
          placeholder="Book title"
          name="title"
          required
        />
        <input
          className={`${formStyles.input} ${styles.authorInput}`}
          type="text"
          placeholder="Author"
          name="author"
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
};

export default AddBookForm;
