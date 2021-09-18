import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useGeoLocation from './API/useGeoLocation';
export default function App() {
  const location = useGeoLocation();
  const latititude =location.coordinates.lat;
  const longitude = location.coordinates.lng;
  console.log(latititude, longitude);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      
      {location.loaded ? JSON.stringify(location) : "location data not available"}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
