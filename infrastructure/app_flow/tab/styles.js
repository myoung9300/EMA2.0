import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#0045b5",
  },
  image: {
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
    height: 120,
  },
  text: {
    fontFamily: "PatrickHandSC_400Regular",
    textAlign: "center",
    color: "white",
    fontSize: 23,
  },
  break: {
    padding: 16,
  },
  area: {
    padding: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white",
    fontSize: 30,
    fontFamily: "Nunito_800ExtraBold",
    color: "white",
    textAlign: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
    fontFamily: "PatrickHandSC_400Regular",
    fontSize: 20,
  },
  tabBarContainer: {
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgb(49,115,193)",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    color: "white",
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
