import React, {Component} from 'react';
import {Link} from "react-router-dom";
import github_cat from '../drawables/github_cat.svg'
import $ from 'jquery';
import '../css/shimmercss.css'


class NavBar extends Component {

    toggleBurger = () => {
        let burger = $('.burger');
        let menu = $('.navbar-menu');
        burger.toggleClass('is-active');
        menu.toggleClass('is-active');
    };

    render() {
        return (
            <div>
                {/*THIS IS THE NAV BAR*/}
                <nav className="navbar is-primary" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img src="https://bulma.io/images/bulma-logo-white.png"
                                 alt="Bulma: a modern CSS framework based on Flexbox"
                                 width="112" height="28"/>
                        </Link>
                        <div id="navbarBurger" className="navbar-burger burger" data-target="navMenuIndex"
                             onClick={this.toggleBurger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navMenuColorwhite-example" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/aboutme">
                                About Me
                            </Link>
                            <Link className="navbar-item" to="/resume">
                                Resume
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <a className="navbar-item" href="https://github.com/SaranSundar">
                                <img src={github_cat} alt="github portfolio"/>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default NavBar;
