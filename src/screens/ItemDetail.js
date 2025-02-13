import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'
import Counter from '../components/Counter'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice'
import Rating from '../components/Rating'

const ItemDetail = ({route}) => {
  const [quantity, setQuantity] = useState(1)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { product } = route.params

  const increment = () => {
    if(quantity >= product.stock) return
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if(quantity === 1) return
    setQuantity(quantity - 1)
  }

  const handleAddProduct = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: quantity,
      stock: product.stock,
      url_img: product.url_img,
      marca: product.marca
    }

    dispatch(addItem(itemToAdd))
    alert('¡Producto agregado al carrito!')
    setQuantity(1)
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: product.url_img}} 
            style={styles.image} 
            resizeMode='contain'
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.brand}>{product.marca}</Text>
          <View style={styles.ratingContainer}>
            <Rating rating={product.rating || 0} />
            <Text style={styles.ratingText}>({product.rating || 0})</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          
          {product.stock === 0 ? (
            <Text style={styles.outOfStock}>Producto sin stock</Text>
          ) : (
            <>
              <Text style={styles.stockText}>Stock disponible: {product.stock}</Text>
              <Counter 
                quantity={quantity} 
                increment={increment} 
                decrement={decrement}
                maxQuantity={product.stock}
              />
            </>
          )}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Pressable 
          style={[
            styles.button, 
            product.stock === 0 && styles.buttonDisabled
          ]} 
          onPress={handleAddProduct}
          disabled={product.stock === 0}
        >
          <Text style={styles.textButton}>Agregar al carrito</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollContainer: {
    flex: 1
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: colors.white,
    paddingVertical: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  infoContainer: {
    padding: 20,
    gap: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text
  },
  brand: {
    fontSize: 18,
    color: colors.textLight,
    fontStyle: 'italic'
  },
  description: {
    fontSize: 16,
    color: colors.text,
    marginVertical: 10,
    lineHeight: 22
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary
  },
  stockText: {
    fontSize: 14,
    color: colors.textLight
  },
  outOfStock: {
    fontSize: 18,
    color: colors.error,
    textAlign: 'center',
    marginVertical: 10
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.background
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonDisabled: {
    backgroundColor: colors.disabled,
    opacity: 0.7
  },
  textButton: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '600'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 5
  },
  ratingText: {
    fontSize: 16,
    color: colors.textLight
  }
})

export default ItemDetail