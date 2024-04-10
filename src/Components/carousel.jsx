import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useRef, useEffect} from 'react'
import Carousel from 'react-native-snap-carousel'
import products from '../data/products.json'
import { colors } from '../constants/colors'

const { width: screenWidth } = Dimensions.get('window');

const CarouselComponent = () => {

    const CarouselItem = ({product}) => {
        return (
            <View style={styles.carousel}>
                <Image source={{uri: product.imageUrl}} style={styles.image}/>
            </View>
        )
    }

    return (
        <Carousel
            layout={'default'}
            data={products}
            windowSize={1}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            renderItem={({item})=> <CarouselItem product={item}/>}
            loop
        />
    )
}

export default CarouselComponent

const styles = StyleSheet.create({
    carousel:{
        width: screenWidth,
        alignItems: "center",
        marginBottom: 20
    },

    image:{
        borderRadius: 5,
        height: 300,
        width: "100%",
        alignItems: "center"
    }
})