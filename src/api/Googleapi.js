import axios from "axios";

const Googleapi = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages, sort = "relevance") => {
    console.log("okok")
    Googleapi.get("/volumes", {
        params: {
            q: SearchTerm,
            startIndex: ((page_number-1)*20),
            maxResults: 20,
            orderBy: sort,
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(response.data.totalItems/20);
    }).catch((error)=>{
        console.log(error)
    });
};

const getBooksById = (BookId, SetCurrentBook) => {
    Googleapi.get("/volumes/" + BookId)
        .then((response) => {
        console.log(response.data);
        SetCurrentBook(response.data);
    });
};

export { getBooksByTerm, getBooksById };
