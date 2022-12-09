import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTineraries from "../screens/MyTineraries"
import Reactions from "../components/Reactions";
const Stack = createNativeStackNavigator()


export default function StackMyTineraries({ route }) {
    return (
        <Stack.Navigator initialRouteName="Itineraries">
            <Stack.Screen name="Itineraries" options={{ headerShown: false, }} component={MyTineraries} />
            <Stack.Screen name="reaction" component={Reactions} />
        </Stack.Navigator>
    )
}
    