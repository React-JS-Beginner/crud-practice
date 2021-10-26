import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddReview from "./Components/AddReview/AddReview";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Reviews from "./Components/Reviews/Reviews";
import "./App.css";
import SingleComment from "./Components/SingleComment/SingleComment";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Reviews></Reviews>
            </Route>

            <Route path="/addreview">
              <AddReview></AddReview>
            </Route>

            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>

            <Route path="/comments/:id">
              <SingleComment></SingleComment>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
