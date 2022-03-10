import { useState } from "react"

function AddBook(props) {

  const { setBooks, books } = props
  const stateReset = {
    title: '',
    author: '',
    genre: 'Horror'
  }

  const [form, setForm] = useState(stateReset)


  const titleInput = (e) => {
    const dataCopy = { ...form }
    dataCopy.title = e.target.value
    setForm(dataCopy)
  }

  const authorInput = (e) => {
    const dataCopy = { ...form }
    dataCopy.author = e.target.value
    setForm(dataCopy)
  }
  const genreInput = (e) => {
    const dataCopy = { ...form }
    dataCopy.genre = e.target.value
    setForm(dataCopy)
  }


  const onSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    fetch('http://localhost:4000/books', options)
      .then(res => res.json())
      .then(json => setBooks([...books, json]))

    console.log(form)
    setForm(stateReset)
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Book</h2>

      <label>Title
        <input onChange={titleInput} value={form.title}
          id="title" name="title" type="text" required />
      </label>

      <label>Author
        <input onChange={authorInput} value={form.author}
          id="author" name="author" type="text" required />
      </label>

      <label>Genre
        <select onChange={genreInput} value={form.genre}
          id="title" name="title" required>
          <option>Horror</option>
          <option>Science Fiction</option>
          <option>Nonfiction</option>
          <option>History</option>
          <option>Thriller</option>
        </select>
      </label>

      <div>
        <button type="submit">
          Add
        </button>
      </div>
    </form>
  )
}

export default AddBook
