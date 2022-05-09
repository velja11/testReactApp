import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {

    const param = useParams();

    const navigation = useNavigate()

    const {data: blog, isPendinig, error} = useFetch(`http://localhost:8000/blogs/${param.id}`);

    const deleteHandler = (id) => {
        console.log(id);
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE'
        }).then(()=>{
            navigation('/');
            console.log("resi");
        })
    }

    return ( 
        <div style={{textAlign:'center'}} className="details">
            <h1 style={{color:"purple"}}>{blog.title}</h1>
            {blog && <p>{blog.desc}</p>}
            {isPendinig && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <button id="deleteBtn" onClick={() => deleteHandler(param.id)}>Delete</button>
        </div>
     );
}
 
export default Details;
