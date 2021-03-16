import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/SingleMovie/SingleMovie.component"
import SingleMovie from "./components/SingleMovie/SingleMovie.component";
import Movies from "./components/Movies/Movies.component";
// import Home from "./components/Home/Home.component";

        

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/form" component={Form} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/SingleMovie/:id" component={SingleMovie} />
          <Route exact path="/backdrop_path/:id" component={SingleMovie} />
        </Switch>
      </div>
    </Router>
  );
}

// function movies() {
//   return Movies.map(movies(item)) {
//     return (
//       <div key={item.objectID}>
//       <span>
//       <a href={item.url}>{item.title}</a>
//       </span>
     
//       </div>
//     );
//   }
// }


export default App;
