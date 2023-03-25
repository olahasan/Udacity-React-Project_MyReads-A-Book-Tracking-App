import React from "react";
// import BookItem from './BookItem'


// - we will use function component and receive props from Main.js , inside it
const Read = ({All , Update}) => {


  /* 
    - we will create a variable its name shelfCase to show us which shelf it is
    - All = res in an Array (it was = [] as initial value but after we made a setAll it became[res])
    - because All = an Array so we can use declarative higher-order function
      like filter() to get a new array
    - e = every element inside the Array
    - shelf, is a key which stored inside it shelf name we got it from api
    - here we do not need all shelves we just need one shelf named = "read"
    - so we will loop on all array's items and retun only named = "read" if else, skip
    - if shelf's name = "read" return it . else,  skip
    - so now shelfCase = the shelf named = "read" which have 2 books
  */
  const shelfCase = All.filter((e)=>{
    return(e.shelf === "read")
  })
  
    return(
        // <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid"  >
                   {/* - so now shelfCase = the shelf named = "wantToRead" which have 2 books
                       - we will map on it because we do not need new array we just want Implement/perform a function
                  */}
                  {shelfCase.map((e)=>(
                    //  every List should have a unique key so we will use Math.random() or id 
                    <li key={Math.random()}>
                    <div className="book">
                   <div className="book-top">
                   <div
                       className="book-cover"
                       style={{
                       width: 128,
                       height: 193,
                       backgroundImage:
                        //i removed the static data and added this - e came from map - imageLinks.thumbnail came from API
                       `url(${e.imageLinks.thumbnail})`    
                   }}
                   ></div>
                   <div className="book-shelf-changer">
                    {/*
                      - we use defaultValue to find evry shelf focus on it is name
                      - e = every book on the shelf it came from the map
                      - onChange perform update function which we wrote it in App
                    */}
                     <select  defaultValue={e.shelf}  onChange={(c) => Update(e, c.target.value)}>
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
                     {/* ihave removed the static data and added this - e came from map - title / authors  came from API */}
                   <div className="book-title">{e.title}</div>
                   <div className="book-authors">{e.authors}</div>
               </div>
                    </li>
                    // <BookItem  All={All} Update={Update} />
                   ))}
                   
                  </ol>
                </div>
              </div>
        // </div>
    )
}

// Do not forget export Main by using export default and import it in Main.js 
export default Read