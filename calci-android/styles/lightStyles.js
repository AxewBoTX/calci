import { StyleSheet } from "react-native";
import colors from "./colors.js";

const lightStyles = StyleSheet.create({
  buttonArea: {
    flex: 2,
  },
  funcButton: {},
  inputArea: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: colors.light.main,
    height: "100%",
    width: "100%",
  },
  miscButton: {},
  navbar: {
    alignItems: "flex-start",
    marginLeft: 7,
    marginTop: 7,
  },
  numberButton: {},
  themeButton: {
    backgroundColor: colors.light.themeButtonBg,
    borderRadius: 7,
    padding: 5,
  },
  zeroButton: {},
});

export default lightStyles;
