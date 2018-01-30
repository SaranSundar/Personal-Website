import React, {Component, Fragment} from 'react';
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Home from "./Home";
import AdminPanelUpload from "./AdminPanelUpload";
import NotFound from "./NotFound";
import NavBar from "./NavBar";
import {Route, Switch} from "react-router-dom";


class App extends Component {

    componentWillMount() {
        this.setState({loadingState: "is-active"})
    }

    componentDidMount() {
        // If image doesn't load after 5 seconds max force load page anyways by hiding loading animation
        setTimeout(() => {
            if (this.state.loadingState !== "") {
                this.setState({loadingState: ""})
            }
        }, 2080);

    }

    render() {
        return (
            <Fragment>
                <div className={"pageloader " + this.state.loadingState}>

                    <span className="control has-text-centered title">“Don't try to follow trends. Create them.” <br/>
                    <span>― Some Wise Man</span>
                    </span>
                </div>
                <NavBar/>
                < Switch>
                    < Route exact path="/" component={Home}/>
                    <Route exact path="/aboutme" component={AboutMe}/>
                    < Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/resume" component={Resume}/>
                    < Route exact path="/admin/upload" component={AdminPanelUpload}/>
                    <Route component={NotFound}/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
