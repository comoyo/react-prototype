import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <NaviMain/>
            </div>
        );
    }
}


class NaviMain extends React.Component {
    render() {
        return (
            <nav className={"navbar navbar-default navbar-fixed-top"}>
                <div className={"first-header hidden-xs"}>
                    <div className={"container"}>
                        <ul className={"nav navbar-nav secondary-menu"}>
                            <li className={"hidden-xs"}><a href="#">Contact Us</a></li>
                            <li className={"nav-item-bangla"}><a href="#">বাংলা</a></li>
                            <li>
                                <form className={"navbar-form"} role="search">
                                    <div className={"input-group"}>
                                        <div className={"input-group-btn"}>
                                            <button className={"btn btn-default"} type="submit"><i className={"glyphicon glyphicon-search"}></i></button>
                                        </div>
                                        <input type="text" className={"form-control"} placeholder="Search" name="srch-term" id="srch-term" />
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-12"}>
                                <div className={"navbar-header pull-left"}>
                                    <button type="button" className={"navbar-toggle collapsed pull-left"}>
                                        <span className={"sr-only"}>Toggle navigation</span>
                                        <span className={"icon-bar"}></span>
                                        <span className={"icon-bar"}></span>
                                        <span className={"icon-bar"}></span>
                                    </button>
                                    <a className={"navbar-brand"} href="#"><img src="dist/images/logo-tonic-color.svg" /> </a>
                                    </div>
                                    <ul className={"user-menu pull-right"}>
                                        <li><a href="../navbar/" className={"btn btn-tonic-link"}>Login</a></li>
                                        <li><a href="../navbar-static-top/" className={"btn btn-tonic-blue btn-tonic-round"}>Register</a></li>
                                    </ul>
                            <div id="navbar" className={"navbar-collapse collapse hidden-xs"}>
                                <ul className={"nav navbar-nav main-menu"}>
                                    <li className={"active"}><a href="#">Home</a></li>
                                    <li><a href="#about">Topics</a></li>
                                    <li className={"dropdown"}>
                                        <a href="#" className={"dropdown-toggle"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tonic Benefits <span className={"caret"}></span></a>
                                        <ul className={"dropdown-menu"}>
                                            <li><a href="#">Overview</a></li>
                                            <li><a href="#">Tonic Discounts</a></li>
                                            <li><a href="#">Tonic Cash</a></li>
                                            <li><a href="#">Tonic Daktar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#contact">Tonic Heroes</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Navigation;