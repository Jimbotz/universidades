import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { Text } from 'react-native'

// Screens
import HomeScreen from "./screens/HomeScreen";
import AcercaDeScreen from "./screens/AcercaDeScreen";
import SettingsScreen from "./screens/SettingsScreen";

//Screen names
const homeName = "Acerca de - MEDICINA";
const AcercaDeName = "Oportunidades - MEDICINA";
const settingsName = "Universidades - MEDICINA";

const Tab = createBottomTabNavigator();

function MainContainer() {

  let [fontLoaded] = useFonts({
    Abril: require("../assets/Fonts/AbrilFatface-Regular.ttf"),
    Russo: require("../assets/Fonts/RussoOne-Regular.ttf"),
    TomorrowRegular: require("../assets/Fonts/Tomorrow-Regular.ttf"),
    TomorrowSemiBold: require("../assets/Fonts/Tomorrow-SemiBold.ttf"),
  });

 if (!fontLoaded) {
    return <Text>Espere...</Text>;
  } 

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Acerca de"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Acerca de") {
              iconName = focused ? "help-circle" : "help-circle-outline";
            } else if (rn === "Oportunidades") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (rn === "Universidades") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#EE627E",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name="Acerca de" component={HomeScreen} />
        <Tab.Screen name="Oportunidades" component={AcercaDeScreen} />
        <Tab.Screen name="Universidades" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
