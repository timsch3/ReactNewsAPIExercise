import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/'><h1>Latest US News</h1></Link>
            <ul>
                <li><Link to='/custom'>Other option</Link></li>
                <li><Link to='/custom'>Other option</Link></li>
                <li><Link to='/custom'>Other option</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;