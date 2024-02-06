import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './App.css'; // Si tienes estilos específicos para el mapa, puedes importarlos aquí
import { Map, tileLayer } from 'leaflet';
import axios from 'axios';

const CountriesDetails = () => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [map, setMap] = useState(null);
  const mapInit = useRef(false);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = response.data[0];
        setCountryDetails(data);
      } catch (error) {
        console.error('Error fetching country details:', error);
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

  const initMap = () => {
    map &&
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  };

  useEffect(() => {
    initMap();
  }, [map]);

  return (
    <div>
      <h2>{countryDetails && countryDetails.name.official}</h2>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default CountriesDetails;
