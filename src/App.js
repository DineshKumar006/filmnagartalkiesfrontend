import logo from './logo.svg';
import './App.css';
import RouterComponent from './Navigation/Router/Router';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
      <RouterComponent/>
      </div>

      <div className="footer">
          <Footer/>
      </div>

      {/* <h1>Film nagar talkies</h1> */}
    </div>
  );
}

export default App;
