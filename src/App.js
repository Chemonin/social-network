import './styles/App.scss'
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import MainNav from "./components/Navbar/MainNav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {updateNewPostText} from "./redux/state";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

  return (
    <BrowserRouter>
        <MainNav/>
        <Switch className="app-content">
          <Route
            path='/home'
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
