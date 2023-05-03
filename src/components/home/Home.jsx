import Main from './Main.jsx';
import Setting from '../header/Setting';
import Portfolio from '../header/Portfolio.jsx';
import Sidebar from './Sidebar.jsx';

function Home({ page , onNav,  theme, onTheme}) {

    return (
        <>
        <Sidebar />
        {(page === '/') && <Main onNav={onNav}/>}
        {(page === '/setting.html') && <Setting  theme={theme} onTheme={onTheme} />}
        {(page === '/portfolio.html') && <Portfolio />}

        </>
    )
}

export default Home;