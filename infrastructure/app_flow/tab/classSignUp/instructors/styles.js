import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  gradient: {
    height: "15%",
  },
  smallImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 230 / 2,
    marginTop: -85,
  },
  card: {
    backgroundColor: "#0045b5",
  },
  cardOutsideView: {
    margin: 5,
    padding: 30,
  },
  cardInsideView: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: "Nunito_800ExtraBold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 26,
    fontFamily: "PatrickHandSC_400Regular",
    textAlign: "center",
    margin: 6,
  },
  instructorProfileCard: {
    margin: 10,
  },
  instructorCardContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  instructorCardText: {
    marginTop: 3,
    marginLeft: 8,
    fontSize: 24,
    fontFamily: "PatrickHandSC_400Regular",
    textAlign: "center",
  },
});

export default styles;
