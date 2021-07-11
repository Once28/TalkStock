import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import { NavBar } from './Components/NavBar/NavBar.js';
import { Main } from './Components/Main/Main.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/Main">
        <Main />
        {/* <About /> */}
      </Route>
      {/* <Route path="/TwitterAnalytics">
        <TwitterAnalytics />
      </Route>
      <Route path="/NewsAnalytics">
        <NewsAnalytics />
      </Route>
      <Route path="/RedditAnalytics">
        <RedditAnalytics />
      </Route> */}
      <Route exact path="/">
        <Redirect to="/Main" />
      </Route>
    </BrowserRouter> 
  );
}

export default App;
