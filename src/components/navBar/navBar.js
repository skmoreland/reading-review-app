import './navBar.css'
import Bubble from '../../assets/images/Bubble.png'
import Plus from '../../assets/images/Plus.svg'

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
                    <Link to="/explore" className="Link">EXPLORE</Link>
                    <Link to="/profile" className="Link">PROFILE</Link>
                    <Link to="/log" className="LogButton">
                        <img className="LogButtonPlus" src={Plus} alt="plus"/>
                        <h1 className="LogButtonTitle">LOG</h1>
                    </Link>
            </div>
      </nav>
  );
}

export default NavBar