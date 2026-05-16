import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import TarotCard from "@/src/components/TarotCard";

const spreads = {

    daily: {
        title: "Carta do Dia",
        positions: ["Sua Carta"]
    },

    ppf: {
        title: "Passado • Presente • Futuro",
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

export default function ReadingScreen() {

    const { type } = useLocalSearchParams();

    const spread =
        spreads[type as keyof typeof spreads];

    if (!spread) {
        return (
            <View style={styles.container}>
                <Text>Tipo inválido.</Text>
            </View>
        );
    }

    const renderDaily = () => (
        <View style={styles.centered}>
            <TarotCard
                revealed={false}
                label={spread.positions[0]}
                onPress={() => {}}
            />
        </View>
    );

    const renderPPF = () => (
        <View style={styles.row}>
            {spread.positions.map((position, index) => (
                <TarotCard
                    key={index}
                    revealed={false}
                    label={position}
                    onPress={() => {}}
                />
            ))}
        </View>
    );

    const renderCeltic = () => (
        <View style={styles.celticContainer}>

            <View style={styles.row}>
                <TarotCard
                    revealed={false}
                    label={spread.positions[4]}
                    onPress={() => {}}
                />
            </View>

            <View style={styles.crossRow}>

                <TarotCard
                    revealed={false}
                    label={spread.positions[3]}
                    onPress={() => {}}
                />

                <View style={styles.crossCenter}>

                    <TarotCard
                        revealed={false}
                        label={spread.positions[0]}
                        onPress={() => {}}
                    />

                    <View style={styles.crossingCard}>
                        <TarotCard
                            revealed={false}
                            label={spread.positions[1]}
                            rotated
                            hideLabel
                            onPress={() => {}}
                        />
                    </View>

                </View>

                <TarotCard
                    revealed={false}
                    label={spread.positions[5]}
                    onPress={() => {}}
                />

            </View>

            <View style={styles.centered}>
                <TarotCard
                    revealed={false}
                    label={spread.positions[2]}
                    onPress={() => {}}
                />
            </View>

            <View style={styles.row}>
                <TarotCard
                    revealed={false}
                    label={spread.positions[6]}
                    onPress={() => {}}
                />

                <TarotCard
                    revealed={false}
                    label={spread.positions[7]}
                    onPress={() => {}}
                />
            </View>

            <View style={styles.row}>
                <TarotCard
                    revealed={false}
                    label={spread.positions[8]}
                    onPress={() => {}}
                />

                <TarotCard
                    revealed={false}
                    label={spread.positions[9]}
                    onPress={() => {}}
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
        fontSize: 34,
        textAlign: "center",
        marginVertical: 20,
        color: "#280137",
        fontFamily: "SupermercadoOne_400Regular"
    },

    centered: {
        alignItems: "center"
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
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
        width: 140,
        height: 220,
        justifyContent: "center",
        alignItems: "center"
    },

    crossingCard: {
        position: "absolute",
        bottom: 20,
        pointerEvents: "box-none"
    },

});