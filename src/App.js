import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/ThemeMaterialUI";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage";
import { connect } from "react-redux";
import { getLocalStorage, setLocalStorage } from "./utils/localStorageManager";
import { addBookmark } from "./redux/actions/actions";

const App = ({ bookmarks, addBookmark }) => {
  useEffect(() => {
    const bookmarks = getLocalStorage();
    bookmarks && addBookmark(bookmarks);
  }, []);

  useEffect(() => {
    setLocalStorage(bookmarks);
  }, [bookmarks]);

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <Header />

          <main className="main">
            <NavigationMenu />

            <Switch>
              <Route exact path="/">
                <SearchPage />
              </Route>
              <Route exact path="/bookmarks">
                <BookmarksPage />
              </Route>
            </Switch>
          </main>

          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
});

const mapDispatchToProps = {
  addBookmark,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
