import {Text, View, SafeAreaView, useColorScheme, ScrollView} from "react-native";
import React from 'react';
import FlatCard from "./components/FlatCard.tsx";
import {Colors} from "react-native/Libraries/NewAppScreen";
import ElevatedCards from "./components/ElevatedCard.tsx";
import FancyCard from "./components/FancyCard.tsx";
import ActionCard from "./components/ActionCard.tsx";
import ContactList from "./components/ContactList.tsx";
function AppPro(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={[backgroundStyle]}>
            <ScrollView>
                <FlatCard/>
                <ElevatedCards/>
                <FancyCard/>
                <ActionCard/>
                <ContactList/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AppPro;
