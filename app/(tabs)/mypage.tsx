// mypageコンポーネントの作成をする
// mypageコンポーネントの作成をする

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function MyPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is MyPage</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
