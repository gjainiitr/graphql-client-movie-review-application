import './MovieCard.css'

function MovieCard({data, setMovieId, setCurrentPage}) {

    function HandleMovieClick() {
        setCurrentPage("SingleMovie");
        setMovieId(data.id);
    }

    return (
        <div className="card" onClick={HandleMovieClick}>
            <div className="card-content">
                <h3 className="movie-title">{data.title}</h3>
                <p className="movie-year">{data.year}</p>
            </div>
        </div>
    )
}

export default MovieCard;