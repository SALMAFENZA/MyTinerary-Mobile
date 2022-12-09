
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reactions from "../components/Reactions";
import City from "../screens/City";
const Stack = createNativeStackNavigator()


export default function StackCity({ route }) {
    return (
        <Stack.Navigator initialRouteName="Details">
            <Stack.Screen name="Details" options={{ headerShown: false, }}>
                {props => <City {...props} idCity={route.params.id} />}
            </Stack.Screen>
            <Stack.Screen name="reactions" component={Reactions} />
        </Stack.Navigator>
    )
}
    
