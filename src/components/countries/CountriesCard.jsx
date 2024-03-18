import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/countries/CountriesCard.scss';
import emptyHeart from '../../images/empty-heart.png';
import fulfilledHeart from '../../images/fulfilled-heart.png';

const CountriesCard = ({ country, isFav, favCountries }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/name/${country.name.official}`);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    favCountries(country);
  };

  return (
    <div className="country_card" onClick={handleCardClick}>
      <div className="country_card-img-container">
        <img className="img" src={country.flags.svg} alt={country.flags.alt} />
      </div>

      <p className="my-anchor-element">{country.name.official}</p>
      <span className="country_card-heart" onClick={handleHeartClick}>
        {isFav ? (
          <img
            className="country_card-heart-img"
            src={fulfilledHeart}
            alt="red full heart"
          ></img>
        ) : (
          <img
            className="country_card-heart-img"
            src={emptyHeart}
            alt="empty heart"
          ></img>
        )}
      </span>
    </div>
  );
};

export default memo(CountriesCard);
