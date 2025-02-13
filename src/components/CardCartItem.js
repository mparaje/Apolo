import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../globals/colors'

const CardCartItem = ({ item, onDelete }) => {
  console.log("Rendering item:", item)
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: item.url_img }}
        resizeMode='contain'
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
        <Text style={styles.subtotal}>Subtotal: $ {item.price * item.quantity}</Text>
      </View>
      <Pressable 
        style={styles.deleteButton}
        onPress={onDelete}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.background,
    alignItems: 'center',
    gap: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  infoContainer: {
    flex: 1,
    gap: 4
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text
  },
  price: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold'
  },
  quantity: {
    fontSize: 14,
    color: colors.textLight
  },
  subtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary
  },
  deleteButton: {
    backgroundColor: colors.error,
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default CardCartItem