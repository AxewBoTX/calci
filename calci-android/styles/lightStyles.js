import { StyleSheet } from "react-native";
import colors from "./colors.js";

const darkStyles = StyleSheet.create({
  buttonArea: {
    flex: 2,
    flexDirection: "column",
    gap: 20,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonText: {
    color: colors.light.buttonFg,
    fontSize: 30,
    fontWeight: "500",
  },
  funcButton: {
    alignItems: "center",
    backgroundColor: colors.light.funcBg,
    borderRadius: 50,
    height: 65,
    justifyContent: "center",
    width: 65,
  },
  inputArea: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
    marginRight: 30,
  },
  inputText: {
    color: colors.light.text,
    fontSize: 45,
  },
  mainContainer: {
    backgroundColor: colors.light.main,
    height: "100%",
    width: "100%",
  },
  miscButton: {
    alignItems: "center",
    backgroundColor: colors.light.miscBg,
    borderRadius: 50,
    height: 65,
    justifyContent: "center",
    width: 65,
  },
  navbar: {
    alignItems: "flex-start",
    marginLeft: 7,
    marginTop: 7,
  },
  numberButton: {
    alignItems: "center",
    backgroundColor: colors.light.numberBg,
    borderRadius: 50,
    height: 65,
    justifyContent: "center",
    width: 65,
  },
  themeButton: {
    backgroundColor: colors.light.themeButtonBg,
    borderRadius: 7,
    padding: 5,
  },
  zeroButton: {
    alignItems: "center",
    backgroundColor: colors.light.numberBg,
    borderRadius: 50,
    height: 65,
    justifyContent: "center",
    width: 145,
  },
});

export default darkStyles;
