import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                {/*THIS IS THE BIG STARTING TEXT*/}
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-1">
                                ERROR 404:
                            </h1>
                            <h2 className="subtitle is-4 shimmer">
                                Page Not Found!
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="accent"></div>
            </div>
        );
    }
}


export default NotFound;
