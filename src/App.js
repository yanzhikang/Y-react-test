// import logo from './logo.svg';
import Xin from './assets/images/xiaoxin.jpg'
import { Button } from 'antd';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Xin} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Test
        </a>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
