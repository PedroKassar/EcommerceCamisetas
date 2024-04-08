import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ProductItem from '../Components/productItem'
import products from '../data/products.json'
import Header from '../Components/header'
import { colors } from '../constants/colors'

const Home = () => {
    return (
        <View>
                <Header title="home"/>
            <View style={styles.listContainer}>
                <FlatList style={styles.productsList} showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({item})=> <ProductItem product={item}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                horizontal={false}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor: colors.color2,
        height: "90%",
    },
})