import { ScrollView, StyleSheet, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Header } from "@/components/Header";
import { TabNavigator } from "@/components/TabNavigator";
import { CardList } from "@/components/CardList";
import { ThemedText } from "@/components/ThemedText";
import React from "react";

export default function HomeScreen() {
  // メールアドレスのバリデーションを追加
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={{ marginTop: 60 }} />
      <Header />
      <TabNavigator />
      <CardList />
      {/* メールアドレスの入力項目を追加 */}
      <ThemedView style={{ padding: 10 }}>
        <ThemedText type="title">メールアドレス</ThemedText>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 5,
            margin: 5,
          }}
          placeholder="メールアドレスを入力してください"
          onChangeText={(text) => {
            if (!validateEmail(text)) {
              alert("正しいメールアドレスを入力してください");
            }
          }}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginBottom: "auto",
  },
});
