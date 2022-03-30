import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = "Map";
const detailsName = "Route";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'map' : 'map-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'analytics' : 'analytics-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
          
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false,tabBarLabel: t('navigate:map') }}/>
        <Tab.Screen name={detailsName} component={DetailsScreen} options={{headerShown: false,tabBarLabel: t('navigate:route')}}/>
        <Tab.Screen name={settingsName} component={SettingsScreen} options={{headerShown: false,tabBarLabel: t('navigate:settings')}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;