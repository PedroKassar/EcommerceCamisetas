import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const ProductItem = ({product}) => {
    return (
        <View style={styles.productCard}>
            <Image source={{uri: product.imageUrl}} style={styles.image}/>
            <Text style={styles.product}>{product.name}</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    productCard:{
        width: "50%",
        padding: 10,
        alignItems: "center",
        // backgroundColor: "red",
    },
    // product:{
    //     backgroundColor: colors.color1,
    //     padding: 20,
    //     margin: 10,
    //     borderRadius: 5,
    //     overflow: "hidden",
    //     textAlign: "center"
    // },
    image:{
        backgroundColor: colors.color1,
        padding: 80,
        margin: 10,
        borderRadius: 5,
        justifyContent: "center"
    }
})