import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import city from "./pages/city";
import home from "./pages/home";
import Nav from "./component/layout/Navbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObject from "./util/theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import Movie from './component/Movie'

const theme = createMuiTheme(themeObject);
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/city" component={city} />
              <Route exact path="/movie/:movieTitle" component={Movie} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
