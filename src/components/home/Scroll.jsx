/* Adapted from https://iconscout.com/ under the IconScout Simple License https://iconscout.com/licenses#simple_license*/

import { UilAngleDoubleDown } from '@iconscout/react-unicons';

function Scroll() {
    return (
        <div href="#title" className="home__scroll">
            <div className="home__scroll__button">
                <UilAngleDoubleDown size="30" />
            </div>
            <div className="home__scroll__content">
                Scroll down
            </div>
        </div>
    )

}

export default Scroll;