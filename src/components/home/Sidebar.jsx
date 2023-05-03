/* Adapted from https://iconscout.com/ under the IconScout Simple License https://iconscout.com/licenses#simple_license*/

import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilYoutube } from '@iconscout/react-unicons';
import './sidebar.css';
import { useState } from 'react';
import { UilArrowCircleRight } from '@iconscout/react-unicons';
import { UilArrowCircleLeft } from '@iconscout/react-unicons';


function Sidebar() {

    const [sidebarmode, setSidebarmode] = useState(false);

    const sidebar__hintlogo = sidebarmode ?  <UilArrowCircleLeft size="40" /> : <UilArrowCircleRight size="40" />;

    const side__bar = sidebarmode ? "side__bar--show" : "side__bar--close" ;
    return (
        <>
            <a className="side__bar__hint" onClick={() => {
                setSidebarmode(!sidebarmode);
            }} aria-label="sidebar hint logo">
                {sidebar__hintlogo}
            </a>

            <div className={side__bar}>

                <h1>Welcome to follow me</h1>
                <div className="sidebar__menu">
                    <a href="https://github.com/peggrio" className="sidebar__menu__item" aria-label="sidebar link to github">
                        <UilGithubAlt size="50" />
                    </a>
                    <a href="https://www.linkedin.com/in/peizhenliao/" className="sidebar__menu__item" aria-label="sidebar link to LinkedIn">
                        <UilLinkedinAlt size="50" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCVEimoFEJRe1sUu8Vi0HQ8w" className="sidebar__menu__item" aria-label="sidebar link to Youtube">
                        <UilYoutube size="50" />
                    </a>
                </div>
            </div>
        </>



    )

}

export default Sidebar;