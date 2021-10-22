import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <div className="app-content">
          <Route
            path='/home'
            render={ () => <Home state={props.state.homePage.posts} addPost={props.addPost}/> }
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
