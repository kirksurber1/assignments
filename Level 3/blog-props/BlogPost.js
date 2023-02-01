import React from "react";



function BlogPost (props) {

    return (
        <div className="blogPost">
            <h2><b>{props.title}</b></h2>
            <h3>{props.subtitle}</h3>
            <p><i>Posted by</i> {props.author}<i> on {props.date}</i></p>
        </div>
    )
}

export default BlogPost 