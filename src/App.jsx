import "./App.css"
import "h8k-components"

import { Movieform, Movieslist, Search } from "./components"
import { useState, useEffect } from "react"
const title1 = "Favorite Movies Directory"

function App() {
  const [movies, setMovies] = useState(() => {
    const localValue = localStorage.getItem("MOVIES")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("MOVIES", JSON.stringify(movies))
  }, [movies])

  function addMovie(title) {
    setMovies((currentMovies) => {
      return [...currentMovies, { id: crypto.randomUUID(), title }]
    })
  }
  function deleteMovie(id) {
    setMovies((currentMovies) => {
      return currentMovies.filter((movie) => movie.id !== id)
    })
  }

  return (
    <div>
      <h8k-navbar header={title1} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform onSubmit={addMovie} />
        </div>
        <div className="layout-column w-30">
          <Search />
          <Movieslist movies={movies} deleteMovie={deleteMovie} />

          {movies.length === 0 && (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
