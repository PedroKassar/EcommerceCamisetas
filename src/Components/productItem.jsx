import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const ProductItem = ({product}) => {
    return (
        <View>
            <Text style={styles.productCard}>{product}</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    productCard:{
        padding: 20,
        minWidth: 200,
        marginVertical: 10,
        backgroundColor: colors.color1,
        borderRadius: 5,
        overflow: "hidden",
        textAlign: "center",
        
    },
})