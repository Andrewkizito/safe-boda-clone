/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";

const Layout: React.FC<{ children: any }> = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            {children}
        </View>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: "#fafafa",
    },
});

export default Layout;
