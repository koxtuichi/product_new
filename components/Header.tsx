import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TabNavigator } from "./TabNavigator";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/*  */}
      <View>サークル</View>

      {/* 右側：アイコン群 */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => console.log("通知タップ")}>
          <Icon name="bell" size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("ブックマークタップ")}>
          <Icon name="bookmark" size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("メッセージタップ")}>
          <Icon name="envelope" size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // 左右に配置
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 15,
  },
});
