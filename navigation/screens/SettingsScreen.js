import * as React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;


export default function SettingsScreen({ navigation }) {
  let [fontLoaded] = useFonts({
    Abril: require("../../assets/Fonts/AbrilFatface-Regular.ttf"),
    Russo: require("../../assets/Fonts/RussoOne-Regular.ttf"),
    TomorrowRegular: require("../../assets/Fonts/Tomorrow-Regular.ttf"),
    TomorrowSemiBold: require("../../assets/Fonts/Tomorrow-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{
          fontSize: 26,
          fontFamily: "TomorrowSemiBold",
          textAlign: "center",
        }}
      >
        Settings Screen
      </Text>

      <Card outlined style={{ marginHorizontal: 10, borderRadius: 20, marginBottom: 20, marginTop: 20 }}>
        <Title style={{ textAlign: "center", margin: 5 }}>Universidades en México que ofrecen la carrera de Medicina</Title>
        <Card.Cover
          source={{ uri: "https://encuentratubeca.mx/wp-content/uploads/2020/08/becas-mexico-2020-buap-inscripciones.jpg" }}
          style={{}}
        ></Card.Cover>
      </Card>

      <Card outlined style={{ marginHorizontal: 10, borderRadius: 20 }}>
        <Title style={{ textAlign: "center", margin: 5 }}>Universidades en Estados Unidos que ofrecen la carrera de Medicina</Title>
        <Card.Cover
          source={{ uri: "https://d1bvpoagx8hqbg.cloudfront.net/originals/cuales-son-mejores-universidades-estados-unidos-a6893f70a435aa8722adade9f839a4b2.jpg" }}
          style={{}}
        ></Card.Cover>
      </Card>
    </View>
  );
}
