import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ReadingScreen() {

    const { type } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Tiragem: {type}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5deff"
    },

    text: {
        fontSize: 28,
        color: "#280137",
        fontFamily: "SupermercadoOne_400Regular"
    }

});