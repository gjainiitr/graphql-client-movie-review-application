import { useQuery, gql } from '@apollo/client';
import styles from "./SingleMovie.module.css";

const GET_MOVIE_FROM_ID = gql`
    query GetMovies($movieId: ID!) {
        getMovie(movieId: $movieId) {
            details {
                genres
                id
                rating
                title
                year
            }
            reviews {
                comment
                movieId
                rating
                reviewId
                userId
            }
        }
    }
`;

function SingleMovie({movieId}) {
    const { loading, error, data } = useQuery(GET_MOVIE_FROM_ID, {
        variables: { movieId: movieId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data.getMovie);

    return (
        <div>This is a single movie with id {movieId}</div>
    )
}

export default SingleMovie;