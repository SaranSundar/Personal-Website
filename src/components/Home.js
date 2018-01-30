import React, {Component, Fragment} from 'react';
import bg_opt from "../drawables/bg_opt.jpg"
import $ from "jquery";

class Home extends Component {

    componentDidMount() {
        $('*').css({'overflow': 'hidden'});
    }


    render() {
        return (
            <Fragment>
                <div style={{backgroundColor: "#42f4f4"}}>

                    <figure className="image">
                        {/*THIS IS THE BIG STARTING TEXT*/}
                        <div className="control has-text-centered" id="title">
                            <h1 className="title is-1" style={{color: "#ffffff"}}>
                                Saran Sundar
                            </h1>
                            <h2 className="subtitle is-4 shimmer">
                                An Experienced Mobile/Web Developer
                            </h2>
                        </div>
                        <img src={bg_opt} style={{objectFit: "cover"}}/>
                    </figure>

                </div>
            </Fragment>
        );
    }
}

export default Home;
