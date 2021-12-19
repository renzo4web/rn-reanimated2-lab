import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ style = {}, text = "touch", onPress }: any) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? "#f72585" : "white",
        },
        style,
      ]}
    >
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    marginVertical: 10,
  },

  btnText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Button;
