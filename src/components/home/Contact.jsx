/* Adapted from https://iconscout.com/ under the IconScout Simple License https://iconscout.com/licenses#simple_license*/

import { UilEnvelopeHeart } from '@iconscout/react-unicons';

import './contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="title__title">
                {/* <UilEnvelopeHeart size="50" /> */}
                Contact Me
            </div>
            
            <form action="/contact_form" method="POST">
                <label>
                    Your name*:
                </label>
                <input type="text"
                    required />

                <label>
                    Your email*:
                </label>
                <input type="text"
                    required />

                <label>
                    Type of your comment*:
                </label>
                <select required>
                    <option value="" disabled selected>Please select</option>
                    <option value="comment__bug">
                        I found a bug in your website!
                    </option>
                    <option value="comment__praise">
                        Nothing, just give you a like!
                    </option>
                    <option value="comment__connect">
                        Want to connect for further cooperation
                    </option>
                </select>

                <label>
                    Leave your comment:
                </label>

                <textarea />

                <text>
                    Labels with * are required
                </text>

                <button aria-label="form submit button"> <UilEnvelopeHeart size="30" color="black" /> Send</button>


            </form>

        </div>
    )

}

export default Contact;