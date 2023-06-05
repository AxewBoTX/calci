import { SafeAreaView, View, Text, StatusBar, Button } from "react-native";
import { useState } from "react";
import styles, { colors } from "./lib/styles";

export default function App() {
  const [colorTheme, setColorTheme] = useState("dark");
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View
        style={
          colorTheme == "dark"
            ? styles.dark.mainContainer
            : styles.light.mainContainer
        }
      >
        <Button
          title="Theme"
          onPress={() => {
            if (colorTheme == "dark") {
              setColorTheme("light");
            } else if (colorTheme == "light") {
              setColorTheme("dark");
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
