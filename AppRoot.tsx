// Importing theme setup
import AppTheme from "./src/modules/Theme";
import { Provider as PaperProvider } from "react-native-paper";

// Importing root app
import Root from "./src/navigators/Root";

export default function AppRoot() {
    return (
        <PaperProvider theme={AppTheme}>
            <Root />
        </PaperProvider>
    );
}
