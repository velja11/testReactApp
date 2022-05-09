import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Create = () => {

    const nav = useNavigate();
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [author, setAuthor] = useState(null)

    const addBlogHandler = (event) => {
        event.preventDefault();

       

        let blog = {
            title,
            author,
            desc
        }

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            body: JSON.stringify(blog),
            headers: {"Content-Type":"application/json"}
        }).then(() => {
            console.log("New blog added");
            nav('/');
        })

    }




    return ( 
        <div>
            <h1>Creating blog</h1>
            <form onSubmit={addBlogHandler}>
                <input type="text" id="name" onChange={(e) => setTitle(e.target.value) } placeholder="title"/>
                <input type="text"  onChange={(e) => setAuthor(e.target.value)} placeholder="author"/>
                <textarea type="text" id="desc" rows="10" onChange={(e) => setDesc(e.target.value)} placeholder="desc"/>
                <button id='buttonAdd'>Add</button>
            </form>
        </div>
     );
}
 
export default Create;
