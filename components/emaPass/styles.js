import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#8aff8a",
  },
  Button: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
  },
  bigText: {
    fontFamily: "Nunito_800ExtraBold",
    paddingTop: 200,
    fontSize: 30,
    textAlign: "center",
  },
  break: {
    padding: 16,
  },
  headText: {
    fontFamily: "Nunito_800ExtraBold",
    textAlign: "center",
    fontSize: 30,
  },
  subHeadText: {
    fontFamily: "Nunito_800ExtraBold",
    textAlign: "center",
    fontSize: 20,
  },
  bodyText: {
    fontFamily: "PatrickHandSC_400Regular",
    fontSize: 16,
    paddingLeft: 10,
    alignSelf: "center",
  },
  ruleText: {
    color: "gray",
    margin: 10,
  },
  link: {
    color: "#fdb875",
  },
  page: {
    flexGrow: 1,
    backgroundColor: "#8aff8a",
  },
  text: {
    alignSelf: "center",
  },
  headerFooterContainer: {
    marginVertical: 10,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  terms: {
    color: "darkgrey",
  },
});

export default styles;
