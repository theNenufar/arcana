import {
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";

import { useFocusEffect , router } from "expo-router";

import { useCallback , useState } from "react";



import {
    getReadings,
    SavedReading
} from "@/src/storage/readings";

export default function Home() {

    const [readings, setReadings] =
        useState<SavedReading[]>([]);

    useFocusEffect(
        useCallback(() => {
            loadReadings();
        }, [])
    );

    async function loadReadings() {
        const data =
            await getReadings();

        setReadings(data);
    }

    function formatType(type: string) {

        switch (type) {
            case "daily":
                return "Carta do Dia";
            case "ppf":
                return "Passado • Presente • Futuro";
            case "celtic":
                return "Cruz Celta";
            default:
                return type;
        }
    }

    function formatDate(date: string) {

        return new Date(date)
            .toLocaleString("pt-BR");
    }

    return (

        <ScrollView style={styles.container} contentContainerStyle={styles.content}>

            <Text style={styles.title}>
                Bem-vindo à Arcana
            </Text>

            <Text style={styles.description}>
                Descubra mensagens, reflexões e
                caminhos através das cartas do tarot.
                Realize tiragens de forma simples,
                intuitiva e mística diretamente
                pelo seu celular.
            </Text>

            <Text style={styles.divider}>
                ✦ ✦ ✦
            </Text>

            <Text style={styles.historyTitle}>
                Histórico
            </Text>

            {readings.length === 0 && (

                <Text style={styles.emptyText}>
                    Nenhuma tiragem realizada ainda.
                </Text>

            )}

            {readings.map((reading) => (

                <TouchableOpacity
                    key={reading.id}
                    style={styles.card}
                    onPress={() =>
                        router.push(
                            `/reading/history/${reading.id}`
                        )
                    }
                >

                    <Text style={styles.cardTitle}>
                        {formatType(reading.type)}
                    </Text>

                    <Text style={styles.cardDate}>
                        {formatDate(
                            reading.createdAt
                        )}
                    </Text>

                </TouchableOpacity>

            ))}

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5deff",
        padding: 20
    },

    content: {
        paddingBottom: 40
    },

    title: {
        fontSize: 34,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 20,
        color: "#280137",
        fontFamily: "SupermercadoOne_400Regular"
    },

    description: {
        fontSize: 18,
        textAlign: "center",
        color: "#280137",
        lineHeight: 28,
        paddingHorizontal: 10,
        fontFamily: "SupermercadoOne_400Regular"
    },

    divider: {
        textAlign: "center",
        fontSize: 24,
        color: "#280137",
        marginVertical: 30
    },

    historyTitle: {
        fontSize: 30,
        marginBottom: 20,
        color: "#280137",
        textAlign: "center",
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

    cardDate: {
        fontSize: 16,
        color: "#e8cfff"
    },

    emptyText: {
        textAlign: "center",
        color: "#280137",
        fontSize: 18,
        marginTop: 20,
        fontFamily: "SupermercadoOne_400Regular"
    }

});