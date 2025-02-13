import {StyleSheet,Pressable, Text, View} from 'react-native'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'


const CardItemCategory = ({item}) => {


  const navigation = useNavigation()

  return (
    <Pressable onPress={()=> {
      navigation.navigate("SubcategoriesByCategory",{category: item})

      }}>
      <View style={styles.container} >
          <Text style={styles.text}>{item.name}</Text>
      </View>
    </Pressable>
  )
}

export default CardItemCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.accent,
        marginHorizontal:15,
        marginVertical:10,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7
    },
    text:{
        color:colors.letterColor,
        fontSize:16
    }
})