import { StyleSheet } from "react-native";

const COLORS = {
  white: "#fff",
  mediumGrey: "#666",
  darkGrey: "#999",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0045b5",
    flex: 1,
  },
  backTextWhite: {
    color: COLORS.white,
  },
  rowFront: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    margin: 5,
    marginBottom: 15,
    shadowColor: COLORS.mediumGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: COLORS.mediumGrey,
  },
  details: {
    fontSize: 14,
    color: COLORS.darkGrey,
  },
  break: {
    padding: 6,
  },
  bigText: {
    fontFamily: "Nunito_800ExtraBold",
    color: COLORS.white,
    fontSize: 40,
    textAlign: "center",
  },
  smallText: {
    fontFamily: "PatrickHandSC_400Regular",
    fontSize: 16,
    textAlign: "center",
    color: COLORS.white,
  },
});

export default styles;
