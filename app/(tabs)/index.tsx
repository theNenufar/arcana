import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🔮 Arcana</Text>
            <Text style={{ fontFamily: "SupermercadoOne_400Regular", fontSize: 30 }}>
                TEST FONT
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 28,
    }
});
