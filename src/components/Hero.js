import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import Button from "./Button";
import { useGetAllContinentQuery } from "../redux/reducers/citiesAPI";


const image = {
  uri: "https://d3t4nwcgmfrp9x.cloudfront.net/upload/top-10-viajes-empresa.jpg",
};

export default function Hero({ navigation }) {
  return (
    <View>
        <Text style={styles.titleText}>My tinerary ♥ </Text>
        <Text style={styles.text}> Create your dreams, Right now!  </Text>           
        <Button navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  logotype: {
    width: '20%',
    height: 100,
    alignSelf: 'center'
},
    text: {
        color: '#FAF3E0',
        fontSize: 24,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
        },
    titleText: {
        marginTop: 35,
        color: '#FAF3E0',
        fontSize: 38,
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    
        },
        container:{
            padding: 8,
            marginTop: 10,
            marginBottom: 10,
        },

    });
