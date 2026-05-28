import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { router } from "expo-router";

export default function Reading() {

    const spreads = [
        {
            title: "Carta do Dia",
            type: "daily",
            description: "Uma carta para orientar seu dia."
        },
        {
            title: "Passado • Presente • Futuro",
            type: "ppf",
            description: "Uma visão sobre sua jornada."
        },
        {
            title: "Cruz Celta",
            type: "celtic",
            description: "Uma leitura mais profunda."
        }
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Escolha sua Tiragem
            </Text>

            {spreads.map((spread) => (
                <TouchableOpacity
                    key={spread.type}
                    style={styles.card}
                    onPress={() =>
                        router.push(`/reading/${spread.type}`)
                    }
                >

                    <Text style={styles.cardTitle}>
                        {spread.title}
                    </Text>

                    <Text style={styles.cardDescription}>
                        {spread.description}
                    </Text>

                </TouchableOpacity>
            ))}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5deff",
        padding: 20,
        justifyContent: "center"
    },

    title: {
        fontSize: 34,
        textAlign: "center",
        marginBottom: 40,
        color: "#280137",
        fontFamily: "SupermercadoOne_400Regular"
    },

    card: {
        backgroundColor: "#280137",
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#4a0c63"
    },

    cardTitle: {
        fontSize: 24,
        color: "#f5deff",
        marginBottom: 8,
        fontFamily: "SupermercadoOne_400Regular"
    },

    cardDescription: {
        fontSize: 16,
        color: "#e8cfff",
        fontFamily: "SupermercadoOne_400Regular"
    }
});