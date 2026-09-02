import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Style from './App.module.css';
import RouterComponent from './Navigation/Router/Router';
import Footer from './components/Footer/Footer';
import Navlinks from './Navigation/Navlink/Navlinks';

const App = () => {

  useEffect(() => {
    scroll.scrollToTop();
  }, [])

  return (
    <div className={Style.App}>

      <div className={Style.navBar}>
        <Navlinks />
      </div>

      <div className={Style.middleContent}>
        <RouterComponent />
      </div>

      <div className={Style.footer}>
        <Footer />
      </div>

    </div>
  );
}

export default App;
