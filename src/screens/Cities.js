import React, { useState, useEffect, useRef } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  useGetAllContinentQuery,
  useGetAllQuery,
} from "../redux/reducers/citiesAPI";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
import CitiesCard from "../components/CitiesCard";

export default function Cities() {
  let checkbox = []
  const [search, setSearch] = useState("");
  const [orderValue, setOrderValue] = useState("none");
  const [selectedCountry, setselectedCountry] = useState("none");
  const [country, setCountry] = useState([]);
  const checkRef = useRef();

  let { data: checkboxs } = useGetAllContinentQuery();
  let { data: cities } = useGetAllQuery({ search, checkbox });

  let checkboxArray = checkboxs?.city;
  const checkBox = Array.from(new Set(checkboxArray?.map((e) => e.continent)));




  function filterCheck(e, h) {
    // checkbox.push(e)    
    // setCheckbox(e);
    console.log(checkbox);
  }

  return (
    <ImageBackground
      source={{
        uri: "https://d3t4nwcgmfrp9x.cloudfront.net/upload/top-10-viajes-empresa.jpg",
      }}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView style={styles.citiesPageMain} nestedScrollEnabled={true}>
        <Text style={styles.citiesPageTitle}>Cities</Text>
        <View style={styles.filterdivs}>
          <TextInput
            onChangeText={(value) => setSearch(value)}
            placeholder="Search"
            style={styles.citiesPageSearch}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {checkBox?.map((value, index) => (
            <View key={value}>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                text={value}
                value={value}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                ref={checkRef}
                onPress={(e) => filterCheck(value , e)}
              />
            </View>
          ))}
        </View>
        <CitiesCard data ={cities}/>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  citiesPageTitle: {
    margin: 30,
    color: "#FAF3E0",
    fontSize: 34,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  citiesPageSearch: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E212D",
    backgroundColor: "rgb(250, 243, 224)",
    width: "60%",
    borderRadius: 20,
    alignSelf: "center",
    padding: 5,
  },
});
