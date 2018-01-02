import React, {Component} from 'react';
import $ from 'jquery'


class Home extends Component {

    componentDidMount() {
        $('*').css({'overflow': 'hidden'});
    }


    render() {
        return (
            <div className="loadImage" id="content">
                {/*THIS IS THE BIG STARTING TEXT*/}
                <section className="hero is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <div className="control has-text-centered">
                                <h1 className="title is-1" style={{color: "#ffffff"}}>
                                    Saran Sundar
                                </h1>
                                <h2 className="subtitle is-4 shimmer">
                                    An Experienced Mobile/Web Developer
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<div className="accent"></div>*/}
            </div>
        );
    }
}

export default Home;
