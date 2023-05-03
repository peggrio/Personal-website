import './main.css'
import profile from "../../assets/profile.jpg";
import Title from './Title.jsx';
import Contact from './Contact';
import Scroll from './Scroll';


function Main({onNav}) {
    const selfieImg = profile;

    return (
        <>
            <div className='main'>

                <div className="description__content">
                    <div className="name">Peizhen (Peggy) &nbsp; Liao</div>

                    <div className="introduction">
                        <p>
                            Hi! I'm Peggy, a first-year Software Engineer master's student. A quick learner, strong problem solver, confident, result oriented, who adores effective communication and creativity.
                        </p>
                    </div>
                    <Scroll />
                </div>

                <div className='profile'>
                    <img
                        className='profile1' src={selfieImg}
                        alt="profile_1" />
                </div>
            </div>

            <Title onNav = {onNav}/>
            <Contact />
        </>



    )
}

export default Main;