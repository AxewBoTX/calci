import { SafeAreaView, View, Text, StatusBar, Button } from "react-native";
import { useState } from "react";
import darkStyles from "./styles/darkStyles.js";
import lightStyles from "./styles/lightStyles.js";

export default function App() {
  const [colorTheme, setColorTheme] = useState("dark");
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View
        style={
          colorTheme == "dark"
            ? darkStyles.mainContainer
            : lightStyles.mainContainer
        }
      >
        <View
          style={colorTheme == "dark" ? darkStyles.navbar : lightStyles.navbar}
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
        <View
          style={
            colorTheme == "dark" ? darkStyles.inputArea : lightStyles.inputArea
          }
        ></View>
        <View
          style={
            colorTheme == "dark"
              ? darkStyles.buttonArea
              : lightStyles.buttonArea
          }
        ></View>
      </View>
    </SafeAreaView>
  );
}
