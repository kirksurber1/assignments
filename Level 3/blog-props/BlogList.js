import React from 'react'
import './BlogList.css'
import blog from './blog'
import BlogPost from './BlogPost'
import './BlogPost.css'

function BlogList () {
    
  const blogElements = blog.map(post => {
        return <BlogPost 
        title={post.title} 
        subtitle={post.subTitle} 
        author={post.author}
        date={post.date}></BlogPost>
  })

  
  return (
     <div>
        {blogElements}
        <button>OLDER POSTS</button>
     </div>  
       
)
}

export default BlogList