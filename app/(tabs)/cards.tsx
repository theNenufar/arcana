import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView, TouchableOpacity
} from "react-native";

import cards from "../../src/data/cartas.json";
import { imagensCartas } from "@/src/utils/images";
import {router} from "expo-router";

export default function Cards() {

    const renderGroup = (title: string, group: string) => (
        <View>
            <Text style={styles.sectionTitle}>{title}</Text>

            <View style={styles.grid}>
                {cards
                    .filter(card => card.group === group)
                    .map(card => (
                        <View key={card.id} style={styles.card}>
                            <TouchableOpacity onPress={() => router.push({ pathname: "/cardInfo/[cardId]", params: { cardId: card.id } })}>
                                <Image
                                    source={imagensCartas[card.id]}
                                    style={styles.image}
                                />

                                <Text style={styles.name}>
                                    {card.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>

            {renderGroup("Arcanos Maiores", "major")}

            {renderGroup("Espadas", "swords")}

            {renderGroup("Paus", "wands")}

            {renderGroup("Copas", "cups")}

            {renderGroup("Ouros", "pentacles")}

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5deff"
    },

    sectionTitle: {
        fontSize: 24,
        fontFamily: "SupermercadoOne_400Regular",
        textAlign: "center",
        margin: 15,
        color: "#280137"
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },

    card: {
        width: "48%",
        marginBottom: 20,
        alignItems: "center"
    },

    image: {
        width: 130,
        height: 210,
        borderRadius: 8,
        borderColor: "#280137",
        borderWidth: 3
    },

    name: {
        marginTop: 5,
        textAlign: "center",
        fontFamily: "SupermercadoOne_400Regular",
        color: "#280137"
    }
});