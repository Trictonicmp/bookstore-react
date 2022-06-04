import PropTypes from 'prop-types';
import styles from '../css/components/radialprogressbar.module.css';

const RadialProgressBar = (props) => {
  const { percentage } = props;

  const calculateProgressOffset = () => ((1 - percentage) * 32);

  return (
    <div className={styles.percent}>
      <svg className={styles.circlesContainer} width="100%" viewBox="-0.51 -0.5 10.9 11">
        <circle
          className={`${styles.circleSvg} ${styles.progressBackgorund}`}
          cx="5"
          cy="5"
          r="5"
        />
        <circle
          className={`${styles.circleSvg} ${styles.progressProgress}`}
          cx="5"
          cy="5"
          r="5"
          transform="rotate(-90 5 5)"
          strokeDashoffset={calculateProgressOffset()}
        />
      </svg>
    </div>
  );
};

RadialProgressBar.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default RadialProgressBar;
