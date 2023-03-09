// Importing helper modules
import { useState } from "react";

// Importing core components
import Header from "./Header";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Slots from "./Slots";

const BalanceCard = () => {
    const [viewBalance, setViewBalance] = useState<boolean>(true);

    console.log(viewBalance);

    return (
        <Card style={styles.card}>
            <Header viewBalance={viewBalance} setViewBalance={setViewBalance} />
            <Card.Content style={styles.card}>
                <Slots />
            </Card.Content>
        </Card>
    );
};

export default BalanceCard;

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
});
