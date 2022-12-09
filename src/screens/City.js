import React , { useEffect, useState } from 'react'
import { BASE_URL } from "../api/url";
import axios from 'axios'
import { ImageBackground, ScrollView, Text, View } from "react-native"
import style from '../styles/cityStyle';
import Itinerary from '../components/Itinerary';



export default function City(props) {
  const { idCity:id } = props
  const [city, setCity] = useState({})  
  const [itineraries, setItineraries] = useState({})

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/cities/${id}`)
      .then((res) => setCity(res.data.response))
      .catch((err) => console.log(err));
    axios
      .get(`${BASE_URL}/api/itineraries?cityId=${id}`)
      .then((res) => setItineraries(res.data.response))
      .catch((err) => console.log(err));
  }, [id]);


  const mainBg = {uri: 'https://d3t4nwcgmfrp9x.cloudfront.net/upload/top-10-viajes-empresa.jpg'}
  return (
    <ImageBackground source={mainBg} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <ScrollView style={style.cityMain}>
            {id ?<>
            <ImageBackground style={style.cityContainer}>
            <View style={style.details}>
                <ImageBackground style={style.cityItem} source={{ uri: city.photo }}>
                    <Text style={style.cityItemTitle}>{city.city}</Text>
                </ImageBackground>
                <View style={style.cityPDiv}>
                    <View style={style.cityPInnerdiv}>
                        <Text style={style.cityInnerP}>
                            <Text style={style.cityPSpan}>Country: </Text>
                            {city.name}.
                        </Text>
                        <Text style={style.cityInnerP} >
                            <Text style={style.cityPSpan}>Continent: </Text> {city.continent}.
                        </Text>
                        <Text style={style.cityInnerP} >
                            <Text style={style.cityPSpan}>Population: </Text> {city.population}.
                        </Text>
                    </View>
                    <Text style={style.cityP}>{city.description}</Text>
                    </View>
                    </View>
                        {itineraries?.length?
                            itineraries.map(itinerary => {
                            return (
                                <Itinerary data={itinerary} key={itinerary._id} />
                                    )
                                })
                            :<Text style={style.citySubtitle}> We don't have any itineraries here right now...</Text> }
        </ImageBackground>
            </> 
        : <View>
        <Text>Please Select a city before</Text>
        </View> }
        </ScrollView>
        </ImageBackground>
  )
}
