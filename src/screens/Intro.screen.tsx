import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const IntroScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>React Native Reanimated 2</Text>

      <Pressable style={styles.btn} onPress={() => navigation.navigate("One")}>
        <Text style={styles.btnText}>Part One</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={() => navigation.navigate("Two")}>
        <Text style={styles.btnText}>Part Two</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: "#480ca8",
    fontWeight: "bold",
    marginVertical: 20,
  },

  btn: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    marginVertical: 10,
  },

  btnText: {
    textAlign: "center",
  },
});

export default IntroScreen;
