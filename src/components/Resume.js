import React, {Component} from 'react';
import resume from '../drawables/resume.png'
import $ from "jquery";


class Resume extends Component {

    componentDidMount() {
        $('*').css({'overflow': 'visible'});
        var isMobile = window.matchMedia("only screen and (max-width: 760px)");

        if (isMobile.matches) {
            //Conditional script here
            this.setState({isMobileDevice: true})
        }
        else {
            this.setState({isMobileDevice: false})
        }
    }

    componentWillMount() {
        this.setState({isMobileDevice: false})
    }


    render() {
        return (
            <div className="long" style={{backgroundColor: "white"}}>
                <div className="field has-addons has-addons-centered long-wrapper">
                    <p className="control">

                        {this.state.isMobileDevice && <img src={resume} style={{objectFit: "cover"}}/>}
                        {!this.state.isMobileDevice && <img src={resume} width={window.innerWidth / 2} height={window.innerHeight / 2}/>}

                        {/*<img src={resume} width={window.innerWidth / 2}*/}
                        {/*height={window.innerHeight / 2}/>*/}
                    </p>
                </div>
            </div>


        );
    }
}

export default Resume;
