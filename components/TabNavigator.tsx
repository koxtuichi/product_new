import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
function TabScreen() {
  return <></>;
}
export const TabNavigator = () => {
  // タブ要素を生成するための配列を作成
  const tabs = [
    { name: "TabOne", title: "ホーム" },
    { name: "TabTwo", title: "トークルーム" },
    { name: "TabThree", title: "相談窓口" },
    { name: "TabFour", title: "PR募集掲示板" },
    { name: "magazine", title: "マガジン" },
    { name: "event", title: "イベント" },
    { name: "service", title: "会員向けサービス提供" },
    { name: "club", title: "部活動" },
    { name: "notice", title: "運営からのお知らせ" },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: "#f4511e" },
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarItemStyle: { width: "auto" },
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={TabScreen}
          options={{ title: tab.title, tabBarLabelStyle: { color: "#000" } }}
        />
      ))}
    </Tab.Navigator>
  );
};

// スタイルを定義する
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
