/* eslint-disable @typescript-eslint/no-explicit-any */
// Importing helper modules
import { Dimensions, StyleSheet, View } from "react-native";

// Importing core components
import { Ionicons } from "@expo/vector-icons";
import { Card, Text } from "react-native-paper";
import * as colors from "../../../../components/colors";

const Header: React.FC = () => {
    return (
        <Card.Title
            title={
                <View style={styles.subtitle}>
                    <Text variant="labelLarge" style={styles.titleStyle}>
                        My Wallet
                    </Text>
                    <Ionicons
                        name="information-circle-sharp"
                        size={18}
                        color="#fff"
                    />
                </View>
            }
            subtitle={
                <View style={styles.subtitle}>
                    <Text variant="labelLarge" style={styles.subtitleStyle}>
                        UGX 20,000
                    </Text>
                </View>
            }
            style={styles.header}
            right={() => (
                <View style={styles.badge}>
                    <Text
                        variant="bodyLarge"
                        style={{
                            color: "#fff",
                        }}
                    >
                        <Ionicons name="ios-checkmark" size={14} />
                        Earning 7%
                    </Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
    },

    subtitle: {
        gap: 5,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    titleStyle: {
        color: "#fff",
        fontWeight: "600",
    },
    subtitleStyle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "900",
    },
    badge: {
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: "flex-start",
        backgroundColor: colors.secondary,
        paddingVertical: 5,
        width: Dimensions.get("window").width / 4,
    },
});

export default Header;
