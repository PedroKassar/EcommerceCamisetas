import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({searchText , handleSearch}) => {
    return (
        <View style={styles.header}>
            <TextInput style={styles.searcher}
            placeholder='Buscar producto' 
            value={searchText}
            onChangeText={handleSearch}
            /> 
            <MaterialIcons name="search" size={24} color="black" />
            <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: colors.color1,
        padding: 25,
        // position: "absolute",
        // zIndex: 1,
    },
    searcher:{
        backgroundColor: colors.color0,
        height: 35,
        width: "60%",
        padding: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
})