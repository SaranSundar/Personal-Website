import React, {Component} from 'react';
import $ from "jquery";
import selfie from "../drawables/self.jpeg"

class AboutMe extends Component {

    componentDidMount() {
        $('*').css({'overflow': 'hidden'})
    }
    render() {
        return (

            <section className="hero is-fullheight aboutMeImage" id="about-me">
                <div className="field has-addons has-addons-centered is-light" style={{marginTop: '40px'}}>
                    <p className="control">
                        <img className="profile"
                             src={selfie}
                             alt="Saran" width={window.innerWidth / 4} height={window.innerHeight / 4}/>
                    </p>
                </div>
                {/*// <!-- Hero content: will be in the middle -->*/}
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1" style={{color: '#ffffff'}}>
                            Saran Sundararajan
                        </h1>
                        <h2 className="subtitle is-3" style={{color: '#ffffff', fontWeight: "bold"}}>
                            A student by day and passionate developer by night, always looking to throw myself forward
                            into the next big challenge
                        </h2>
                    </div>
                </div>

            </section>
        );
    }
}

export default AboutMe;
