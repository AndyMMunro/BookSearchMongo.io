import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Nav from "./components/Nav";
import JumbotronBook from "./components/Jumbotron"
import BookSearch from "./pages/BookSearch";
import SavedBooks from "./pages/SavedBooks";


function App() {
  // console.log("hope this works");
  return (
    <Router>
      <Container>
        <Nav />
          <JumbotronBook/>
            <Route exact path="/" component={BookSearch} />
            <Route exact path="/Saved" component={SavedBooks} />
      </Container>
    </Router>
  );
}

export default App;