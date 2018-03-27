import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
//always name components after your folder
function App() {
    return (
        <div>
            {/* header */}
            <Header></Header>
            {/* content */}
            <Content></Content>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
}
export default App;