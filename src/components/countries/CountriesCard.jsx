import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import '../../styles/countries/CountriesCard.scss';
import emptyHeart from '../../images/empty-heart.png';
import fulfilledHeart from '../../images/fulfilled-heart.png';

const CountriesCard = ({
  country,
  favCountries,
  isFavorite,
  setIsFavorite,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/name/${country.name.official}`);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    favCountries(country);

    if (country.name.official === e.target.value) {
      setIsFavorite(!isFavorite);
    }

    // setIsFavorite(!isFavorite);
    console.log(
      `el país con nombre: ${country.name.official} ha sido marcado como favorito`
    );
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
        {isFavorite ? (
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
