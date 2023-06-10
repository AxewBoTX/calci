import { StyleSheet } from "react-native";
import colors from "./colors.js";

const darkStyles = StyleSheet.create({
  buttonArea: {
    flex: 2,
  },
  inputArea: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: colors.dark.main,
    height: "100%",
    width: "100%",
  },
  navbar: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 10,
  },
  themeButton: {},
});

export default darkStyles;
