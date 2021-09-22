import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
