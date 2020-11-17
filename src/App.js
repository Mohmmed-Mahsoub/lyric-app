import "./App.css";
import Nav from "./components/nav";
import Search from "./components/Search";
import Tracks from "./components/Tracks";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Search />
        <Tracks />
      </div>
    </div>
  );
}

export default App;
