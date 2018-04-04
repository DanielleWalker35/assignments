import React from 'react';
import BlogPost from "./BlogPost";

function BlogList () {
    const blogData = [
        {
            title: "Man must explore, and this is exploration at its greatest",
            subTitle: "Problems look mighty small from 150 miles up",
            author: " Start Bootstrap",
            date: "September 24, 2018"
        },
        {
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subTitle: "",
            author: " Start Bootstrap",
            date: "September 18, 2018"
        },
        {
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: " Start Bootstrap",
            date: "August 24, 2018"
        },
        {
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
            author: " Start Bootstrap",
            date: "July 8, 2018"
        }
    ]
    const blogLis = blogData.map((article, i) => <BlogPost key= {article.title +i} post={article} />)
    return(
        <div className="mainBlog">
            {blogLis}
            <div className="buttonContainer">
            <button>OLDER POSTS &#8594; </button>
            </div>
        </div>
    )
}
export default BlogList;