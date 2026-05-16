import AsyncStorage from
        "@react-native-async-storage/async-storage";

export interface SavedReading {
    id: string;
    type: string;
    cards: number[];
    createdAt: string;
}

const STORAGE_KEY = "@arcana_readings";

export async function saveReading(
    reading: SavedReading
) {

    try {

        const existing =
            await getReadings();

        const updated = [
            reading,
            ...existing
        ];

        await AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updated)
        );

    } catch (error) {
        console.log(
            "Erro ao salvar tiragem:",
            error
        );
    }
}

export async function getReadings():
    Promise<SavedReading[]> {

    try {

        const data =
            await AsyncStorage.getItem(
                STORAGE_KEY
            );

        if (!data) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {

        console.log(
            "Erro ao carregar tiragens:",
            error
        );

        return [];
    }
}