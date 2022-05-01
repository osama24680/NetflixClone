import './App.css';
import Row from "./Row"
import request from "./Request"
import Banner from "./Banner"
import Navbar from "./Navbar"
function App() {
  return (

    <div className="App">
      <Navbar />
      <Banner />
      <div className="allCate">
        <Row isLargeRow title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchTrending} />
        <Row title="Documantries" fetchUrl={request.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
