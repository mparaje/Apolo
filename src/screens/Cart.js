import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { colors } from '../globals/colors'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../features/cartSlice'
import CardCartItem from '../components/CardCartItem'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  console.log("Cart Items:", cartItems)
  console.log("Cart Items length:", cartItems.length)
  
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  // Si no hay items, mostramos mensaje de carrito vacío
  if (!cartItems || cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay productos en el carrito</Text>
      </View>
    )
  }

  const handleDeleteItem = (cartItemId) => {
    dispatch(removeItem(cartItemId))
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.cartItemId}
        renderItem={({item}) => (
          <CardCartItem 
            item={item} 
            onDelete={() => handleDeleteItem(item.cartItemId)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <Text style={styles.totalText}>Total: $ {total.toFixed(2)}</Text>
        <Pressable 
          style={styles.confirmButton}
          onPress={() => dispatch(clearCart())}
        >
          <Text style={styles.confirmButtonText}>Finalizar compra</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 120 // Espacio para el footer
  },
  listContainer: {
    padding: 10
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  emptyText: {
    fontSize: 18,
    color: colors.textLight
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.background,
    elevation: 5
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15
  },
  confirmButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600'
  }
})

export default Cart