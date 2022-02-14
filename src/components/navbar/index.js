import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/">Home</Link>
                    <Link to="/todos">Todos</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;