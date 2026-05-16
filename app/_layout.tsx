import {
    useFonts,
    SupermercadoOne_400Regular
} from '@expo-google-fonts/supermercado-one';
import {Stack} from "expo-router";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        SupermercadoOne_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerTitle: "Arcana",
                headerStyle: {backgroundColor: "#280137"},
                headerTintColor: "#f5deff",
                headerTitleStyle: {fontFamily: "SupermercadoOne_400Regular"},
                headerTitleAlign: "center",
            }}
        >
        </Stack>
    )
}