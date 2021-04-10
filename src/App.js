import logo from './logo.svg';
import Style from './App.module.css';
import RouterComponent from './Navigation/Router/Router';
import Footer from './components/Footer/Footer';
import Navlinks from './Navigation/Navlink/Navlinks'
function App() {
  let url5="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4000&q=3000"
  let url4="https://images.unsplash.com/photo-1558811916-51c8d56d29c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=1600"
  let url3="https://images.unsplash.com/photo-1613512410692-4e9cb89fb9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3252&q=2318"
  let url2="https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=1600"
  let url="https://images.unsplash.com/photo-1580397282348-9ab3f9d41a2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4896&q=3264"
  return (
    <div className={Style.App}>

      <img src={url5} className={Style.image}/>

    <div className={Style.navBar}>
            <Navlinks/>
    </div>


      <div className={Style.middleContent}>
      <RouterComponent/>
      </div>

      <div className={Style.footer}>
          <Footer/>
      </div>

      {/* <h1>Film nagar talkies</h1> */}
    </div>
  );
}

export default App;
