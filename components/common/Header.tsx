import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemedText } from "./ThemedText";

export const Header = () => {
  //メールアドレスのバリデーション
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  return (
    <View style={styles.headerContainer}>
      {/* ロゴ */}
      <View style={styles.logoContainer}></View>
      {/* メールアドレス入力項目 */}
      {/* 右側：アイコン群 */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => console.log("通知タップする")}>
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
    flex: 0.2,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 15,
  },
});
