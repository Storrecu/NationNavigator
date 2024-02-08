import '../../styles/home/FavCountries.scss';
import FavItem from './FavItem';

const FavCountries = ({ favorites, onRemoveFavorite, onClearFavorites }) => {
  return (
    <div>
      <div>
        <h4>Favorites countries:</h4>
        {favorites.length > 0 ? (
          <div>
            {favorites.map((favCountry, index) => (
              <FavItem
                key={index}
                favCountry={favCountry}
                onRemoveFavorite={onRemoveFavorite}
              />
            ))}
            <button onClick={onClearFavorites}>Clear All</button>
          </div>
        ) : (
          <p>No favorite countries selected.</p>
        )}
      </div>
    </div>
  );
};

export default FavCountries;
