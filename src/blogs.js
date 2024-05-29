function Blogs({blogs,title}){
    return(
        <div className="Blogs">
          <h1>{title}</h1>
            {blogs.map((blog)=>(
        
                   <div className="preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.author}</p>
                   </div>

            ))} 
        </div>
    )
}

export default Blogs;