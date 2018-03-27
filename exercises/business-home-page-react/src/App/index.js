import React from 'react';
import Header from "./Header/";
import Nav from "./Nav";
import Info from "./Info";
import Footer from "./Footer";
import Products from "./Products";
function App() {
    return (
        <div className="wrapper">
            <Header></Header>
            <Nav></Nav>
            <Info></Info>
            <Products></Products>
            <Footer></Footer>
        </div>
    )
}
export default App;