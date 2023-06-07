import { StyleSheet } from "react-native";
import colors from "./colors.js";

const lightStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.light.main,
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
  },
});

export default lightStyles;
