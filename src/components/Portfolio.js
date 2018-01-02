import React, {Component} from 'react';
import $ from "jquery";

class Portfolio extends Component {

    handleClick = (e) => {
        let id = e.currentTarget.dataset.id;
        let allActive = "";
        let javaS = "";
        let androidS = "";
        let reactS = "";
        let stateActive = "is-active";
        // console.log(e.currentTarget.dataset.id)
        if (id === "0") {
            allActive = stateActive;
        }
        else if (id === "1") {
            javaS = stateActive;
        }
        else if (id === "2") {
            androidS = stateActive;
        }
        else if (id === "3") {
            reactS = stateActive;
        }
        this.setState({allActive: allActive, javaActive: javaS, androidActive: androidS, reactJSActive: reactS});
    };

    constructor(props) {
        super(props);
        this.state = {
            allActive: "is-active",
            javaActive: "",
            androidActive: "",
            reactJSActive: ""
        };
    }

    componentDidMount() {
        $('*').css({'overflow': 'visible'});
    }

    render() {
        let imgHeight = window.innerHeight - 40;//this.state.imgHeight * 2;
        return (
            <div className="container">

                <section style={{marginBottom: "50px"}}></section>
                <div className="tabs is-large is-centered">
                    <ul>
                        {/*//BINDING LIKE this.method(this) or any form of that gets called at runtime!!!!!*/}
                        <li className={this.state.allActive} onClick={this.handleClick} data-id="0"><a>All</a>
                        </li>
                        <li className={this.state.javaActive} onClick={this.handleClick} data-id="1"><a>Java</a>
                        </li>
                        <li className={this.state.androidActive} onClick={this.handleClick} data-id="2">
                            <a>Android</a>
                        </li>
                        <li className={this.state.reactJSActive} onClick={this.handleClick} data-id="3">
                            <a>ReactJS</a>
                        </li>
                    </ul>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">Vertical...</p>
                                    <p className="subtitle">Top tile</p>
                                </article>
                                <article className="tile is-child notification is-warning">
                                    <p className="title">...tiles</p>
                                    <p className="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">Middle tile</p>
                                    <p className="subtitle">With an image</p>
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-danger">
                                <p className="title">Wide tile</p>
                                <p className="subtitle">Aligned with the right tile</p>
                                <div className="content">

                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-success">
                            <div className="content">
                                <p className="title">Tall tile</p>
                                <p className="subtitle">With even more content</p>
                                <div className="content">

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <h1>HELLO</h1>
                <h1>HELLO</h1>
                <h1>HELLO</h1>
                <h1>HELLO</h1>
                <h1>HELLO</h1>
                <h1>HELLO</h1>
                <h1>HELLO</h1>
                <h1>HELLO</h1>


            </div>

        );
    }
}

export default Portfolio;
