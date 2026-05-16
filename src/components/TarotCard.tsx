import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import { imagensCartas } from "@/src/utils/images";

interface TarotCardProps {
    cardId?: number;
    revealed: boolean;
    label: string;
    onPress: () => void;
    rotated?: boolean;
    hideLabel?: boolean;
}

export default function TarotCard({
                                      cardId,
                                      revealed,
                                      label,
                                      onPress,
                                      rotated = false,
                                      hideLabel = false
                                  }: TarotCardProps) {

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onPress}>

                <Image
                    source={
                        revealed && cardId !== undefined
                            ? imagensCartas[cardId]
                            : require("@/assets/cards/backside.jpg")
                    }
                    style={[
                        styles.image,
                        rotated && styles.rotated
                    ]}
                />

            </TouchableOpacity>

            {!hideLabel && (
                <Text style={styles.label}>
                    {label}
                </Text>
            )}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        margin: 10
    },

    image: {
        width: 85,
        height: 135,
        borderRadius: 8,
        borderColor: "#280137",
        borderWidth: 3
    },

    rotated: {
        transform: [{ rotate: "90deg" }]
    },

    label: {
        marginTop: 8,
        fontSize: 18,
        color: "#280137",
        textAlign: "center",
        fontFamily: "SupermercadoOne_400Regular"
    }

});