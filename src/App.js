import './App.scss';
import Row from './components/Row';
import requests from './components/requests';

function App() {
  return (
    <div>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
