// Importing core components
import AppTheme from "./src/modules/Theme";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

// Importing redux setup
import { Provider } from "react-redux";
import store from "./src/context/store";

// Importing amplify setup
import { Amplify } from "aws-amplify";
import config from "./aws-exports";

// Connecting backend
Amplify.configure(config);

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={AppTheme}>
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                    <StatusBar style="auto" />
                </View>
            </PaperProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
