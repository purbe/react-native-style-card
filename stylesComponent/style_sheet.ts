import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 5,

    },
    backcolor:{
        backgroundColor: '#74B9FF',
        padding: 20,
        borderColor:"#192A56"
    },
    container:{
        flex: 1,
        flexDirection:"row",
        padding:9,
        flexWrap:'wrap',
        justifyContent: 'flex-start',
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height:100,
        borderRadius: 4,
        margin: 8,

    },
    cardRed:{
        backgroundColor:'#B83227'
    },
    cardYellow:{
        backgroundColor:'#F0DF87'
    },
    cardGreen:{
        backgroundColor:'#6AB04A'
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2

    }




})
