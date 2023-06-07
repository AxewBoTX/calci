import { StyleSheet } from "react-native";
import colors from "./colors.js";

const lightStyles = StyleSheet.create({
  buttonArea: {
    flex: 2,
  },
  inputArea: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: colors.light.main,
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
  },
  navbar: {
    alignItems: "flex-start",
    marginLeft: "15px",
    marginTop: "10px",
  },
});

export default lightStyles;
