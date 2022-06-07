import buttonStyles from '../css/components/button.module.css';
import styles from '../css/pages/categoriespage.module.css';

const CategoriesPage = () => (
  <section className={`page-container ${styles.buttonContainer}`}>
    <button
      className={`
        ${buttonStyles.button}
        ${buttonStyles.main}
        ${styles.button}
      `}
      type="button"
    >
      Check status
    </button>
  </section>
);

export default CategoriesPage;