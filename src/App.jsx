import './app.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Footer from './components/footer/Footer.jsx';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState('/');
  const [theme, setTheme] = useState("day");

  function onTheme(mode) {
    console.log(mode);
      setTheme(mode);
  }

  function onNav(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    console.log("target:" + target);
    setPage(target);
    console.log("page:" + page);
  }

  // console.log("the theme is "+ theme)

  return (
    <div className={theme}>

      <div className="app">

        <div class="skip-content">
          <a class="skip-to-content-link" href="">
            Skip to centent
          </a>
        </div>

        <Header onNav={onNav} theme={theme} page={page}/>
        <Home page={page} onNav={onNav} theme={theme} onTheme={onTheme}/>
        <Footer />
      </div>

    </div>

  );

}

export default App;
