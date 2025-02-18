import React from "react";
import { View, Text, StyleSheet } from "react-native";

// カードのコンポーネントを作成する
export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
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
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
