import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProductItem from '../Components/productItem'
import products from '../data/products.json'
import Header from '../Components/header'
import CarouselComponent from '../Components/carousel'
import { colors } from '../constants/colors'
import Footer from '../Components/footer'

const Home = () => {

    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState(products)

    const handleSearch = (text) => {
        setSearchText(text)
        const filteredProducts = products.filter(data => data.name.toLowerCase().includes(text.toLowerCase()))
        setFilteredData(filteredProducts)
    }

    return (
        <View style={styles.homeContainer}>
            <Header searchText={searchText} handleSearch={handleSearch}/>
                <View style={styles.productsContainer}>
                    <FlatList style={styles.productsList} showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<CarouselComponent/>}
                    data={filteredData}
                    renderItem={({item})=> <ProductItem product={item}/> }
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    horizontal={false}
                    />
                </View>
            <Footer/>
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
    productsContainer:{
        height: "77%"
    },
    productsList:{
        backgroundColor: colors.color2,
        width:"90%",
        padding: 10,
    },
})