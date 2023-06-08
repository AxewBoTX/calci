import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import { useState } from "react";
import darkStyles from "./styles/darkStyles.js";
import lightStyles from "./styles/lightStyles.js";

const Home = () => {
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
      ></View>
    </SafeAreaView>
  );
};

export default Home;
