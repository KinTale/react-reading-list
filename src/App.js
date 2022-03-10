import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import BooksList from './components/BooksList';

import { Link } from 'react-router-dom';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(books => setBooks(books))
  }, [])

  console.log(books)

  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li> <Link to="/book/add">Add Book </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<BooksList books={books} />} />
        <Route path='/book/add' element={<AddBook books={books} setBooks={setBooks}/>} />
      <Route path='/book/:id' element={<ViewBook/> }/>
      </Routes>
    </div>
  );
}

export default App;
