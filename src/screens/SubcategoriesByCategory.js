import { FlatList, StyleSheet, View,Text} from 'react-native'
import CardSubcategory from '../components/CardSubcategory'
//import LoadingSpinner from '../components/LoadingSpinner'



const SubcategoriesByCategory = ({route}) => {
  const {category} = route.params || {};

  if (!category) return <Text>Error: Categoría no encontrada</Text>;

  const subcategoriesList = category.subcategories || [];
  
  return (
    <View style={styles.container}>
      <FlatList
        data={subcategoriesList}
        keyExtractor={item => item.slug}
        renderItem={({ item }) => (
          <CardSubcategory subcategory={item} />
        )}
      />
    </View>
  );
};

export default SubcategoriesByCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
});