// Importing helper modules
import { useMemo } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { StyleSheet } from "react-native";

// Importing core components
import { Text } from "react-native-paper";
import Layout from "../../components/Layout";
import BalanceCard from "./sections/Balance/BalanceCard";

const Home = () => {
    const { user } = useAuthenticator((context) => [context.user]);

    const greeting = useMemo(() => {
        const hours: number = new Date().getHours();
        let appGreeting = "Good Morning";
        if (hours >= 12 && hours < 17) appGreeting = "Good Afternoon";
        if (hours > 16) appGreeting = "Good Evening";
        return appGreeting;
    }, []);

    return (
        <Layout>
            <Text variant="titleLarge" style={styles.title}>
                {greeting}, {user?.username}
            </Text>
            <BalanceCard />
        </Layout>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: "700",
        marginLeft: 20,
        textTransform: "capitalize",
    },
});

export default Home;
