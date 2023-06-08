import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import darkStyles from "./styles/darkStyles.js";
import lightStyles from "./styles/lightStyles.js";
import Feather from "@expo/vector-icons/Feather";

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
          <TouchableOpacity
            onPress={() => {
              if (colorTheme == "dark") {
                setColorTheme("light");
              } else if (colorTheme == "light") {
                setColorTheme("dark");
              }
            }}
          >
            {colorTheme == "dark" ? (
              <Feather name="sun" size={28} color="white" />
            ) : (
              <Feather name="moon" size={28} color="black" />
            )}
          </TouchableOpacity>
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
