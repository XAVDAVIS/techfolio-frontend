import { Link } from "react-router-dom";
function Header(props){
  return (
    <nav>
      <ul>
      <Link to='/' className="link">
        <li>Home</li>
      </Link>
      <Link to='/explore' className="link">
        <li>Showcase Hub</li>
      </Link>
      <Link to='/login'>
        <li>Log in</li>
      </Link>
      <Link to='/registration'>
        <li>Sign up</li>
      </Link>
      </ul>
    </nav>
  )
} 
  
export default Header;