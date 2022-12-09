import React from "react";
import { Text, View, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import { useGetAllContinentQuery } from "../redux/reducers/citiesAPI";

export default function Home({ navigation }) {
  let {data: cities} = useGetAllContinentQuery();

  return (
    <ImageBackground
      source={{
        uri: "https://d3t4nwcgmfrp9x.cloudfront.net/upload/top-10-viajes-empresa.jpg",
      }}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    >
      <SafeAreaView>
        <ScrollView>
          <Hero navigation={navigation} />
          <Carousel data={cities} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
