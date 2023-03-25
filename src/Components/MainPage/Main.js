import React from "react";
/*
  - import all components which i want to appear on main page screen
  - ./ refers to  too close to Main.js
  - ../ refers to  far from  Main.js so we use ../ to go out from MainPage folder 
        and be inside in Components folder and then decide folder which
         i need to open and choose the file from it
*/
import Header from "../Header/Header"
// import Currently from './CurrentlyBookShelf'
// import Want from './WantBookShelf'
// import Read from './ReadBookShelf'
import Shelf from './Shelf'
import SearchIcon from '../SearchIcon/SearchIcon'



/* 
  - we will use function component instead of class based component  so we do not need Render()
  - we can write  Main = (props)   or   Main = ({All , Update})
  - if we write it like  Main = (props) we receive props like this All={props.All}
  - but if write it like  Main = ({All , Update}) we receive props like this All={All}
*/
// we receive props here from App
const Main = ({All , Update}) => {

    return(
      <div>
        <div className="list-books">
          <Header />

          <div className="list-books-content">
            <div>
               {/* we pass all props which we received them from app
                to each component(if required) as props
                to receive them on each page separately
                but we can avoid that (transmission from father to child to child to child) 
                by using redux or usecontext */}

              {/* <Currently  All={All} Update={Update}/>
                  <Want  All={All} Update={Update}/>
                  <Read  All={All} Update={Update}/> */}


              <Shelf Name='Currently Reading' Id='currentlyReading'  All={All.filter((book)=>book.shelf === 'currentlyReading')}   Update={Update}/>
              <Shelf Name='Want to Read'      Id='wantToRead'        All={All.filter((book)=>book.shelf === 'wantToRead')}         Update={Update}/>
              <Shelf Name='Read'              Id='read'              All={All.filter((book)=>book.shelf === 'read')}               Update={Update}/>
            
            </div>
          </div>

          <SearchIcon />
        </div>
      </div>
    )
}


// Do not forget export Main by using export default and import it in App.js 
export default Main