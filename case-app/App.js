import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/HomeScreen";
import Level from "./screens/LevelScreen";
import Measurement from "./screens/MeasurementScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
        <Stack.Screen name="Level Screen" component={Level} options={{ title: "Level Screen" }} />
        <Stack.Screen name="Measurement Screen" component={Measurement} options={{ title: "Measurement Screen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )};
