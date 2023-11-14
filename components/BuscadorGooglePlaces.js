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
        key: 'apikey',
        language: 'es',
      }}
    />
  );
};

export default BuscadorGooglePlaces;
