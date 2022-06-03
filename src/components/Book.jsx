import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book">
      hello
      { title }
      { author }
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
