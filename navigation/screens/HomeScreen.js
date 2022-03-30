import React, { useEffect, useState } from 'react';
import MapView,{ Callout, Marker, PROVIDER_GOOGLE }from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,TextInput,Image } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"

export default function HomeScreen({ navigation }) {
    const [ region, setRegion ] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0566,
        longitudeDelta: 0.0421
      })
     return (
      <View style={{ marginTop: 50, flex: 1 }}>
      <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby: "distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details)
        setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        })
      }}
      query={{
        key: "AIzaSyCD6rrEaBhVPBUuwBiIBTYeFNkaiKL8adg",
        language: "en",
        components: "country:ca",
        types: "establishment",
        radius: 30000,
        location: `${region.latitude}, ${region.longitude}`
      }}
      styles={{
        container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
        listView: { backgroundColor: "white" }
      }}
    />
      <MapView 
        provider = {PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation = {true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={{
            latitude: 45.423268,
            longitude: -75.683079,
          }}
          image = {require("../../assets/map_marker.png")}
          title="Test Title"
          description="This is the test description"
          >
        <Callout tooltip>
          <View>
            <View style = {styles.bubble}>
            <Image 
                    style={styles.image}
                    source={require('../../assets/picture_charge_station.jpg')}
                  />
            <Text style={styles.name}>90U charge station</Text>
            <Text>Location:90 university ave. Level:2</Text>
            <Text>Price: 0.3/KW</Text>
            <Text>Connecter: Tesla,CCS,EV</Text>
            </View>
          </View>
        </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 45.323885,
            longitude: -75.666548,
          }}
          image = {require("../../assets/map_marker.png")}
          title="Test Title"
          description="This is the test description"
          >
        <Callout tooltip>
          <View>
            <View style = {styles.bubble}>
            <Image 
                    style={styles.image}
                    source={require('../../assets/picture_charge_station.jpg')}
                  />
            <Text style={styles.name}>Parkade(P1) charge station</Text>
            <Text>Location:90 university ave. Charge Type: trickle charger</Text>
            <Text>Price: 0.5/KW</Text>
            <Text>Connecter: Tesla,CCS,EV</Text>
            </View>
          </View>
        </Callout>
        </Marker>
      </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    searchbox:{
      position:'absolute',
      flexDirection:'row',
      backgroundColor:'#fff',
      width:'90%',
      alignSelf:'center',
      borderRadius:10,
      borderWidth:2,
      borderColor:'#000000',
      shadowOffset:{width:0,height:3},
      shadowOpacity:0.5,
      shadowColor:'#ccc',
      elevation: 10,
    },
    bubble:{
      flexDirection: 'column',
      alignSelf: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: 6,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 15,
      width: 300,
      height:200
    },
    name: {
      fontSize: 16,
      marginBottom: 5,
    },
    image: {
      width: "100%",
      height: 80,
    },
  });