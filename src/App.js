import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='app-header'>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
      </header>
      <nav className='app-nav'>
        <ul>
          <li><a href="">Profile</a></li>
          <li><a href="">Message</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Music</a></li>
        </ul>
      </nav>
      <div className='app-content'>
        Main Content
      </div>
    </div>
  );
}

export default App;
