import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ProductItem from '../Components/productItem'
import products from '../data/products.json'
import Header from '../Components/header'
import { colors } from '../constants/colors'

const Home = () => {
    return (
        <View style={styles.maxContainer}>
                <Header title="home"/>
            <View style={styles.listContainer}>
                <FlatList style={styles.productsList} showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({item})=> <ProductItem product={item}/>}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    maxContainer:{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color3,
        paddingVertical: 50,
    },
    listContainer:{
        backgroundColor: colors.color2,
        alignItems: "center",
        height: "100%",
    },
})