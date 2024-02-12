// import { createContext, useState } from 'react';

// const CountryContext = createContext();

// const Provider = ({ children }) => {
//   const [countriesList, setCountriesList] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [selectLang, setSelectLang] = useState('');
//   const [selectRegion, setSelectRegion] = useState('');
//   const [languages, setLanguages] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleFavCountries = ((favCountry) => {
//       const isFavorite = favorites.some((country) => country === favCountry);
//       if (!isFavorite) {
//         setFavorites((prevFavorites) => [...prevFavorites, favCountry]);
//       } else {
//         const updatedFavorites = favorites.filter(
//           (country) => country !== favCountry
//         );
//         setFavorites(updatedFavorites);
//       }
//     },
//     [favorites]);

//   const handleRemoveFavorite = ((countryFav) => {
//       const updatedFavorites = favorites.filter(
//         (country) => country !== countryFav
//       );
//       setFavorites(updatedFavorites);
//       setIsFavorite(false);
//     },
//     [favorites]);

//   const handleClearFavorites = () => {
//       setFavorites([]);
//     };

//   const filteredCountries =
//     (() => {
//       return countriesList.filter((country) => {
//         const nameMatches = country.name.official
//           .toLowerCase()
//           .includes(inputValue.toLowerCase());
//         const langMatches =
//           selectLang === '' ||
//           Object.values(country.languages).includes(selectLang);
//         const regionMatches =
//           selectRegion === '' || country.region === selectRegion;
//         return nameMatches && langMatches && regionMatches;
//       });
//     },
//     [countriesList, inputValue, selectLang, selectRegion]);

//   const handleSelectRegion =
//     ((value) => {
//       setSelectRegion(value === 'All' ? '' : value);
//     },
//     []);

//   const handleSelectLang =
//     ((value) => {
//       setSelectLang(value === 'All' ? '' : value);
//     },
//     []);

//   const handleInputChange =
//     ((value) => {
//       setInputValue(value);
//     },
//     []);

//   const valueToShare = {
//     filteredCountries,
//     handleClearFavorites,
//     handleRemoveFavorite,
//     handleFavCountries,
//   };

//   return (
//     <>
//       <div>provider</div>
//     </>
//   );
// };

// export { Provider };
// export default CountryContext;
