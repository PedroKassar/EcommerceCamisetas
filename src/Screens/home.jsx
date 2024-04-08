import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import ProductItem from '../Components/productItem'
import products from '../data/products.json'
import Header from '../Components/header'
import CarouselComponent from '../Components/carousel'
import { colors } from '../constants/colors'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
                <Header title="home"/>
                {/* <ScrollView style={styles.scrollContainer}> */}
                    <CarouselComponent/>
                    <FlatList style={styles.productsList} showsVerticalScrollIndicator={false}
                    data={products}
                    renderItem={({item})=> <ProductItem product={item}/>}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    horizontal={false}
                    />
                {/* </ScrollView> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer:{
        flex: 1,
        gap: 20,
        backgroundColor: colors.color1,
        marginHorizontal: 8,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",

    },
    productsList:{
        backgroundColor: colors.color1,
        padding: 10,
    },
    scrollContainer:{
        paddingTop: 75,
        
    }
})