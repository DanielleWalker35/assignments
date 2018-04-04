import React from 'react';

function BlogPost (props){
    return(
        <div className="blogPosts">
            <h2>{props.post.title}</h2>
            <h4>{props.post.subTitle}</h4>
            <p>Posted by <span className="author">{props.post.author}</span> on {props.post.date}</p>
        </div>
    )
}
export default BlogPost;