import { MD3LightTheme as DefaultTheme, MD3Theme } from "react-native-paper";

const AppTheme: MD3Theme = {
    ...DefaultTheme,
    // Specify custom property
    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
        primary: "#0b69fa",
        secondary: "#7dc480",
    },
};

export default AppTheme;
