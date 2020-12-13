import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/Home";
import Lyric from "./components/Lyric";
import ContextProvider from "./context";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <ContextProvider>
          <Route path="/track/lyric/:id" component={Lyric} />
          <Route path="/" exact component={Home} />
          <Redirect from="/lyric-app" to="/" />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
