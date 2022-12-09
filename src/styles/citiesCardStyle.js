import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  cityCardContainer: {
    height: 400,
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContentOffset: "center",
},
cityListItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    width: "100%",
    heigth: "100%",
  },
  cityListItemTitle: {
    color: "#FAF3E0",
    textShadowColor: "#1E212D",
    textShadowOffset: { width: 2, heigth: 1 },
    textShadowRadius: 3,
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "600",
  },
  cityListItemContinent: {
    color: "#FAF3E0",
    textShadowColor: "#1E212D",
    textShadowOffset: { width: 2, heigth: 1 },
    textShadowRadius: 3,
    fontSize: 25,
},
});
export default style;
