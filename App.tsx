import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import Map from './screens/Map';
import PlaceDetails from './screens/PlaceDetails';
import IconButton from './UI/IconButton';
import {Colors} from './constants/color';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'red'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700},
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen
            name="Allplaces-screen"
            component={AllPlaces}
            options={({navigation}) => ({
              headerRight: ({tintColor}) => (
                <IconButton
                  btnText="Add"
                  onPress={() => navigation.navigate('Addplaces-screen')}
                />
              ),
            })}
          />
          <Stack.Screen name="Addplaces-screen" component={AddPlace} />
          <Stack.Screen name="Map-screen" component={Map} />
          <Stack.Screen name="Placedetails-screen" component={PlaceDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
