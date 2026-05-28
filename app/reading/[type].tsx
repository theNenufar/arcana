import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { useLocalSearchParams , router } from "expo-router";
import { useEffect, useState, useRef } from "react";

import TarotCard from "@/src/components/TarotCard";
import { drawUniqueCards } from "@/src/utils/drawCards";
import { saveReading } from "@/src/storage/readings";

const spreads = {

    daily: {
        title: "Carta do Dia",
        size: 1,
        positions: ["Sua Carta"]
    },

    ppf: {
        title: "Passado • Presente • Futuro",
        size: 3,
        positions: [
            "Passado",
            "Presente",
            "Futuro"
        ]
    },

    celtic: {
        title: "Cruz Celta",
        size: 10,
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

export default function ReadingScreen() {

    const { type } = useLocalSearchParams();

    const spread =
        spreads[type as keyof typeof spreads];

    const [drawnCards, setDrawnCards] =
        useState<number[]>([]);

    const [revealedCards, setRevealedCards] =
        useState<boolean[]>([]);

    const hasSaved =
        useRef(false);

    useEffect(() => {

        if (!spread) return;

        const cards =
            drawUniqueCards(spread.size);

        setDrawnCards(cards);

        setRevealedCards(
            Array(spread.size).fill(false)
        );

    }, [type]);

    if (!spread) {
        return (
            <View style={styles.container}>
                <Text>Tipo inválido.</Text>
            </View>
        );
    }

    const handleCardPress = (index: number) => {

        if (!revealedCards[index]) {

            const updated =
                [...revealedCards];

            if (!hasSaved.current) {

                saveReading({
                    id: Date.now().toString(),
                    type: String(type),
                    cards: drawnCards,
                    createdAt: new Date().toISOString()
                });

                hasSaved.current = true;
            }

            updated[index] = true;

            setRevealedCards(updated);

            return;
        }

        router.push({
            pathname: "/cardInfo/[cardId]",
            params: {
                cardId: drawnCards[index]
            }
        });
    };

    const renderDaily = () => (
        <View style={styles.centered}>
            <TarotCard
                cardId={drawnCards[0]}
                revealed={revealedCards[0]}
                label={spread.positions[0]}
                onPress={() => handleCardPress(0)}
                width={280}
                height={500}
            />
        </View>
    );

    const renderPPF = () => (
        <View style={styles.row}>
            {spread.positions.map((position, index) => (
                <TarotCard
                    key={index}
                    cardId={drawnCards[index]}
                    revealed={revealedCards[index]}
                    label={position}
                    onPress={() => handleCardPress(index)}
                    width={110}
                    height={196}
                />
            ))}
        </View>
    );

    const renderCeltic = () => (
        <View style={styles.celticContainer}>

            <View style={styles.row}>
                <TarotCard
                    cardId={drawnCards[4]}
                    revealed={revealedCards[4]}
                    label={spread.positions[4]}
                    onPress={() => handleCardPress(4)}
                />
            </View>

            <View style={styles.crossRow}>

                <TarotCard
                    cardId={drawnCards[3]}
                    revealed={revealedCards[3]}
                    label={spread.positions[3]}
                    onPress={() => handleCardPress(3)}
                />

                <View style={styles.crossCenter}>

                    <TarotCard
                        cardId={drawnCards[0]}
                        revealed={revealedCards[0]}
                        label={spread.positions[0]}
                        onPress={() => handleCardPress(0)}
                    />

                    <View style={styles.crossingCard}>
                        <TarotCard
                            cardId={drawnCards[1]}
                            revealed={revealedCards[1]}
                            label={spread.positions[1]}
                            rotated
                            hideLabel
                            onPress={() => handleCardPress(1)}
                        />
                    </View>

                </View>

                <TarotCard
                    cardId={drawnCards[5]}
                    revealed={revealedCards[5]}
                    label={spread.positions[5]}
                    onPress={() => handleCardPress(5)}
                />

            </View>

            <View style={styles.centered}>
                <TarotCard
                    cardId={drawnCards[2]}
                    revealed={revealedCards[2]}
                    label={spread.positions[2]}
                    onPress={() => handleCardPress(2)}
                />
            </View>

            <View style={styles.row}>
                <TarotCard
                    cardId={drawnCards[6]}
                    revealed={revealedCards[6]}
                    label={spread.positions[6]}
                    onPress={() => handleCardPress(6)}
                />

                <TarotCard
                    cardId={drawnCards[7]}
                    revealed={revealedCards[7]}
                    label={spread.positions[7]}
                    onPress={() => handleCardPress(7)}
                />
            </View>

            <View style={styles.row}>
                <TarotCard
                    cardId={drawnCards[8]}
                    revealed={revealedCards[8]}
                    label={spread.positions[8]}
                    onPress={() => handleCardPress(8)}
                />

                <TarotCard
                    cardId={drawnCards[9]}
                    revealed={revealedCards[9]}
                    label={spread.positions[9]}
                    onPress={() => handleCardPress(9)}
                />
            </View>

        </View>
    );

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>
                {spread.title}
            </Text>

            {type === "daily" && renderDaily()}

            {type === "ppf" && renderPPF()}

            {type === "celtic" && renderCeltic()}

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
        fontFamily: "SupermercadoOne_400Regular"
    },

    centered: {
        alignItems: "center",
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },

    column: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40
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
    },

});