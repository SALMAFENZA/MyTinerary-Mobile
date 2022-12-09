import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import style from "../styles/citiesCardStyle";

export default function CitiesCard(props) {
  const navigation = useNavigation();
  const itemView = (item) => {
    const goToCity = () => {
      navigation.navigate("City", {
        id: item._id,
      });
    };
    return (
      <Pressable
        style={style.cityCardContainer}
        key={item._id}
        onPress={() => goToCity()}
      >
        <ImageBackground
          source={{ uri: item.photo }}
          resizeMode="cover"
          style={style.cityListItem}
        >
          <Text style={style.cityListItemTitle}>{item.name}</Text>
          <Text style={style.cityListItemContinent}>{item.continent}</Text>
        </ImageBackground>
      </Pressable>
    );
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        height: 400,
        width: "100%",
      }}
    >
      <View>{props.data?.city.map(itemView)}</View>
    </ScrollView>
  );
}
