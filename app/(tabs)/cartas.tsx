import { View, Text } from "react-native";
import cartas from "../../src/data/cartas.json";

export default function Cartas() {
    return (
        <View>
            <Text>Cartas</Text>
            {cartas.map((carta) => (
                <Text key={carta.id}>{carta.name}</Text>
            ))}
        </View>
    );
}
