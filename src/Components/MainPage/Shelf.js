import React from "react";
import BookItem from './BookItem'

const Shelf = ({Name , Id , All , Update }) => {
    return (
        // <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{Name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                        
                        {All.map(book=> 
                          <BookItem key={book.id} book={book} Update={Update} Id={Id}/>
                        )}



                   {/* {shelfCase.map((e)=>(
                    <li key={Math.random()}>
                    <div className="book">
                   <div className="book-top">
                   <div
                       className="book-cover"
                       style={{
                       width: 128,
                       height: 193,
                       backgroundImage:
                       `url(${e.imageLinks.thumbnail})`    
                   }}
                   ></div>
                   <div className="book-shelf-changer">
                     <select  defaultValue={e.shelf}  onChange={(c) => changeBookShelf(e, c.target.value)}>
                       <option value="none" disabled>
                           Move to...
                       </option>
                       <option value="currentlyReading">
                           Currently Reading
                       </option>
                       <option value="wantToRead">Want to Read</option>
                       <option value="read">Read</option>
                       <option value="none">None</option>
                     </select>
                   </div>
                   </div>
                   <div className="book-title">{e.title}</div>
                   <div className="book-authors">{e.authors}</div>
               </div>
                    </li>
                   ))}  */}
                      
                  </ol>
                </div>
              </div>
        // </div>
    )
}

export default Shelf 