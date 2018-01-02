import React, {Component} from 'react';
import resume from '../drawables/resume.png'
import $ from "jquery";


class Resume extends Component {

    componentDidMount() {
        $('*').css({'overflow': 'visible'});
    }

    render() {
        return (
            <div>
                <div className="field has-addons has-addons-centered">
                    <p className="control">
                        <img onLoad={this.onloadImage} src={resume} width={window.innerWidth / 2}
                             height={window.innerHeight / 2}/>
                    </p>
                </div>
            </div>


        );
    }
}

export default Resume;
