import {
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function SplashScreen() {

    return (
        <View style={styles.container}>

            <Image
                source={
                    require("@/assets/icons/crystal-ball.png")
                }
                style={styles.logo}
            />

            <Text style={styles.title}>
                Arcana
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#280137",
        justifyContent: "center",
        alignItems: "center"
    },

    logo: {
        width: 140,
        height: 140,
        marginBottom: 20
    },

    title: {
        fontSize: 42,
        color: "#f5deff",
        fontFamily: "SupermercadoOne_400Regular"
    }

});