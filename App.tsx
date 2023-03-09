// Importing helper modules
import { useFonts } from "expo-font";

// Importing amplify setup
import { Authenticator } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";

// Importing root app
import AppRoot from "./AppRoot";

// Connecting backend
Amplify.configure(config);

export default function App() {
    const [fontsLoaded] = useFonts({
        "Nunito": require("./assets/fonts/nunito.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Authenticator.Provider>
            <AppRoot />
        </Authenticator.Provider>
    );
}
