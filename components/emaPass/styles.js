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
    fontSize: 30,
    fontFamily: "Nunito_800ExtraBold",
    color: "black",
    textAlign: "center",
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
  },
  ruleText: {
    color: "gray",
    margin: 10,
  },
  link: {
    color: "#fdb875",
  },
  page: {
    flex: 1,
    paddingTop: 40,
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
    opacity: 0.2,
    backgroundColor: "black",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#1a1a1a",
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  terms: {
    color: "darkgrey",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "blue",
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
});

export default styles;
