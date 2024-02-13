import '../../styles/home/FavCountries.scss';
import FavItem from './FavItem';

const FavCountries = ({ favorites, onRemoveFavorite, onClearFavorites }) => {
  return (
    <div className="favorites">
      <h4 className="favorites-title">Favorite countries:</h4>
      <button className="favorites-btn" onClick={onClearFavorites}>
        Clear All
      </button>
      {favorites.length > 0 ? (
        <div className="favorites-section">
          {favorites.map((favCountry, index) => (
            <FavItem
              key={index}
              favCountry={favCountry}
              onRemoveFavorite={onRemoveFavorite}
            />
          ))}
        </div>
      ) : (
        <p>No favorite countries selected.</p>
      )}
    </div>
  );
};

export default FavCountries;
