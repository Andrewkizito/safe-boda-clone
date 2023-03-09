import {
    configureFonts,
    MD3LightTheme as DefaultTheme,
    MD3Theme,
} from "react-native-paper";

const AppTheme: MD3Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#0b69fa",
        secondary: "#7dc480",
    },
    fonts: configureFonts({
        config: { ...DefaultTheme.fonts, fontFamily: "Nunito" },
        isV3: true,
    }),
};

export default AppTheme;
