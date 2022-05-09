//import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";



const Home = () => {
    // const [blogs, setBlogs] = useState([]);
    // const [isPendinig, setPending]=useState(true);
    // const [error, setError] = useState(false)

    // useEffect(()=>{
        
    //         fetch('http://localhost:8000/blogs').then(res => {
    //             if(!res.ok){
    //                 throw new Error("something went wrong")
    //             }
    //                 return res.json();
    //                 }).then(data => {
    //                         console.log(data);
    //                         setPending(false);
    //                         setError(null);
    //                         setBlogs(data);
    //                 }).catch(err => {
    //                         setError(err.message);
    //                         setPending(false);
    //                  })
        

    //             },[])


    const {data: blogs, isPendinig,error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div style={{marginLeft:"400px", marginTop:"90px"}}>
            {/* ON MY WAY */}
            {/* {blogs.map((blog) => {
               return <BlogList key={blog.id} name={blog.name} desc={blog.desc} id={blog.id} deleteHandler={onDeleteHandler} />
            })} */}


            {blogs && <BlogList blogs={blogs}  />}
            {isPendinig && <p>Loading...</p>}
            {error && <p>{error}</p>}
        
        </div>
     );
}
 
export default Home;