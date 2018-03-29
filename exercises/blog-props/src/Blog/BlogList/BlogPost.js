import React from 'react';

function BlogPost (props){
    return(
        <div>
            <h2>{props.post.title}</h2>
            <h4>{props.post.subTitle}</h4>
            <p>Posted by {props.post.author} on {props.post.date}</p>
        </div>
    )
}
export default BlogPost;