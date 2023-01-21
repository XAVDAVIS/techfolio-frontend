import { Link } from "react-router-dom";
function Header(props){
  return (
    <nav>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/explore'>
        <li>Showcase Hub</li>
      </Link>
      <Link to='/login'>
        <li>Log in</li>
      </Link>
      <Link to='/registration'>
        <li>Sign up</li>
      </Link>
      <Link exact to='/portfolio/new'>
        <li>New Portfolio</li>
      </Link>
      <Link to='/portfolio/:id'>
        <li>My Portfolio</li>
      </Link>
      <Link to='/portfolio/:id/edit'>
        <li>Edit Portfolio</li>
      </Link>
    </nav>
  )
} 
  
export default Header;