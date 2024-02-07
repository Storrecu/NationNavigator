import { Link } from 'react-router-dom';
import '../../styles/common/NotFoundPage.scss';
import NotFoundImg from '../../images/404.jpeg';

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h2 className="notFound_title">
        It seems you are lost... need some help? Turn back into the Home Page.
      </h2>
      <Link className="links" to="/">
        <p className="link-back-home">Back to Home Page </p>
      </Link>
      <img
        className="notFound_img"
        src={NotFoundImg}
        alt="Error, page not found"
      />
    </div>
  );
};

export default NotFoundPage;
