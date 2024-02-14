import { memo } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Map, tileLayer } from 'leaflet';
import axios from 'axios';
import Spinner from '../Spinner';

const CountriesDetails = () => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [map, setMap] = useState(null);
  const mapInit = useRef(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      {loading ? <Spinner /> : countryDetails && countryDetails.name.official}
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default memo(CountriesDetails);
