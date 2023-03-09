/* eslint-disable @typescript-eslint/no-explicit-any */
// Importing core components
import { StyleSheet, View } from "react-native";
import {
    MaterialIcons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button, Text } from "react-native-paper";
import * as colors from "../../../../components/colors";

interface Slot {
    title: string;
    icon: any;
}

const mySlots: Slot[] = [
    {
        title: "Send Money",
        icon: (
            <MaterialIcons
                name="send-to-mobile"
                size={24}
                color={colors.plainIcon}
            />
        ),
    },
    {
        title: "Withdraw",
        icon: (
            <MaterialCommunityIcons
                name="bank-transfer-out"
                size={24}
                color={colors.plainIcon}
            />
        ),
    },
    {
        title: "Transactions",
        icon: (
            <MaterialCommunityIcons
                name="transfer"
                size={24}
                color={colors.plainIcon}
            />
        ),
    },
    {
        title: "Pay",
        icon: (
            <MaterialIcons name="payment" size={24} color={colors.plainIcon} />
        ),
    },
];

const Slots = () => {
    return (
        <View style={styles.box}>
            <View style={styles.slots}>
                {mySlots.map((item) => (
                    <View key={item.title} style={styles.slot}>
                        {item.icon}
                        <Text variant="bodySmall">{item.title}</Text>
                    </View>
                ))}
            </View>
            <Button
                mode="contained"
                buttonColor={colors.secondary}
                contentStyle={{
                    alignItems: "center",
                }}
            >
                Deposit Money
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    slots: {
        paddingBottom: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    slot: {
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Slots;
