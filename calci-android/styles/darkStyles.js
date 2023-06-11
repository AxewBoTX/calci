import { StyleSheet } from "react-native";
import colors from "./colors.js";

const darkStyles = StyleSheet.create({
  buttonArea: {
    flex: 2,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonText: {
    color: colors.dark.text,
  },
  funcButton: {},
  inputArea: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: colors.dark.main,
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
    backgroundColor: colors.dark.themeButtonBg,
    borderRadius: 7,
    padding: 5,
  },
  zeroButton: {},
});

export default darkStyles;
