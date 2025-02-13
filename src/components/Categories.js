import { StyleSheet,FlatList,View,Text} from 'react-native'
import CardItemCategory from './CardItemCategory'
import { useGetCategoriesQuery } from '../services/shop'

const Categories = () => {

  const {data:categoriesData,isError,error,isSuccess,isLoading} = useGetCategoriesQuery();

  const categoriesList = categoriesData
  ? Object.keys(categoriesData).map(id => ({ id, ...categoriesData[id] }))
  : [];

  if(isLoading) return <View><Text>cargando</Text></View>
  if(isError) return <View><Text>{error.message}</Text></View>
  
  return (
    <FlatList
    data={categoriesList}
    keyExtractor={item => item.id}
    renderItem={({item})=> <CardItemCategory item={item}/>}
    contentContainerStyle={styles.containerCard}
  />
  )
}

export default Categories

const styles = StyleSheet.create({
  containerCard:{
    paddingBottom:60
  }
})