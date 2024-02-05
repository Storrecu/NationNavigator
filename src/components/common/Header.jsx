import { Link } from 'react-router-dom';
import world from '../../images/world.jpeg';
import '../../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="header_link" to="/">
        <img className="header_link-img" src={world} alt="little happy world" />
        <h1 className="header_link-title">Welcome to Nation Navigator.</h1>
      </Link>
    </div>
  );
};

export default Header;
