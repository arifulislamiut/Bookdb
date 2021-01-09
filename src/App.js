import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import BookList from "./components/BookList";
import ReactPaginate from 'react-paginate';
import { getBooksByTerm } from "./api/Googleapi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const nextPage = async (page_number) => {
    await getBooksByTerm(searchTerm, setBooks, page_number.selected+1, setTotalPages);
    setCurrentPage(page_number.selected+1);
  };

  const sortbooks = async (sort) => {
    await getBooksByTerm(searchTerm, setBooks, 1, setTotalPages, sort);
  }

  return (
      <div>
        <div>
        <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
        {totalPages > 1 ? (
            <div className="row">
              <div className="col s2 offset-s8">
                <select onSelect={async ()=>{
                    console.log("hi")
                }} className="browser-default">
                  <option value="" disabled selected>Sort</option>
                  <option value="1" onSelect={async () => {
                      console.log("opop")
                      await sortbooks("relevance");
                  }}>by relevance</option>
                  <option value="2" onClick={async () => {
                      await sortbooks("newest");
                  }}>by newest</option>
                </select>
              </div>
            </div>) : ("")
        }
        <BookList books={books} />
        {totalPages > 1 ? (
            <div align="center">
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={nextPage}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
            </div>
        ) : (
            ""
        )}
        </div>
      </div>
  );
};

export default App;
