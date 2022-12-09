import { View, Text, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import style from "../styles/itinerariesStyle";
import Reactions from "./Reactions";

export default function Itinerary(props) {
  const itinerary = props.data;

  return (
    <>
      <ScrollView>
        <View style={style.itinerarycontainer}>
          <Text style={style.itineraryname}>{itinerary.name}</Text>
          <Image
            source={{ uri: itinerary.photo[0] }}
            style={{
              width: 300,
              borderRadius: 10,
              height: 100,
            }}
          />
          <View style={style.itinerarybody}>
            <View style={style.itinerarydata}>
              <Text style={style.itinerarydatap}>
                <Text style={style.itinerarydatap}>Duration: </Text>
                {itinerary.duration} hs
              </Text>
            </View>
            <Text style={style.itinerarydatap}>
              <Text style={style.itinerarydatap}>Price:</Text> U$D{" "}
              {itinerary.price}
            </Text>
          </View>
          <View>
            <Text style={style.itinerarydescription}>
              {itinerary.description}
            </Text>
          </View>
          <Reactions itineraryId={itinerary._id} />
          <Pressable style={style.commentsbtn}>
            <Text style={style.text}>Show Comments</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
