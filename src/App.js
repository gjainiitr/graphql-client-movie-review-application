import './App.css';
import { useQuery, gql } from '@apollo/client';

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

function App() {

  const {loading, error, data} = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {
        data.getMovies.map((movie) => {
          return (
            <div>{movie.title}</div>
          )
        })
      }
    </div>
  );
}

export default App;
