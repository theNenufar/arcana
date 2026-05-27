import {
    SupermercadoOne_400Regular,
    useFonts
} from '@expo-google-fonts/supermercado-one';

import { Stack } from "expo-router";

import { Asset } from "expo-asset";

import { imagensCartas } from "@/src/utils/images";

import { useEffect, useState } from "react";

import SplashScreen from "@/src/components/SplashScreen";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        SupermercadoOne_400Regular,
    });

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        async function initializeApp() {

            const images =
                Object.values(imagensCartas);

            const cacheImages =
                images.map((image) =>
                    Asset.fromModule(image)
                        .downloadAsync()
                );

            await Promise.all(cacheImages);

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }

        initializeApp();

    }, []);

    if (!fontsLoaded || loading) {
        return <SplashScreen />;
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