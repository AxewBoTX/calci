import { StyleSheet } from "react-native";

export const colors = {
  dark: {
    main: "#000",
  },
  light: {
    main: "#fff",
  },
};

const styles = {
  dark: StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.dark.main,
      bottom: 0,
      left: 0,
      position: "fixed",
      right: 0,
      top: 0,
    },
  }),
  light: StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.light.main,
      bottom: 0,
      left: 0,
      position: "fixed",
      right: 0,
      top: 0,
    },
  }),
};

export default styles;
