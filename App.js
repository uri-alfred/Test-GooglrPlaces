import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import BuscadorGooglePlaces from './components/BuscadorGooglePlaces';

export default function App() {
  const apiKey = "apiKey";
  return (
    // <SafeAreaView style={styles.inputSearch}>
    //   <GooglePlacesAutocomplete
    //     placeholder="Type a place"
    //     query={{key: apiKey}}
        
    //   />
    // </SafeAreaView>
    <BuscadorGooglePlaces />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSearch: {
    marginTop: 50,
    borderWidth: 1
  }
});
