import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#0045b5",
  },
  text: {
    fontFamily: "PatrickHandSC_400Regular",
    textAlign: "center",
    color: "white",
    fontSize: 23,
  },
  area: {
    padding: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#cccccc",
    fontSize: 30,
    fontFamily: "Nunito_800ExtraBold",
    color: "white",
    textAlign: "center",
  },
  signOut: {
    fontFamily: "Nunito_800ExtraBold",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    color: "#ff00bb",
    fontSize: 18,
  },
  image: {
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
    height: 120,
  },
  break: {
    padding: 16,
  },
  smallText: {
    fontFamily: "PatrickHandSC_400Regular",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabBarContainer2: {
    borderRadius: 5,
    backgroundColor: "white",
  },
  button: {
    color: "black",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  container2: {
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
  notificationButton: {
    alignSelf: "center",
    padding: 20,
    marginBottom: 16,
    backgroundColor: "#0045b5",
    borderRadius: 10,
  },
});

export default styles;
