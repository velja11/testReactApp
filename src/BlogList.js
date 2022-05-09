import { Link } from "react-router-dom";

const BlogList = (props) => {




    return ( 
        // ON MY WAY
        // <div className="blog-item" onClick={() => props.deleteHandler(props.id) }>
        //     <h1>{props.name}</h1>
        //     <p>{props.desc}</p>
        // </div>

        
        <div>
            {props.blogs.map((blog) => {
               return <div className="blog-item" key={blog.id} >
                    <h1>{blog.title}</h1>
                    <p> Written by: {blog.author}</p>
                    <Link to={`details/${blog.id}`}>Detail</Link>
                 </div>
            })}
        </div>

     );
}
 
export default BlogList;