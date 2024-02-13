import { useState } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import '../../styles/countries/CountriesCard.scss';
import emptyHeart from '../../images/empty-heart.png';
import fulfilledHeart from '../../images/fulfilled-heart.png';

const CountriesCard = ({ country, favCountries }) => {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);

  const handleCardClick = () => {
    navigate(`/name/${country.name.official}`);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    favCountries(country);
    country.isFav = isFav;
    setIsFav(!isFav);
  };

  return (
    <div className="country_card" onClick={handleCardClick}>
      <img
        className="country_card-img"
        src={country.flags.svg}
        alt={country.flags.alt}
      />
      <p className="my-anchor-element">{country.name.official}</p>
      <Tooltip anchorSelect=".my-anchor-element" place="top">
        {country.name.official}
      </Tooltip>
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
