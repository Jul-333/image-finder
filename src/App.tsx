import { useEffect, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage";
import { getLocalStorage, setLocalStorage } from "./utils/localStorageManager";
import { addBookmark } from "./redux/actions/actions";
import { ImagesType } from "./redux/typesTS";
import { InitialStateType } from "./redux/reducer";
import theme from "./utils/ThemeMaterialUI";
import { useDispatch, useSelector } from "react-redux";

const App: FC = () => {
  const dispatch = useDispatch()
  const bookmarks = useSelector((state: InitialStateType) => state.bookmarks)

  useEffect(() => {
    const bookmarksFromLocalStorage: [] | Array<ImagesType> = getLocalStorage();
    bookmarksFromLocalStorage.length !== 0 && dispatch(addBookmark(bookmarksFromLocalStorage));
  }, [dispatch]);

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

export default App;
