import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import { useState } from "react";
import colors from "./styles/colors.js";
import darkStyles from "./styles/darkStyles.js";
import lightStyles from "./styles/lightStyles.js";
import Feather from "@expo/vector-icons/Feather";

const Home = () => {
  const [colorTheme, setColorTheme] = useState("light");
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
            style={
              colorTheme == "dark"
                ? darkStyles.themeButton
                : lightStyles.themeButton
            }
            onPress={() => {
              if (colorTheme == "dark") {
                setColorTheme("light");
              } else {
                setColorTheme("dark");
              }
            }}
          ></TouchableOpacity>
        </View>
        <View
          style={
            colorTheme == "dark" ? darkStyles.inputArea : lightStyles.inputArea
          }
        >
          <Text>Input Area</Text>
        </View>
        <View
          style={
            colorTheme == "dark"
              ? darkStyles.buttonArea
              : lightStyles.buttonArea
          }
        >
          <Text>Button Area</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
