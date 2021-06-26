import BooksContainer from "./containers/BooksContainer";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      < Router >
        <NavBar />
        < BooksContainer />
        {/* news */}
      </Router>
    </div>
  );
}

export default App;
