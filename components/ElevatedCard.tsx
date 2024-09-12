import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import {styles} from "../stylesComponent/style_sheet.ts";

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={{padding:8}}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>😀</Text>
                </View>
            </ScrollView>
        </View>
    )
}

