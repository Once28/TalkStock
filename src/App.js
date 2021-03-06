import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import { NavBar } from './Components/NavBar/NavBar.js';
import { Main } from './Components/Main/Main.js';
import { About } from './Components/About/About.js';
import { Footer } from './Components/Contact/Footer.js';
import { NewsAnalytics } from './Components/News Analytics/NewsAnalytics.js';

function App() {
  let windowMatch = window.matchMedia("(min-width: 768px)");
  if (windowMatch.matches){
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/Main">
            <Main />
            <About />
          </Route>
          {/* <Route path="/TwitterAnalytics">
            <TwitterAnalytics />
          </Route> */}
          <Route path="/NewsAnalytics">
            <NewsAnalytics />
          </Route>
          {/* <Route path="/RedditAnalytics">
            <RedditAnalytics />
          </Route> */}
          <Route exact path="/">
            <Redirect to="/Main" />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter> 
    );
  } else {
    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/Main">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/TwitterAnalytics">
          <TwitterAnalytics />
        </Route> */}
        <Route path="/NewsAnalytics">
          <NewsAnalytics />
        </Route>
        {/* <Route path="/RedditAnalytics">
          <RedditAnalytics />
        </Route> */}
        <Route exact path="/">
          <Redirect to="/Main" />
        </Route>
      </BrowserRouter> 
    );
  }
  
}

export default App;
