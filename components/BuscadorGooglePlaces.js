import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const BuscadorGooglePlaces = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyA1z4pNGYp7vCyEdzQ_y7tpI4zAapVrH_U',
        language: 'es',
      }}
    />
  );
};

export default BuscadorGooglePlaces;
