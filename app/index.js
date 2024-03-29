import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Link, Stack } from "expo-router";


export default function Page() {

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Home' }} />
            
            <View style={styles.main}>
                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
                <Link
                    href={"/Alex"}
                    style={styles.link}  >
                    Open Profile
                </Link>
                <Link
                    href={{
                        pathname: '/EdzelIntes',
                    }}
                    style={styles.link}  >
                    Open Edzel Profile
                </Link>

            </View>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={'#fff'}
                translucent
                style="auto"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },

    link: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
    }
});
