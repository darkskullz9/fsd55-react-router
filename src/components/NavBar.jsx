import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="
            flex
            flex-row">
            <ul className="list-none">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/html">HTML</Link>
                </li>
                <li>
                    <Link to="/css">CSS</Link>
                </li>
                <li>
                    <Link to="/javascript">JavaScript</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;