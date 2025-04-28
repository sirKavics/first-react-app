import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/users/ronaldo">Ronaldo</Link>
          <Link to="/users/messi">Messi</Link>
          <Link to="/users/francicoalfaria">Francisco Faria</Link>
        </nav>
    );
}

export default Nav;