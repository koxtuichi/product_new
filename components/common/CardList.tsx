// Card要素を使って、CardListを作成する
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card } from "./Card";

// カードリストのコンポーネントを作成する
// 水平方向にならべるために、ScrollViewを使う
export const CardList = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      {/* Cardコンポーネントを配置する */}
      <Card
        description="Description1"
        imageSource={require("../../assets/images/image_sample.png")}
      />
      <Card
        description="Description1"
        imageSource={require("../../assets/images/image_sample.png")}
      />
      <Card
        description="Description1"
        imageSource={require("../../assets/images/image_sample.png")}
      />
      <Card
        description="Description1"
        imageSource={require("../../assets/images/image_sample.png")}
      />
      <Card
        description="Description1"
        imageSource={require("../../assets/images/image_sample.png")}
      />
    </ScrollView>
  );
};

// スタイルを定義する
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
