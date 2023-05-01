import { useQuery, gql } from '@apollo/client';
import './AllMovies.css';
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

function AllMovies() {

    // Commenting now as playing with hard coded data for now
    // const {loading, error, data} = useQuery(GET_MOVIES);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
  
    const data = [
      {
        id: 1,
        title: "Ghajini",
        year: 2008,
        rating: 7.3,
        genres: ["Action", "Drama", "Mystrey", "Romance", "Thriller"]
      },
      {
        id: 2,
        title: "Om Shanti Om",
        year: 2007,
        rating: 6.7,
        genres: ["Action", "Comedy", "Drama", "Fantasy"]
      }
    ];

    return (
      <div>
        {
          data.map((movie) => {
            return <MovieCard data={movie} />
          })
        }
      </div>
    );
}

export default AllMovies;