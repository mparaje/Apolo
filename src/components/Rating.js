import { View, StyleSheet } from 'react-native'
import { Star } from 'lucide-react-native'
import { colors } from '../globals/colors'

const Rating = ({ rating }) => {
  const stars = []
  const maxStars = 5

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <Star
        key={i}
        size={20}
        fill={i <= rating ? colors.primary : 'none'}
        color={colors.primary}
      />
    )
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5
  }
})

export default Rating