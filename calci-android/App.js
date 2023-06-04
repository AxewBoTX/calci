import { SafeAreaView, Text, StatusBar } from "react-native";
import styles from "./lib/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
