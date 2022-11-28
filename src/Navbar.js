import { Link, link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <b><h1>Pierre Blog</h1></b>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;