import './MovieCard.css'

function MovieCard({data}) {
    return (
        <div class="card">
            <div class="card-content">
                <h3 class="movie-title">{data.title}</h3>
                <p class="movie-year">{data.year}</p>
            </div>
        </div>
    )
}

export default MovieCard;