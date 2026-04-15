import { Tabs } from "expo-router";

export default function Layout() {
  return (
      <Tabs screenOptions={{headerTitle: "Arcana"}}>
        <Tabs.Screen name="cartas" options={{ title: "Cartas" }} />
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="tiragens" options={{ title: "Tiragens" }} />
      </Tabs>
  );
}