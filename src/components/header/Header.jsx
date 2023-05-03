/* Adapted from https://iconscout.com/ under the IconScout Simple License https://iconscout.com/licenses#simple_license*/

import './header.css';
import { UilHouseUser } from '@iconscout/react-unicons';
import { UilDocker } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import { UilSetting } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons';
import { UilAngleDoubleUp } from '@iconscout/react-unicons'

function Header({ onNav, theme, page }) {

    const logo__shadow = theme === "day" ? "black__shadow" : "white__shadow";
    const menu__logo__color = theme === "day" ? "menu__logo__color__white" : "menu__logo__color__black";
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const menu = [
        {
            name: "Home",
            path: "/",
            logo: <UilHouseUser size="40" />,
        },
        {
            name: "Portfolio",
            path: "/portfolio.html",
            logo: <UilDocker size="45" />,
        },
        {
            name: "Setting",
            path: "/setting.html",
            logo: <UilSetting size="40" />,
        },
    ];

    window.addEventListener('mousemove', (e) => {
        const pageY = e.pageY % 58;

        setCursorY(pageY)
        setCursorX(e.pageX)

    })

    //make an element unclickable
    const handleClick = event => {
        event.currentTarget.disabled = true;
        // console.log('button clicked');
    };

    const list = menu.map(item => {

        page = item.logo
        return (
            <a
                className={menu__logo__color}
                href={item.path}
                onClick={onNav}
                key={item.name}
                aria-label="menu item"
            >
                {/* {item.logo} */}
                {item.name}
            </a>
        );
    });


console.log("in this page:"+page);
    const [miniMenu, setMiniMenu] = useState(false);
    const [width, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        const width = window.innerWidth
        setWindowWidth(width)
        // console.log("width:" + width);
    })

    const miniPageWidth = 43 * 18;

    const nav__mode = width < miniPageWidth ? "nav__menu--close" : "nav__menu";

    const cursorState = width < miniPageWidth ? "cursor--close" : "cursor";

    const mini__menu = width < miniPageWidth ? "mini__menu--open" : "mini__menu--close";

    const fold__logo = miniMenu ? <UilAngleDoubleUp color="grey" size="35" /> : <UilApps color="grey" size="36" />;

    const dragMode = miniMenu && width < miniPageWidth ? "drag__down" : "drag__up";


    console.log("header theme is " + theme);

    return (
        <header className="header">
            <a href="/" className={`nav__logo ${logo__shadow}`} 
            onClick={onNav} 
            aria-label="move to home page"
            >PEGGY LIAO</a>

            <div className={nav__mode}>

                {list}

                <div className={cursorState}
                    style={{
                        left: cursorX + 'px',
                        top: cursorY + 'px'
                    }}>

                </div>
            </div>


            <button className={mini__menu} onClick={() => {
                setMiniMenu(!miniMenu);
            }}   aria-label={miniMenu ? "mini menu logo wait to fold" : "mini menu logo wait to open"}>
                {fold__logo}
            </button>

            <div className={dragMode}>
                {list}
            </div>
        </header >
    );

    // return (
    //     <header className="header">
    //         <a href="index.html" className="nav__logo">PEGGY LIAO</a>

    //         {/* <div className="nav__menu"> */}
    //         <div className={menu__mode}>

    //             {/* <a href="/" className="nav__item home" onClick={onNav} key={Home}>
    //                 <div className="item__logo"><UilHouseUser size="40" /></div>
    //                 <h2>Home</h2>
    //             </a>

    //             <a href="/portfolio.html" className="nav__item portfolio" onClick={onNav} key={Portfolio}>
    //                 <div className="item__logo"><UilDocker size="45" /></div>
    //                 <h2>Portfolio</h2>
    //             </a>

    //              <a href="contact" className="nav__item contact">
    //                 <div className="item__logo"><UilEnvelopeHeart size="40" /></div>
    //                 <h2>Contact Me</h2>
    //             </a>  

    //             <a href="/setting.html" className="nav__item setting" onClick={onNav}>
    //                 <div className="item__logo"><UilSetting size="40" /></div>
    //                 <h2>Setting</h2>
    //             </a> */}

    //             {list}

    //         </div>
    //     </header>
    // )

}

export default Header;