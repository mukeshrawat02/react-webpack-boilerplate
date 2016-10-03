import React from "react";

import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component{
    constructor(){
        super();
        this.state ={
            headerTitle: "Welcome to boilerplate app"
        }
    }

    render(){
        return(
            <section>
                <Header />
                <h1> The Boilerplate App </h1>
                <Footer />
            </section>
        );
    }
}

export default Layout;