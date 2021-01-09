import React,{useState, useEffect} from "react";
import {getBooksById} from "../api/Googleapi";
import {Link} from "react-router-dom";

const BookDetails = (props) => {
    console.log(props);
    const [currentBook, SetCurrentBook] = useState({});
    let ImageURL;
    useEffect(() =>{
        getBooksById(props.match.params.id, SetCurrentBook);
        console.log(currentBook);
    },[])

    if (currentBook.volumeInfo == undefined){
        return (<div className="card center">Loading... Please wait</div>)
    }else {
        if (currentBook.volumeInfo.imageLinks == undefined) {
            ImageURL = null;
        } else {
            ImageURL = currentBook.volumeInfo.imageLinks.thumbnail;
        }
        return (
            <div>
                <div className="row">
                    <div className="col s10 m3">
                        <div className="card" onClick={() => {
                        }}>
                            <div className="card-image">
                                {ImageURL == null ? (
                                    <img
                                        src="https://picsum.photos/200/300"
                                        alt=""
                                        style={{width: "80", height: "150"}}
                                    />
                                ) : (
                                    <img
                                        src={ImageURL}
                                        alt=""
                                        style={{width: "80", height: "150"}}
                                    />
                                )}
                            </div>
                            <div className="card-content">
                                <p><b>{currentBook.volumeInfo.title} </b></p>
                                By {currentBook.volumeInfo.authors ? (currentBook.volumeInfo.authors.join(', ')):("")}

                            </div>
                            <div className="card-action">
                                <Link to="/">Go to search page</Link>
                            </div>
                        </div>
                    </div>
                    <div style={{margin: 30}}>
                        <div>
                            <p><b>Description:</b></p>
                            <div dangerouslySetInnerHTML={{ __html: currentBook.volumeInfo.description }} />
                        </div>
                        <div>
                            <p><b>Caterories:</b></p>
                            <p>{currentBook.volumeInfo.categories ? (currentBook.volumeInfo.categories.join(', ')):("")}</p>
                        </div>
                        <div>
                            <p><b>Publisher:</b> {currentBook.volumeInfo.publisher}</p>
                            <p><b>Published Date:</b> {currentBook.volumeInfo.publishedDate}</p>
                            <p><b>Language:</b> {currentBook.volumeInfo.language}</p>
                            <p><b>Total page:</b> {currentBook.volumeInfo.pageCount}</p>
                            <p><b>Average Rating:</b> {currentBook.volumeInfo.averageRating}</p>
                            <p><b>Ratings Count:</b> {currentBook.volumeInfo.ratingsCount}</p>
                            <button className="waves-effect waves-light btn" onClick={()=>{
                                window.open(currentBook.volumeInfo.previewLink);
                            }}>View in Google</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BookDetails;
