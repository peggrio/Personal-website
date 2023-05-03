/* Adapted from https://iconscout.com/ under the IconScout Simple License https://iconscout.com/licenses#simple_license*/

import './title.css';
import { UilWrench } from '@iconscout/react-unicons';
import { UilCamera } from '@iconscout/react-unicons';
import { UilMusic } from '@iconscout/react-unicons';
import { UilBrowser } from '@iconscout/react-unicons';


const titles = [
    {
        logo: <UilWrench size="50" />,
        name: "Software Engineer",
        content: "I love design, technology and art",
        button_content: "",
        path: "",
        // button_content: "Know me better",
        // path: "/aboutMe.html",
    },
    {
        logo: <UilBrowser size="50" />,
        name: "Web designer",
        content: "Showing the structure of thoughts in screen is a great achievement",
        button_content: "",
        path: "",
        // button_content: "What skill I use",
        // path: "/skills.html",
    },
    {
        logo: <UilMusic size="50" />,
        name: "Amateur pianist",
        content: "Coding music with black and white keys",
        button_content: "See my portfolio",
        path: "/portfolio.html",
    },
    {
        logo: <UilCamera size="50" />,
        name: "Photographer",
        content: "Drone lens is my third eye",
        button_content: "See my portfolio",
        path: "/portfolio.html",
    }

];

function Title({onNav}) {

    const title__list = titles.map(item => {
        return (
            <div class="card">
                <div className="card__part1" key={item.name} >
                    {item.logo}
                    <h2>{item.name}</h2>
                </div>

                <div className="card__part2">
                    <p className='card__content'>
                        {item.content}
                    </p>
                    <a href={item.path} onClick={onNav} aria-label="the author's introduction">
                        {item.button_content}
                    </a>
                </div>
            </div>
        )
    })


    return (

            <div className='title'>
                <div className="title__title">Who am I?</div>
                <div className="title__bar">
                    {title__list}
                    {/* 
                    <div class="card">
                        <div className="card__part1">
                            <UilWrench size="50" />
                            <h2>Software Engineer</h2>
                        </div>

                        <div class="card__part2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque, odio
                                repellendus
                            </p>
                            <a href="#">Read more</a>
                        </div>
                    </div>

                    <div class="card">
                        <div className="card__part1">
                            
                            <h2>Web Designer</h2>
                        </div>

                        <div class="card__part2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque, odio
                                repellendus
                                rem,
                                neque quos ex et labore deleniti sint iure quam perferendis tempore odit. Aperiam,
                                similique
                                minus! Dolore, non!
                            </p>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                    <div class="card">
                        <div className="card__part1">
                            <UilCalculatorAlt size="50" />
                            <h2>Algorithm Enthusiast</h2>
                        </div>

                        <div class="card__part2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque, odio
                                repellendus
                                rem,
                                neque quos ex et labore deleniti sint iure quam perferendis tempore odit. Aperiam,
                                similique
                                minus! Dolore, non!
                            </p>
                            <a href="#">Read more</a>
                        </div>
                    </div>

                    <div class="card">
                        <div className="card__part1">
                            <UilMusic size="50" />
                            <h2>Amateur pianist</h2>
                        </div>

                        <div class="card__part2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque, odio
                                repellendus
                                rem,
                                neque quos ex et labore deleniti sint iure quam perferendis tempore odit. Aperiam,
                                similique
                                minus! Dolore, non!
                            </p>
                            <a href="#">Read more</a>
                        </div>
                    </div>

                    <div class="card">
                        <div className="card__part1">
                            <UilCamera size="50" />
                            <h2>Photographer</h2>
                        </div>

                        <div class="card__part2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque, odio
                                repellendus
                                rem,
                                neque quos ex et labore deleniti sint iure quam perferendis tempore odit. Aperiam,
                                similique
                                minus! Dolore, non!
                            </p>
                            <a href="#">Read more</a>
                        </div>
                    </div>

                    <div class="card">
                        <div className="card__part1">
                            <UilUtensilsAlt size="50" />
                            <h2>Terrible Cook</h2>
                        </div>

                        <div class="card__part2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque, odio
                                repellendus
                                rem,
                                neque quos ex et labore deleniti sint iure quam perferendis tempore odit. Aperiam,
                                similique
                                minus! Dolore, non!
                            </p>
                            <a href="#">Read more</a>
                        </div>
                    </div> */}
                </div>
            </div >

    )
}

export default Title;