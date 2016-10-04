import React from "react";

import Footer from "footer";
import Header from "header";

class Layout extends React.Component{
    render(){
        return(
            <section>
                <Header />
                <div class='container mainbox'>
                    <h1> Welcome to React Boilerplat application! </h1>
                </div>
                <Footer />
            </section>
        );
    }
}

export default Layout;