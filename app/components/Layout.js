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
                <div class='container mainbox'>
                    <h1> Welcome! </h1>
                </div>
                <Footer />
            </section>
        );
    }
}

export default Layout;