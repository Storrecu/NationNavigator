import { memo } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Map, marker, tileLayer } from 'leaflet';
import axios from 'axios';
import Spinner from '../Spinner';
import Header from '../common/Header';
import Footer from '../common/Footer';

const CountriesDetails = () => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [map, setMap] = useState(null);
  const mapInit = useRef(false);
  const [loading, setLoading] = useState(false);

  const countryLang = countryDetails
    ? Object.values(countryDetails.languages)
    : null;
  const countryCapital = countryDetails?.capital[0];
  const currencies = countryDetails && countryDetails.currencies;
  const currencyKeys = currencies ? Object.keys(currencies) : null;
  const currencyName = currencyKeys ? currencies[currencyKeys[0]].name : null;
  const currencySymbol = currencyKeys
    ? currencies[currencyKeys[0]].symbol
    : null;

  useEffect(() => {
    setLoading(true);
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = response.data[0];
        setCountryDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country details:', error);
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [name]);

  useEffect(() => {
    if (countryDetails && !mapInit.current) {
      mapInit.current = true;
      const newMap = new Map('map', {
        center: countryDetails.latlng,
        zoom: 5,
      });
      setMap(newMap);
    }
  }, [countryDetails]);

  const initMap = useCallback(() => {
    map &&
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  }, [map]);

  useEffect(() => {
    initMap();
  }, [map, initMap]);

  const addMarker = useCallback(() => {
    if (map && countryDetails) {
      marker(countryDetails.latlng).addTo(map);
    }
  }, [map, countryDetails]);

  useEffect(() => {
    addMarker();
  }, [map, addMarker]);

  return (
    <div className="country_details">
      <Header />
      {loading ? <Spinner /> : <h2>{countryDetails?.name.official}</h2>}

      <section className="country_details-info">
        <div>
          <img
            src={countryDetails?.flags.png}
            alt={countryDetails?.flags.alt}
          />
        </div>
        <h3>Country information</h3>
        <div>Capital:{countryCapital}</div>
        <div>Population: {countryDetails?.population} sq km</div>
        <div>Region:{countryDetails?.region}</div>
        <div>Subregion: {countryDetails?.subregion}</div>

        <div>
          {currencyName && <div>Currency Name: {currencyName}</div>}
          {currencySymbol && <div>Currency Symbol: {currencySymbol}</div>}
        </div>
        <div>Languages: {countryLang}</div>
      </section>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      <Footer />
    </div>
  );
};

export default memo(CountriesDetails);
