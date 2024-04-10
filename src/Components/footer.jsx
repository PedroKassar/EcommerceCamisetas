import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Ionicons name="home-outline" size={24} color="black" />
            <FontAwesome name="user-o" size={24} color="black" />
            <SimpleLineIcons name="menu" size={24} color="black" />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})