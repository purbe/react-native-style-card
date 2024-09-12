import {Text, View} from "react-native";
import React from 'react';
import {styles} from "../stylesComponent/style_sheet.ts";

export default function FlatCard():React.JSX.Element {
    return (
        <View>
            <View>
                <View>
                    <Text style={[styles.headingText]}>Flat card</Text>
                </View>
                <View style={[styles.container,styles.backcolor]}>
                    <View style={[styles.card, styles.cardRed]}>
                        <Text>red</Text>
                    </View>
                    <View style={[styles.card, styles.cardYellow]}>
                        <Text>yellow</Text>
                    </View>
                    <View style={[styles.card, styles.cardGreen]}>
                        <Text>green</Text>
                    </View>
                    <View style={[styles.card, styles.cardRed]}>
                        <Text>red</Text>
                    </View>
                    <View style={[styles.card, styles.cardGreen]}>
                        <Text>green</Text>
                    </View>
                </View>
            </View>

        </View>

    )
}



