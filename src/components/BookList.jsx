import Book from './Book';

const BookList = () => {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div className="page-container books-container">
      <Book title={books[0].title} author={books[0].author} />
    </div>
  );
};

export default BookList;
