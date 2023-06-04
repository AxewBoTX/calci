import { SafeAreaView, View, Text, StatusBar, Button } from "react-native";
import styles, { colors } from "./lib/styles";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.mainContainer}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
