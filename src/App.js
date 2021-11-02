import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <div className="app-content">
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
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
