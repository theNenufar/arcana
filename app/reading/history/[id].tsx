import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import {
    useLocalSearchParams,
    router
} from "expo-router";

import {
    useEffect,
    useState
} from "react";

import TarotCard
    from "@/src/components/TarotCard";

import {
    getReadingById,
    SavedReading
} from "@/src/storage/readings";

const spreads = {

    daily: {
        title: "Carta do Dia",
        positions: ["Sua Carta"]
    },

    ppf: {
        title:
            "Passado • Presente • Futuro",

        positions: [
            "Passado",
            "Presente",
            "Futuro"
        ]
    },

    celtic: {
        title: "Cruz Celta",

        positions: [
            "Presente",
            "Desafio",
            "Raiz",
            "Passado",
            "Influências",
            "Futuro",
            "Você",
            "Ambiente",
            "Esperanças",
            "Resultado"
        ]
    }

};

export default function HistoryReading() {

    const { id } =
        useLocalSearchParams();

    const [reading, setReading] =
        useState<SavedReading | null>(
            null
        );

    useEffect(() => {

        loadReading();

    }, []);

    async function loadReading() {

        const data =
            await getReadingById(
                String(id)
            );

        setReading(data);
    }

    if (!reading) {

        return (
            <View style={styles.container}>
                <Text>
                    Carregando...
                </Text>
            </View>
        );
    }

    const spread =
        spreads[
            reading.type as keyof typeof spreads
            ];

    const cards = reading.cards;

    function openCard(cardId: number) {

        router.push({
            pathname:
                "/cardInfo/[cardId]",

            params: {
                cardId
            }
        });
    }

    const renderDaily = () => (

        <View style={styles.centered}>

            <TarotCard
                cardId={cards[0]}
                revealed
                label={spread.positions[0]}
                onPress={() =>
                    openCard(cards[0])
                }
                width={280}
                height={500}
            />

        </View>
    );

    const renderPPF = () => (

        <View style={styles.row}>

            {spread.positions.map(
                (position, index) => (

                    <TarotCard
                        key={index}
                        cardId={cards[index]}
                        revealed
                        label={position}
                        onPress={() =>
                            openCard(
                                cards[index]
                            )
                        }
                        width={110}
                        height={196}
                    />

                )
            )}

        </View>
    );

    const renderCeltic = () => (

        <View style={styles.celticContainer}>

            <View style={styles.row}>

                <TarotCard
                    cardId={cards[4]}
                    revealed
                    label={spread.positions[4]}
                    onPress={() =>
                        openCard(cards[4])
                    }
                />

            </View>

            <View style={styles.crossRow}>

                <TarotCard
                    cardId={cards[3]}
                    revealed
                    label={spread.positions[3]}
                    onPress={() =>
                        openCard(cards[3])
                    }
                />

                <View style={styles.crossCenter}>

                    <TarotCard
                        cardId={cards[0]}
                        revealed
                        label={spread.positions[0]}
                        onPress={() =>
                            openCard(cards[0])
                        }
                    />

                    <View
                        style={
                            styles.crossingCard
                        }
                    >

                        <TarotCard
                            cardId={cards[1]}
                            revealed
                            label={
                                spread.positions[1]
                            }
                            rotated
                            hideLabel
                            onPress={() =>
                                openCard(cards[1])
                            }
                        />

                    </View>

                </View>

                <TarotCard
                    cardId={cards[5]}
                    revealed
                    label={spread.positions[5]}
                    onPress={() =>
                        openCard(cards[5])
                    }
                />

            </View>

            <View style={styles.centered}>

                <TarotCard
                    cardId={cards[2]}
                    revealed
                    label={spread.positions[2]}
                    onPress={() =>
                        openCard(cards[2])
                    }
                />

            </View>

            <View style={styles.row}>

                <TarotCard
                    cardId={cards[6]}
                    revealed
                    label={spread.positions[6]}
                    onPress={() =>
                        openCard(cards[6])
                    }
                />

                <TarotCard
                    cardId={cards[7]}
                    revealed
                    label={spread.positions[7]}
                    onPress={() =>
                        openCard(cards[7])
                    }
                />

            </View>

            <View style={styles.row}>

                <TarotCard
                    cardId={cards[8]}
                    revealed
                    label={spread.positions[8]}
                    onPress={() =>
                        openCard(cards[8])
                    }
                />

                <TarotCard
                    cardId={cards[9]}
                    revealed
                    label={spread.positions[9]}
                    onPress={() =>
                        openCard(cards[9])
                    }
                />

            </View>

        </View>
    );

    return (

        <ScrollView style={styles.container}>

            <Text style={styles.title}>
                {spread.title}
            </Text>

            {reading.type === "daily"
                && renderDaily()}

            {reading.type === "ppf"
                && renderPPF()}

            {reading.type === "celtic"
                && renderCeltic()}

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5deff"
    },

    title: {
        fontSize: 30,
        textAlign: "center",
        marginVertical: 20,
        color: "#280137",
        fontFamily:
            "SupermercadoOne_400Regular"
    },

    centered: {
        alignItems: "center"
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },

    celticContainer: {
        alignItems: "center"
    },

    crossRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    crossCenter: {
        width: 150,
        height: 211,
        justifyContent: "center",
        alignItems: "center"
    },

    crossingCard: {
        position: "absolute",
        bottom: 5,
        pointerEvents: "box-none"
    }

});