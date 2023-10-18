const MovieItem = ({ id, title, deleteMovie }) => {
  return (
    <>
      <li>{title}</li>
      <button onClick={() => deleteMovie(id)} className="btn btn-danger">
        Delete
      </button>
    </>
  )
}
export default MovieItem
