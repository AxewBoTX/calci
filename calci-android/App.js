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
import ButtonList from "./lib/buttonList.js";

const Home = () => {
  const [colorTheme, setColorTheme] = useState("light");
  const [input, setInput] = useState("");
  const handleInput = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleCalculate = () => {
    setInput(eval(input).toString());
  };
  const handleEverything = (button) => {
    switch (button.func) {
      case "Input":
        handleInput(button.text);
        break;
      case "Clear":
        handleClear();
        break;
      case "Calculate":
        handleCalculate();
        break;
    }
  };
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
          >
            <Feather
              name={colorTheme == "dark" ? "sun" : "moon"}
              color={
                colorTheme == "dark" ? colors.dark.text : colors.light.text
              }
              size={32}
            />
          </TouchableOpacity>
        </View>
        <View
          style={
            colorTheme == "dark" ? darkStyles.inputArea : lightStyles.inputArea
          }
        >
          {input}
        </View>
        <View
          style={
            colorTheme == "dark"
              ? darkStyles.buttonArea
              : lightStyles.buttonArea
          }
        >
          {ButtonList[0].map((button) => {
            return (
              <TouchableOpacity
                key={button.text}
                style={
                  colorTheme == "dark"
                    ? darkStyles[`${button.class}Button`]
                    : lightStyles[`${button.class}Button`]
                }
              >
                <Text>{button.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
