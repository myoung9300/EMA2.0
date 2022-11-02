import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  outerModalView: {
    height: Dimensions.get("screen").height / 2,
    marginTop: 100,

    backgroundColor: "#000000aa",
    borderRadius: 20,
    alignItems: "center",
  },
  innerModalView: {
    margin: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#0045b5",
  },
  modalText: {
    margin: 2,
    fontSize: 24,
    color: "white",
    fontFamily: "Nunito_800ExtraBold",
    textAlign: "center",
  },
  title: {
    fontFamily: "Nunito_800ExtraBold",
    marginTop: 30,
    color: "white",
    fontSize: 20,
    width: Dimensions.get("screen").width / 2,
  },
  subTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 12,
    color: "white",
    width: Dimensions.get("screen").width / 2,
  },
});

export default styles;
