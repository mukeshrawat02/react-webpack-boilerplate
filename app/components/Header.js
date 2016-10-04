import React from "react";

class Header extends React.Component{
    render(){
        return(
            <section>
                <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand">
                                <i class="fa fa-list-alt fa-lg" aria-hidden="true"></i>&nbsp;
                                <span class="logo-container">React</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Header;