import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../react-leaflet-icon';
import '../../react-leaflet.css';
import axios from 'axios';

const CountriesDetails = () => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = response.data[0];
        setCountryDetails(data);
        setLat(data.latlng[0]);
        setLng(data.latlng[1]);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();

    return () => {
      setCountryDetails(null);
    };
  }, [name]);

  if (!countryDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{countryDetails.name.official}</h2>
      <p>Region: {countryDetails.region}</p>
      <p>Languages: {Object.values(countryDetails.languages).join(', ')}</p>
      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer
          center={[lat, lng]}
          zoom={8}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[lat, lng]}>
            <Popup>{countryDetails.name.official}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CountriesDetails;
