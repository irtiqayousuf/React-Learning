import  './components/menu.css'
import { BrowserRouter,Routes ,Route,Link} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Explore from './components/Explore';

function App() {
 return(
    <div>   
      <BrowserRouter>   

           <nav>
                <ul>
                <li>
                   <p><Link to="/" style={{textDecoration:'none'} }>Home</Link></p>
                </li>   
                <li>
                   <p><Link to="/about" style={{textDecoration:'none'}}>About</Link></p>
                </li>
                <li>
                    <p><Link to="/contact" style={{textDecoration:'none'}}>Contact</Link></p>
                </li> 
                <li>
                    <p><Link to="/explore" style={{textDecoration:'none'}}>Explore</Link></p>
                </li> 
                </ul>    
            </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}
    
export default App;