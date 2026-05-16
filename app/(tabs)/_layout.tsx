import {Tabs} from "expo-router";
import {Image} from "react-native"
import {
    useFonts,
    SupermercadoOne_400Regular
} from '@expo-google-fonts/supermercado-one';

export default function Layout() {
    const [fontsLoaded] = useFonts({
        SupermercadoOne_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Tabs
            screenOptions={{
                // headerTitle: "Arcana",
                // headerStyle: { backgroundColor: "#280137" },
                // headerTintColor: "#f5deff",
                // headerTitleStyle: { fontWeight: 'bold', fontFamily: "SupermercadoOne_400Regular"},
                // headerTitleAlign: "center",
                headerShown: false,
                tabBarStyle: { backgroundColor: '#280137' },
                tabBarActiveBackgroundColor: "#4a0c63",
                tabBarLabelStyle: {color: "#f5deff", fontFamily: "SupermercadoOne_400Regular"}

            }}
        >
            <Tabs.Screen name="cards" options={{
                title: "Cartas",
                tabBarIcon: ({size, focused}) => (
                    <Image source={focused ? require("@/assets/icons/cards.png") : require("@/assets/icons/cards.png")}
                           style={{width: size, height: size}}/>
                )
            }}/>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({size, focused}) => (
                    <Image
                        source={focused ? require("@/assets/icons/crystal-ball.png") : require("@/assets/icons/crystal-ball.png")}
                        style={{width: size, height: size}}/>
                )
            }}/>
            <Tabs.Screen name="reading" options={{
                title: "Tiragens",
                tabBarIcon: ({size, focused}) => (
                    <Image
                        source={focused ? require("@/assets/icons/reading.png") : require("@/assets/icons/reading.png")}
                        style={{width: size, height: size}}/>
                )
            }}/>
        </Tabs>
    );
}