// Importing helper modules
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing screens
import Home from "../screens/Home/Home";

// Importing core components
import { Ionicons } from "@expo/vector-icons";
import * as colors from "../components/colors";

const Tab = createBottomTabNavigator();

export default function Root() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === "Orders") {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? "ios-list"
                                            : "ios-list-outline"
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "Home") {
                            return (
                                <Ionicons
                                    name={focused ? "home" : "home-outline"}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "My Account") {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? "person-circle-sharp"
                                            : "person-circle-outline"
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.plainIcon,
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: "600",
                    },
                    tabBarItemStyle: {
                        paddingVertical: 5,
                    },
                    tabBarStyle: {
                        height: 60,
                    },
                })}
            >
                <Tab.Screen name="Orders" component={Home} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="My Account" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
