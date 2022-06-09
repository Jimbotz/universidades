import * as React from "react";
import { View, Text, Animated, Button } from "react-native";
import { AbrilFatface_400Regular } from "@expo-google-fonts/dev";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainContainer from "../MainContainer";

const Stack = createNativeStackNavigator();

export default function SplashScreen({ navigation }) {
  return (
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#D43E5C",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: AbrilFatface_400Regular,
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 90,
            }}
          >
            CBTIS 0 3
          </Text>
        </View>
      </View>

  );
}

/*
<NavigationContainer>

<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Principal" component={HomeScreen} />
</Stack.Navigator>

</NavigationContainer> 
*/
