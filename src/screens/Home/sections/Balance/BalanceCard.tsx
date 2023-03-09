// Importing helper modules

// Importing core components
import Header from "./Header";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Slots from "./Slots";

const BalanceCard = () => {
    return (
        <Card style={styles.card}>
            <Header />
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
