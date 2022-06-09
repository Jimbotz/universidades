import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const imagenes = [
  "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2425&q=80",
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
  "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
  "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {imagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  let [fontLoaded] = useFonts({
    Abril: require("../../assets/Fonts/AbrilFatface-Regular.ttf"),
    Russo: require("../../assets/Fonts/RussoOne-Regular.ttf"),
    TomorrowRegular: require("../../assets/Fonts/Tomorrow-Regular.ttf"),
    TomorrowSemiBold: require("../../assets/Fonts/Tomorrow-SemiBold.ttf"),
  });

  const scrollX = React.useRef(new Animated.Value(0)).current;


    if (!fontLoaded) {
        return <Text>Espere...</Text>;
    } 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar hidden />
        <Backdrop scrollX={scrollX} />
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          snapToAlignment="start"
          contentContainerStyle={{
            paddingTop: 200,
            paddingHorizontal: ESPACIO_CONTENEDOR,
          }}
          snapToInterval={ANCHO_CONTENEDOR}
          decelerationRate={0}
          scrollEventThrottle={16}
          data={imagenes}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR,
            ];

            const scrollY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0],
            });
            return (
              <View style={{ width: ANCHO_CONTENEDOR }}>
                <Animated.View
                  style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
                    borderRadius: 34,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY: scrollY }],
                  }}
                >
                  <Image source={{ uri: item }} style={styles.posterImage} />
                  <Text style={{ fontFamily: "Russo", fontSize: 26, color: "#EE627E" }}>
                    ACERCA DE
                  </Text>
                </Animated.View>
              </View>
            );
          }}
        />
        <Text style={{ marginHorizontal: 20, marginBottom: 20, color: "#EE627E" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

/* <FlatList
            data={data}
            keyExtractor={( _, index) => index.toString()}
            horizontal
            pagingEnabled
            renderItem={({item}) => {
                return <View style={{width, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: item}} style={{width: imageW,   height: imageH, resizeMode: 'cover', borderRadius: 16}} />
                    </View>
            }}            
            />*/
