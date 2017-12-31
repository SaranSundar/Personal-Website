import React, {Component} from 'react';

class AboutMe extends Component {
    render() {
        return (

            <section className="hero is-fullheight aboutMeImage">
                <div className="field has-addons has-addons-centered is-light" style={{marginTop: '40px'}}>
                    <p className="control">
                        <img className="profile"
                             src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/14446031_1303187519738245_5581739972931163004_n.jpg?oh=add000ed06428de065786ff83900ac34&oe=5A6704A4"
                             alt="Saran" width={window.innerWidth / 4} height={window.innerHeight / 4}/>
                    </p>
                </div>
                {/*// <!-- Hero content: will be in the middle -->*/}
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1" style={{color: '#ffffff'}}>
                            Saran Sundararajan
                        </h1>
                        <h2 className="subtitle is-3" style={{color: '#e3eaef'}}>
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
