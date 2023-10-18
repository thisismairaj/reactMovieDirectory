import MovieItem from "./MovieItem"

const Movieslist = ({ movies, deleteMovie }) => {
  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {movies.map((movie) => {
          return (
            <MovieItem {...movie} key={movie.id} deleteMovie={deleteMovie} />
          )
        })}
      </ul>
    </section>
  )
}

export default Movieslist
