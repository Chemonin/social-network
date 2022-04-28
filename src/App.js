import './styles/App.scss'
import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

const App = (props) => {

  return (
    <BrowserRouter>
        <MainNav/>
        <Switch>
          <Route
            path='/'
            exact={'/'}
            render={ () => <Home
              homePage={props.state.homePage}
              dispatch={props.dispatch}
            /> }
          />
          <Route
            path='/dialogs'
            render={ () => <Dialogs state={props.state.dialogsPage} /> }
          />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
