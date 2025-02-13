import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header'
import ItemsBySubcategory from '../screens/ItemsBySubcategory'
import SubcategoriesByCategory from '../screens/SubcategoriesByCategory'


const ShopStack = () => {

     const Stack = createNativeStackNavigator()

  return (
        <Stack.Navigator
        screenOptions={({route})=> ({
                header: () => {
                return <Header title={
                    route.name === "Home" ? "Categorias" :
                    route.name === "SubcategoriesByCategory" ? route.params?.category?.name :
                    route.name === "ItemsBySubcategory" ? route.params?.subcategoryName :
                    route.name === "ItemDetail" ? route.params?.product?.marca :
                    "Shop"
                } />
                }
            })}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SubcategoriesByCategory' component={SubcategoriesByCategory}/>
            <Stack.Screen name='ItemsBySubcategory' component={ItemsBySubcategory}/>
            <Stack.Screen name='ItemDetail' component={ItemDetail}/>
        </Stack.Navigator>
  )
}

export default ShopStack
