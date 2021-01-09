import React from "react";
import Book from "./Book";

const BookList = (props) => {
    console.log(props.books);
    if (props.books == undefined){
        return <div></div>;
    }else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {
                            props.books.map((book, i) => {
                                return <Book data={book} key={i}/>;
                            })}
                    </div>
                </div>
            </div>
        );
    }
};

export default BookList;
