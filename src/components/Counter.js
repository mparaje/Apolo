import { StyleSheet, Text, View, Pressable} from 'react-native'
import { colors } from '../globals/colors'

const Counter = ({quantity, increment, decrement, maxQuantity}) => {
  const isMaxReached = quantity >= maxQuantity;
  const isMinReached = quantity === 1;

  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, isMinReached && styles.buttonDisabled]} 
        onPress={decrement}
        disabled={isMinReached}
      >
        <Text style={styles.textButton}>-</Text>
      </Pressable>
      <Text style={styles.text}>{quantity}</Text>
      <Pressable 
        style={[styles.button, isMaxReached && styles.buttonDisabled]} 
        onPress={increment}
        disabled={isMaxReached}
      >
        <Text style={styles.textButton}>+</Text>
      </Pressable>
      {isMaxReached && (
        <Text style={styles.maxReachedText}>Stock máximo</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    position: 'relative'
  },
  button: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonDisabled: {
    backgroundColor: colors.disabled,
    opacity: 0.7
  },
  textButton: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: 30,
    textAlign: 'center'
  },
  maxReachedText: {
    color: colors.error,
    fontSize: 12,
    position: 'absolute',
    bottom: -20,
    right: 0
  }
})

export default Counter