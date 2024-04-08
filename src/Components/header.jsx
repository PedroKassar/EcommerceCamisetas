import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.searcher}/>
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
        backgroundColor: colors.colorD,
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    searcher:{
        backgroundColor: "white",
        minWidth: 200,
        padding: 4,
        paddingVertical: 5,
        borderRadius: 5,
    }
})