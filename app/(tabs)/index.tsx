import { ScrollView, StyleSheet, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Header } from "@/components/Header";
import { TabNavigator } from "@/components/TabNavigator";
import { CardList } from "@/components/CardList";
import { ThemedText } from "@/components/ThemedText";
import React from "react";

export default function HomeScreen() {
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
          placeholder="メールアドレスを入力してください"
          keyboardType="email-address"
          style={{ padding: 10, borderWidth: 1, borderColor: "#ccc" }}
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
