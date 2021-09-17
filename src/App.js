import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
