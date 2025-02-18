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
        title="React Native"
        description="React Nativeは、JavaScriptとReactを使って、iOS、Android、Webのアプリを作成するためのフレームワークです。"
      />
      <Card
        title="TypeScript"
        description="TypeScriptは、JavaScriptに静的型付けを追加したプログラミング言語です。"
      />
      <Card
        title="Expo"
        description="Expoは、React Nativeアプリを簡単に作成するためのツールチェーンです。"
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
