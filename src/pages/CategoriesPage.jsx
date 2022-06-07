import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import buttonStyles from '../css/components/button.module.css';
import styles from '../css/pages/categoriespage.module.css';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories);

  const showState = () => {
    dispatch(checkStatus('under construction'));
  };

  return (
    <section className={`page-container ${styles.buttonContainer}`}>
      <p>
        {state}
      </p>
      <button
        className={`
          ${buttonStyles.button}
          ${buttonStyles.main}
          ${styles.button}
        `}
        type="button"
        onClick={showState}
      >
        Check status
      </button>
    </section>
  );
};

export default CategoriesPage;
