import { useState } from 'react';
import emptyHeart from '../../images/empty-heart.png';
import fulfilledHeart from '../../images/fulfilled-heart.png';
import '../../styles/home/FavItem.scss';

const FavItem = ({ favCountry, onRemoveFavorite }) => {
  const [fav, setFav] = useState(true);

  const handleHeartClick = () => {
    setFav(!fav);
    onRemoveFavorite(favCountry.name.official);
  };

  return (
    <div className="favCountry_card">
      <img
        className="favCountry_card-img"
        src={favCountry.flags.svg}
        alt={favCountry.flags.alt}
      />
      <p className="my-anchor-element">{favCountry.name.official}</p>
      <span className="favCountry_card-heart" onClick={handleHeartClick}>
        {fav ? (
          <img
            className="favCountry_card-heart-img"
            src={fulfilledHeart}
            alt="red full heart"
          ></img>
        ) : (
          <img
            className="favCountry_card-heart-img"
            src={emptyHeart}
            alt="empty heart"
          ></img>
        )}
      </span>
      <button onClick={handleHeartClick}>Remove</button>
    </div>
  );
};

export default FavItem;
