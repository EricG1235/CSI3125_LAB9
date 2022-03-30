import * as React from 'react';
import { SafeAreaView, Dimensions, Text,Button,TextInput, StyleSheet,Alert} from 'react-native';

export default function DetailsScreen({ navigation }) {
    const [departure, setDeparture] = React.useState("");
    const [destination, setDestination] = React.useState("");
    return(
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.text}>Create a Trip</Text>
        <TextInput
        style={styles.input}
        onChangeText={(newValue)=> setDeparture(newValue)}
        value={departure}
        placeholder="Depature"
      />
      <TextInput
        style={styles.input}
        onChangeText={(newValue)=> setDestination(newValue)}
        value={destination}
        placeholder="Destination"
      />
        <Button 
        title="Get Route"
        onPress={() => Alert.alert('Simple Button pressed')}
        style={styles.button}
        />
    </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    zIndex:10,
    },
    text:{
        fontSize: 30,
    },
    input: {
      height: 40,
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
