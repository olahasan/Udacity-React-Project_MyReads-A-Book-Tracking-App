import "./App.css";
// when we import Main/Search file we do not need write {Main} or {Search} because it came from export default  not export and './' refers to SRC folder
import Main from './Components/MainPage/Main'
import Search from './Components/SearchPage/Search'
/* 
to use { Route , Routes } you should firstly write in terminal npm install react-router-dom 
then import them from "react-router-dom" .
-we use Routes to work as a parent for every single Route 
-Route is refers to a child and every Route should be wrapped in Routes
*/
import { Route , Routes } from "react-router-dom";
// in our project we will use Hooks so we need to use useState instead of state  and useEffect instead of ComponentDidMount or all lifeCycle
import { useState , useEffect } from "react";
// * allow us to access each item in the BooksAPI and we should import it before using it
import * as BooksAPI from './BooksAPI'


/* 
we will use function component instead of class based component
and using hooks will help us to use state an lifecycle inside function component
but in the form of useState and useEffect
*/
const App = () => {

  // we will use setstate create a state 'All' with initial value an empty array
   const [All , setAll]  = useState([])


// Get 
  /*
    - we will create a function and get the data inside it using a way from many ways
      (async/await) - (then/catch) - (fetch) ...
    - we will update state using setAll  and instead of empty array it will equel res 
    -do not forget to call the function at the end 
  */
const GetAllBooks =() => {
      const getContacts = async () => {
      const res = await BooksAPI.getAll();
      setAll(res);
    }
    getContacts()

  // BooksAPI.getAll().then((res) => {
  //   setAll( res );
  // });
}

  /*
    - i wanna say after the component render and every thing is okay 
      then call the function which we create it in line  36  
    - if we were using class based componet that will be ComponentDidMount/lifecycle
    - but now in function component and with Hooks it called useEffect
    - we should use empty array to prevent infinite loop
  */
useEffect(()=>{
  GetAllBooks()
},[])



 // Update 
    // - i will update the data which i got it in line 36 using BooksAPI.update for update 
 const Update = (book, shelf) => {
  BooksAPI.update(book, shelf).then(updateBooks => {
    GetAllBooks();
  })
 }

  // we do not need to write a render() because it is a function component
  return (
    /*
      - because we write a jsx we should wrap  all elements inside one parent
      - before using Routes and Route we should wrap App.js in BrowserRourer which is in index.js file
      - path="/" refers to home  and path="/Search" refers to search component
      - element refers to component which will appear on screen when the path match with its url
      -inside every component should i pass state and books after updated(Update) as props and i will receive it inside component page
      */
    <div className="app">
      <Routes>
        <Route path="/" element={<Main All={All}  Update={Update}/>} />
        <Route path="/Search" element={<Search  All={All} Update={Update}/>} />
      </Routes>
    </div>
  );
}




// Do not forget export App by using export default 
// and import it in index.js inside root element
export default App 
