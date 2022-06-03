import PropTypes from 'prop-types';

const RadialProgressBar = (props) => {
  const { percentage } = props;
  return (
    <div>
      {percentage}
    </div>
  );
};

RadialProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default RadialProgressBar;
