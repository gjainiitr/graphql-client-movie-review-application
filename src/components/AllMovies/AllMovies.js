import { useQuery, gql } from '@apollo/client';
import './AllMovies.modules.css';
import MovieCard from '../MovieCard/MovieCard';

const GET_MOVIES = gql`
  query GetMovies {
    getMovies {
      id
      title
      year
      rating
      genres
    }
  }
`;

function AllMovies({setMovieId, setCurrentPage}) {
    const {loading, error, data} = useQuery(GET_MOVIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <div>
        {
          data.getMovies.map((movie) => {
            return <MovieCard data={movie} setMovieId={setMovieId} setCurrentPage={setCurrentPage} />
          })
        }
      </div>
    );
}

export default AllMovies;