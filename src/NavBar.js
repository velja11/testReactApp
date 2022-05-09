import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navigat">
            <ul className="navlista">
                <li className="first-item">My project</li>
                <Link to="/"><li>Home</li></Link>
                <Link to="/newblog"><li>New blog</li></Link>
                
            </ul>

            
        </nav>
     );
}
 
export default NavBar;