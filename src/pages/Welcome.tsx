import React from "react";

import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

import colors from "../../styles/colors";

import fonts from "../../styles/fonts";

import watering from "../assets/watering.png";

import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function Welcome() {
  const navigation = useNavigation()
  function handleStart(){

    navigation.navigate('User')

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>

      <Text style={styles.title}>
        Gerêncie {"\n"}
        suas plantas de  {"\n"}
        forma fácil
      </Text>

      <Image source={watering} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar voce
        sempre que precisar
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>
        <Text>
          <Entypo name="chevron-thin-right" style={styles.buttonicon}></Entypo>
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal:20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight:34
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  buttonicon: {
    color: colors.white,
    fontSize: 24,
  },
});
