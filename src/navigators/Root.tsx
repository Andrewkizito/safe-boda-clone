// Importing helper modules
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing screens
import Home from "../screens/Home/Home";

const Tab = createBottomTabNavigator();

export default function Root() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
