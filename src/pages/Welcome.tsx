import React, { useState } from "react";
import { Text, StyleSheet, Image, SafeAreaView } from "react-native";
import colors from "../../styles/colors";

import watering from "../assets/watering.png";
import { Button } from "../components/button";

export default function Welcome() {
  const [visible, setVisible] = useState(false);

  function heanldeVisible() {
    setVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Text>

      {visible && <Image source={watering} style={styles.image} />}

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar voce
        sempre que precisar
      </Text>

      <Button title=">" onPress={heanldeVisible}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },

  image: {
    width: 292,
    height: 284,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
});