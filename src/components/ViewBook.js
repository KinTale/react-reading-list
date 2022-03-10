import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewBook() {
  const [book, setBook] = useState(false)

  const params = useParams()
  console.log(params)
  useEffect(() => {
    fetch(`http://localhost:4000/books/${params.id}`)
      .then(res => res.json())
      .then(book => setBook(book))
  }, [params])

  if (!book) {
    return <p>Loading</p>
  }

  const deleteBook = (e) => {
    console.log(e.target.value)

    const options = { method: 'DELETE' }

    fetch(`http://localhost:4000/books/${params.id}`, options)
    .then(res => res.json()) 
    .then(json => console.log('deleted', json))



  }
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.genre}</p>
      <p>{book.author}</p>
      <button onClick={deleteBook} value={book.id}>Delete</button>
    </div>
  )
}

export default ViewBook