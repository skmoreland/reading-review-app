import './navBar.css'
import Bubble from '../../assets/images/Bubble.png'
import { Link } from "react-router-dom";
function NavBar(props) {

  return (
      <nav className = "NavBar">
        <img 
            className="Bubble"
            src={Bubble}
            alt="Bubble" />
            <div className = "Pages">
                    <Link to="/" className="Link">HOME</Link>
                    <Link to="/profile" className="Link">PROFILE</Link>
                    <Link to="/log" className="Link">LOG</Link>
                    <Link to="/explore" className="Link">EXPLORE</Link>
            </div>
      </nav>
  );
}

export default NavBar