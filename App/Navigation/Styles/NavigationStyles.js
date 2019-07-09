import { StyleSheet } from "react-native";
import { Colors,Metrics } from "../../Themes";

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTitle: {
    color: Colors.white,
    fontFamily: "Nunito-Regular",
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    ...Metrics.text.large
  }
});
