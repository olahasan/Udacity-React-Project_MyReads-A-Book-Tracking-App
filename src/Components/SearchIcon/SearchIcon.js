import React from "react";
// we should inatall react-router-dom to be able to use Link  
import { Link } from "react-router-dom";

const SearchIcon = () => {
    return(
        <div>
           <div className="open-search">
             {/* we use Link , instead of <a></a> and to , instead of href or onClick.
                 to, take us to the pass .so we do not need onClick .
                 and we do not want use href because we do not wanna any interact with servser
                 */}
            <Link to="/Search">Add a book</Link>
            {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
          </div>
        </div>
    )
}

// Do not forget export SearchIcon by using export default and import it in Main.js 
export default SearchIcon