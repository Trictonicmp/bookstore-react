import { PropTypes } from 'prop-types';
import styles from '../css/components/progress.module.css';

import RadialProgressBar from './RadialProgressBar';

const Progress = (props) => {
  const { percentage } = props;
  return (
    <>
      <RadialProgressBar percentage={percentage} />
      <div className={styles.percentageDetails}>
        <h3 className={styles.percentageTitle}>
          {`${Math.ceil(percentage * 100)}% `}
        </h3>
        <span className={styles.percentageSubtitle}>Completed</span>
      </div>
    </>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
