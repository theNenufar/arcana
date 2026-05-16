import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";
import { useEffect, useRef, useState } from "react";

import { imagensCartas } from "@/src/utils/images";

interface TarotCardProps {
    cardId?: number;
    revealed: boolean;
    label: string;
    onPress: () => void;
    rotated?: boolean;
    hideLabel?: boolean;
    width?: number;
    height?: number;
}

export default function TarotCard({
                                      cardId,
                                      revealed,
                                      label,
                                      onPress,
                                      rotated = false,
                                      hideLabel = false,
                                      width = 90,
                                      height = 161
                                  }: TarotCardProps) {

    const [showFront, setShowFront] = useState(revealed);

    const flipAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        if (revealed) {

            Animated.sequence([

                Animated.timing(flipAnim, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true
                }),

                Animated.timing(flipAnim, {
                    toValue: 2,
                    duration: 150,
                    useNativeDriver: true
                })

            ]).start();

            setTimeout(() => {
                setShowFront(true);
            }, 150);

        }

    }, [revealed]);

    const scale = flipAnim.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [1, 0, 1]
    });

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onPress}>

                <Animated.View
                    style={{
                        transform: [

                            rotated
                                ? { scaleY: scale }
                                : { scaleX: scale },

                            ...(rotated
                                ? [{ rotate: "90deg" }]
                                : [])
                        ]
                    }}
                >

                    <Image
                        source={
                            showFront && cardId !== undefined
                                ? imagensCartas[cardId]
                                : require("@/assets/cards/backside.jpg")
                        }
                        style={[
                            styles.image,
                            {
                                width,
                                height
                            }
                        ]}
                    />

                </Animated.View>

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
        width: 90,
        height: 140,
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