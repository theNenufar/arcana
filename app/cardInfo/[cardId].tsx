import {Text, StyleSheet, Image, ScrollView} from "react-native";
import {imagensCartas} from "@/src/utils/images";
import cards from "@/src/data/cartas.json";
import {useLocalSearchParams} from "expo-router";


export default function Home() {
    const { cardId } = useLocalSearchParams<{ cardId: string }>();
    const card = cards.find(c => String(c.id) === cardId);

    if (!card) {
        return <Text>Card not found!</Text>;
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.name}>
                {card.name}
            </Text>

            <Image
                source={imagensCartas[card.id]}
                style={styles.image}
            />

            <Text style={styles.subtitle}>
                <Text style={styles.keywords}>Palavras-Chave: </Text>
                <Text style={styles.description}>{card.keywords}</Text>
            </Text>
            <Text style={styles.subtitle}>
                <Text style={styles.keywords}>Descrição: </Text>
                <Text style={styles.description}>{card.description}</Text>
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5deff"
    },
    title: {
        fontSize: 28,
    },

    image: {
        alignSelf: "center",
        width: "66%",
        height: 450,
        borderRadius: 8,
        borderColor: "#280137",
        borderWidth: 3
    },

    name: {
        marginTop: 12,
        marginBottom: 12,
        textAlign: "center",
        fontSize: 42,
        fontFamily: "SupermercadoOne_400Regular",
        color: "#280137"
    },

    keywords: {
        marginHorizontal: "10%",
        marginTop: 24,
        textAlign: "left",
        fontSize: 24,
        fontFamily: "SupermercadoOne_400Regular",
        color: "#280137"
    },

    subtitle: {
        marginHorizontal: "10%",
        marginTop: 24,
        textAlign: "left",
        fontSize: 24,
        color: "#280137"
    },

    description: {
        marginHorizontal: "10%",
        marginTop: 24,
        textAlign: "left",
        fontSize: 24,
        color: "#280137"
    }
});
