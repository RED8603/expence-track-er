import './sideNav.css';
import { Link } from 'react-router-dom';


export default function SideNav(){


    return  <nav>
    <ul>
      <li><Link to = '/'><a >Home</a></Link></li>
      <li><Link to = '/login'><a >Login</a></Link></li>
      <li><Link to = '/signup'><a >SignUp</a></Link></li>
      <li><Link to = '/aboute'><a >Aboute</a></Link></li>
     
    </ul>
  </nav>
}