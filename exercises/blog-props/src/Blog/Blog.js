import React from 'react';
import Header from "./Header/Header";
import BlogList from "./BlogList/BlogList";
import Footer from "./Footer/Footer";

function Blog() {
    return (
        <div>
          <Header></Header>
          <BlogList></BlogList>
          <Footer></Footer>
        </div>
    )
}
export default Blog;