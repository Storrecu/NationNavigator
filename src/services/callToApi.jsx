import axios from 'axios';

const callToApi = async () => {
  try {
    const url =
      'https://restcountries.com/v3.1/all?fields=name,flags,region,languages,latlng';
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`Error calling API: ${response.statusText}`);
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.log('Error al llamar a la API:', error);
    throw error;
  }
};

export default callToApi;
