import '../../styles/home/FavItem.scss';

const FavItem = ({ favCountry, onRemoveFavorite }) => {
  const handleHeartClick = () => {
    onRemoveFavorite(favCountry);
  };

  return (
    <div className="favCountry_card">
      <img
        className="favCountry_card-img"
        src={favCountry.flags.svg}
        alt={favCountry.flags.alt}
      />
      <p className="favCountry_card-text">{favCountry.name.official}</p>
      <button className="favCountry_card-btn" onClick={handleHeartClick}>
        Remove
      </button>
    </div>
  );
};

export default FavItem;
