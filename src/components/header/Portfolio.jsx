/* Adapted from https://iconscout.com/ under the IconScout Simple License https://iconscout.com/licenses#simple_license*/

import './portfolio.css';

import { UilCamera } from '@iconscout/react-unicons';
import { UilMusic } from '@iconscout/react-unicons';
import { UilBrowser } from '@iconscout/react-unicons';
import { UilArrowCircleRight } from '@iconscout/react-unicons'
import { useState } from 'react';

function Portfolio() {
    const [rotate, setRotate] = useState(false);

    const rotateState = rotate ? "start__rotate" : "pause__rotate";

    const rotation__hint = rotate ? "Pause rotation" : "Start rotation";

    return (
        <div className="portfolio">

            <div className="portfolio__title">Portfolio</div>

            <div class="container">
                <div class={`carousel ${rotateState}`}>
                    <div class="carousel__face" >
                        <a href="https://www.youtube.com/watch?v=SJczJZOyYyU">
                            <UilMusic color="white" size="40" />My piano song
                        </a>
                    </div>

                    <div class="carousel__face" >
                        <a href="https://www.youtube.com/watch?v=5tIXLMmNypQ&t=44s">
                            <UilCamera color="white" size="40" />My drone video
                        </a>
                    </div>

                    <div class="carousel__face" >
                        <a href="http://peggyliao.cn/">
                            <UilBrowser color="white" size="40" />My website
                        </a>
                    </div>

                    <div class="carousel__face" >
                        <a href="https://www.bilibili.com/video/BV1Ap4y1C7fN/?spm_id_from=333.999.0.0&vd_source=e5ceedc2eb94732d37203639dd54dc7e">
                            <UilMusic color="white" size="40" />My piano song
                        </a>
                    </div>

                    <div class="carousel__face" >
                        <a href="https://www.bilibili.com/video/BV1Vp4y1Y7Z9/?spm_id_from=333.999.0.0&vd_source=e5ceedc2eb94732d37203639dd54dc7e">
                            <UilCamera color="white" size="40" />My Vlog
                        </a>
                    </div>

                </div>
            </div>

            <div className='remove__rotate' onClick={() => {
                setRotate(!rotate)
            }} aria-label="choose rotate or not" >
                {rotation__hint}
            </div>


            {/* <div class="slider">

                <a href="#slide-1" className="portfolio__item__name"><UilMusic />My piano song</a>
                <a href="#slide-2" className="portfolio__item__name"><UilCamera />My drone video</a>
                <a href="#slide-3" className="portfolio__item__name"><UilBrowser />My website</a>

                <div class="slides">

                    <div id="slide-1">
                        <img
                            src={piano}
                            className="cards__logo"
                            alt="playing piano picture"
                        />
                        <a href="https://www.youtube.com/watch?v=SJczJZOyYyU" className="content">
                            Unravel - Tokyo Ghoul OP [Piano] (simplified version)
                            <div className="enter__arrow">
                                <UilArrowCircleRight size="30" /></div>
                        </a>
                    </div>

                    <div id="slide-2">
                        <img src={drone}
                            className="cards__logo"
                            alt="drone picture"
                        />
                        <a href="https://www.youtube.com/watch?v=5tIXLMmNypQ&t=44s" className="content">
                            Aerial Qinghai&Gansu！College student drive for half month to record Qing-Gan ring road in China
                            <div className="enter__arrow">
                                <UilArrowCircleRight size="30" />
                            </div>
                        </a>
                    </div>

                    <div id="slide-3">
                        <img
                            src={website}
                            className="cards__logo"
                            alt="website picture"
                        />
                        <a href="http://peggyliao.cn/" className="content">
                            Welcome to Peggy's Fieldnotes

                            <div className="enter__arrow">
                                <UilArrowCircleRight size="30" />
                            </div>
                        </a>
                    </div>

                </div>
            </div> */}

        </div >
    )
}

export default Portfolio;