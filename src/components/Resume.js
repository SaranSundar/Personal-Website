import React, {Component} from 'react';
import resume from '../drawables/resume.png'
import '../css/resumecss.css'


class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgHeight: null
        };
    }

    onloadImage = ({target: img}) => {
        this.setState({imgHeight: img.offsetHeight});
    };

    render() {
        let imgHeight = window.innerHeight - 50;//this.state.imgHeight * 2;
        console.log("SCREN HEIGHT :: " + window.innerHeight);
        console.log("HEIGHT " + imgHeight);
        return (
            <div className="wrapResume" id="wrap" style={{overflowY: "scroll", height: imgHeight + "px"}}>
                <div className="field has-addons has-addons-centered">
                    <p className="control">
                        <img onLoad={this.onloadImage} src={resume} width={window.innerWidth / 2} height={window.innerHeight / 2}/>
                    </p>
                </div>
            </div>

        );
    }
}

export default Resume;
