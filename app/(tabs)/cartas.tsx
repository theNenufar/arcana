import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import cartas from "../../src/data/cartas.json";
import { imagensCartas } from "../../src/utils/images";

export default function Cartas() {
    return (
        <FlatList
            data={cartas}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={imagensCartas[item.id]} style={styles.image} />
                    <Text style={styles.nome}>{item.name}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        alignItems: "center"
    },

    image: {
        width: 130,
        height: 210,
        borderRadius: 4
    },

    nome: {
        marginTop: 5,
        textAlign: "center"
    }
});