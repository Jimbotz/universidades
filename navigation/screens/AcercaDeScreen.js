import * as React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
//import { useFonts, Radley_400Regular } from '@expo-google-fonts/dev';
/*let [fontLoaded] = useFonts({
    Radley_400Regular
}) */

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function AcercaDeScreen({ navigation }) {
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
          fontFamily: "Abril",
          textAlign: "center"
        }}
      >
        Oportunidades laborales
      </Text>

      <Card outlined  style={{ marginHorizontal: 10, borderRadius: 20}}>
          <Title style={{textAlign: "center"}}>Area de oportunidades</Title>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} style={{}}>
        </Card.Cover>
      </Card>
    </View>
  );
}
