import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import Book from '../components/Book/Book';

const FinishedBooks = () => {
  const finishList = useSelector((state) => state.books.finishedList);
  return (
    <PageLayout>

      {finishList.length === 0 && <p>
        Hey there! This is where books will go when you've finished reading
        them. Get started by heading over to the <Link to='/'>Discover</Link>{" "}
        page to add books to your list.
      </p>}
      {
        finishList?.map((book) => (<Book key={book.id} book={book} type={'finishList'} />))
      }
    </PageLayout>
  );
};

export default FinishedBooks;
