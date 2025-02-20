import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// 画像を表示できるカードを作成する
export const Card = (props: { description: string; imageSource: any }) => {
  return (
    <View style={styles.card}>
      <Image source={props.imageSource} style={styles.image} />
      <Text>{props.description}</Text>
    </View>
  );
};

// スタイルを定義する
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
});
