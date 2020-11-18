import "./App.css";
import Nav from "./components/nav";
import Search from "./components/Search";
import Tracks from "./components/Tracks";
import ContextProvider from "./context";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <ContextProvider>
          <Search />
          <Tracks />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
