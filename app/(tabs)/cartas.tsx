import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";

import cartas from "../../src/data/cartas.json";
import { imagensCartas } from "@/src/utils/images";
import {SupermercadoOne_400Regular, useFonts} from "@expo-google-fonts/supermercado-one";

export default function Cartas() {

    const renderGroup = (title: string, group: string) => (
        <View>
            <Text style={styles.sectionTitle}>{title}</Text>

            <View style={styles.grid}>
                {cartas
                    .filter(carta => carta.group === group)
                    .map(carta => (
                        <View key={carta.id} style={styles.card}>
                            <Image
                                source={imagensCartas[carta.id]}
                                style={styles.image}
                            />

                            <Text style={styles.name}>
                                {carta.name}
                            </Text>
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
        fontWeight: "bold",
        fontFamily: "SupermercadoOne_400Regular",
        textAlign: "center",
        margin: 15,
        color: "#280137"
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
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
        fontWeight: "bold",
        fontFamily: "SupermercadoOne_400Regular",
        color: "#280137"
    }
});