import {
    useFonts,
    SupermercadoOne_400Regular
} from '@expo-google-fonts/supermercado-one';

import { Stack } from "expo-router";

import { Asset } from "expo-asset";

import { imagensCartas } from "@/src/utils/images";

import { useEffect } from "react";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        SupermercadoOne_400Regular,
    });

    useEffect(() => {

        async function preloadImages() {

            const images =
                Object.values(imagensCartas);

            const cacheImages =
                images.map((image) =>
                    Asset.fromModule(image).downloadAsync()
                );

            await Promise.all(cacheImages);
        }

        preloadImages();

    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerTitle: "Arcana",
                headerStyle: {
                    backgroundColor: "#280137"
                },
                headerTintColor: "#f5deff",
                headerTitleStyle: {
                    fontFamily: "SupermercadoOne_400Regular"
                },
                headerTitleAlign: "center",
            }}
        />
    );
}