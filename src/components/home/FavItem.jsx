import { useNavigate } from 'react-router-dom';
import '../../styles/home/FavItem.scss';

const FavItem = ({ favCountry, onRemoveFavorite }) => {
  const handleFavCardClick = () => {
    navigate(`/name/${favCountry.name.official}`);
  };

  const navigate = useNavigate();

  const handleHeartClick = (e) => {
    e.stopPropagation();
    onRemoveFavorite(favCountry);
  };

  return (
    <div className="favCountry_card" onClick={handleFavCardClick}>
      <div className="favCountry_card-img-container">
        <img
          className="img"
          src={favCountry.flags.svg}
          alt={favCountry.flags.alt}
        />
      </div>
      <p className="favCountry_card-text">{favCountry.name.official}</p>
      <button className="favCountry_card-btn" onClick={handleHeartClick}>
        Remove
      </button>
    </div>
  );
};

export default FavItem;
