import { useQuery, gql } from '@apollo/client';
import './AllMovies.css';

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
    const {loading, error, data} = useQuery(GET_MOVIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
      <div>
        {
          data.getMovies.map((movie) => {
            return (
              <div className='Movie'>
                  <button>
                      {movie.title}
                  </button>
              </div>
            )
          })
        }
      </div>
    );
}

export default AllMovies;