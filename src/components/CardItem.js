import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'

const CardItem = ({product}) => {
    const {name, price, stock, url_img, marca} = product
    const {width} = useWindowDimensions()
    const navigation = useNavigation()

    return (
        <Pressable 
            style={styles.container} 
            onPress={() => navigation.navigate("ItemDetail", {product})}
        >
            <Image 
                style={styles.image} 
                source={{uri: url_img}} 
                resizeMode='cover'
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.brand}>{marca}</Text>
                <View style={styles.containerText}>
                    <Text style={width > 400 ? styles.text : styles.textMin}>
                        Precio: ${price}
                    </Text>
                    <Text style={width > 400 ? styles.text : styles.textMin}>
                        Stock: {stock}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CardItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.cardBg,
        margin: 10,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    image:{
        width: 90,
        height: 90,
        borderRadius: 5
    },
    title:{
        color: colors.letterColor,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5
    },
    brand: {
        color: colors.letterColor,
        fontSize: 14,
        padding: 5,
        fontStyle: 'italic'
    },
    containerText:{
        flexDirection: "row",
        gap: 20,
        padding: 10
    },
    text:{
       color: colors.letterColor,
       fontSize: 16
    },
    textMin:{
      color: colors.letterColor,
      fontSize: 12
    }
})