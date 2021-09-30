import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <div className="app-content">
          <Route path='/home'  component={Home}/>
          <Route path='/dialogs' component={Dialogs}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
