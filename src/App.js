import Home from './Home';
import NavBar from './NavBar';
import {Routes, Route} from 'react-router-dom';
import Details from './Details';
import NewBlog from './Contact';

function App() {
  return (
    <div className="App">
      
     <NavBar />
       <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route path='/newblog' element={<NewBlog />}></Route>
            <Route path='/details/:id' element={<Details />}></Route>
        </Routes>
    </div>
  );
}

export default App;
