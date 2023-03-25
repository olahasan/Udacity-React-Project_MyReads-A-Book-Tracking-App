import React from "react";

const BookItem  = ({book , Update , Id  }) => {

    // const shelfCase = All.filter((e)=>{
    //     return(e.shelf === "currentlyReading")
    // })

    return(
        // <div>

        //  {shelfCase.map((e)=>(

        //     <li key={Math.random()}>
                <div className="book">
                    <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        // 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                        // `url(${e.imageLinks.thumbnail})`
                        `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`

                        }}
                    ></div>
                    <div className="book-shelf-changer">

                    <select  onChange={(e)=> Update(book , e.target.value)} value={Id}>

                    {/* <select  defaultValue={e.shelf}  onChange={(c) => Update(e, c.target.value)} > */}

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
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
        //     </li>

        //   ))}

        // </div>
    )
}

export default BookItem