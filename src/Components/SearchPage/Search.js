import React from "react";
// we should inatall react-router-dom to be able to use Link
import { Link } from "react-router-dom";
// in our project we will use Hooks so we need to use useState instead of state  
import { useState } from "react";
/* allow us to access each item in the BooksAPI and we should import it before using it
  ../ refers to  far from  BookApi.so we use ../ to go out from SearchPage folder
      now we are in Components folder.so we use ../ to go out from Components folder
      now we are in src folder.
   ./ choose any file. what you want from src folder    

   1= ../ get out from SearchPage folder
   2= ../ get out from Components folder
   3= ./ get into src folder
   4= chooce the file
*/
import BookItem from  '../MainPage/BookItem'
import * as BooksAPI from '../.././BooksAPI'



/* 
  - we will use function component instead of class based component  so we do not need Render()
  - we can write  Main = (props)   or   Main = ({All , Update})
  - if we write it like  Main = (props) we receive props like this All={props.All}
  - but if write it like  Main = ({All , Update}) we receive props like this All={All}
*/
// we receive props here from App
const Search = ({All , Update }) => {

    // we will use setstate create a state 'query' with initial value an empty string
    const [query , setquery]  = useState('')
    // we will use setstate create a state 'Search' with initial value an empty array
    const [Search , setSearch]  = useState([])

    // we create an arrow function which is take a query and update it und call updateSearch function
    const updateQuery = (query) => {
        setquery(query)
        updateSearch(query)
    }
    
    //we create an updateSearch function takes query and if it true, return books from api. if else, set the state with [] 
    const updateSearch = (query) => {
        if (query) {
            BooksAPI.search(query).then((Search) => {
                setSearch(Search.error ? [] : Search)
            }) 
        } else {
            setSearch([])
        }

        // query ? (
        //     BooksAPI.search(query).then((Search) => {
        //         setSearch(Search.error ? [] : Search)
        //     })
        // ) : (setSearch([]))
    }

    return(
        // <div>
            <div className="search-books">
                    <div className="search-books-bar">
                        {/* we use Link, instead of <a></a> and to, instead of href or onClick.
                            to, take us to the pass. so we do not need onClick .
                            and we do not want use href because we do not wanna any interact with servser
                            / refers to home/main page
                            */}
                        <Link to="/" className="close-search">Close</Link>
                        {/* <a
                        className="close-search"
                        onClick={() => setShowSearchpage(!showSearchPage)}
                        >
                        Close
                        </a> */}
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title, author, or ISBN"
                                // value always = the state
                                value={query}
                                //on change create a function which run updateQuery . 
                                // instead of query let it take the value for the element
                                onChange={(e) => updateQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {/* we loop on the search array  */}
                            {Search.map(c => {
                                
                                // make all book in default value = none
                                // and when we chage it .it will change to = the value which we have chosen
                                let defaultValue = 'none';
     
                                /*
                                   we loop on all books
                                   if id of book = id of book that we search for .return it with default value = the name of shef .else, skip
                                 */
                                All.map(e => (
                                    e.id === c.id ? (defaultValue = e.shelf) : ''
                                ))

                                return (
                                    // every list should have a unique key 
                                    // <li key={Math.random()}>
                                    //         <div className="book">
                                    //             <div className="book-top">
                                    //             <div
                                    //                 className="book-cover"
                                    //                 style={{
                                    //                 width: 128,
                                    //                 height: 193,
                                    //                 backgroundImage:
                                    //                 //we take the thumbnail from Search.imageLinks to be dynamic value
                                    //                 `url("${Search.imageLinks ? Search.imageLinks.thumbnail : ''}")`    
                                    //             }}
                                    //             ></div>
                                    //             <div className="book-shelf-changer">
                                    //                 {/* on change,call update function and put value = defaultValue which was none and now we update it to = (e.shelf) */}
                                    //                 <select  onChange={(c) => Update(Search, c.target.value)} value={defaultValue} >
                                    //                 <option value="none" disabled>
                                    //                     Move to...
                                    //                 </option>
                                    //                 <option value="currentlyReading">
                                    //                     Currently Reading
                                    //                 </option>
                                    //                 <option value="wantToRead">Want to Read</option>
                                    //                 <option value="read">Read</option>
                                    //                 <option value="none">None</option>
                                    //                 </select>
                                    //             </div>
                                    //             </div>
                                    //                {/* loop on every search array'elemnt and take the title/ authors to be dynamic not static data */}
                                    //             <div className="book-title">{Search.title}</div>
                                    //             <div className="book-authors">{Search.authors}</div>
                                    //         </div>
                                    // </li>

                                    <li key={c.id}>
                                        <BookItem book={c} Update={Update} Id={defaultValue}/>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
            </div>
        // </div>
    )
}

// Do not forget export Search by using export default and import it in App.js 
export default Search