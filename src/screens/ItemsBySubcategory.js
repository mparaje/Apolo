import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from "react";
import { useGetProductsBySubcategoryQuery } from "../services/shop";
import CardItem from "../components/CardItem";

const ItemsBySubcategory = ({route}) => {
    const { subcategorySlug} = route.params;
    
    const {
      data: productsData, 
      isLoading, 
      isError, 
      error 
    } = useGetProductsBySubcategoryQuery(subcategorySlug);

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>Cargando productos...</Text>
        </View>
      );
    }

    if (isError) {
      return (
        <View style={styles.container}>
          <Text>Error: {error?.message || 'Algo salió mal'}</Text>
        </View>
      );
    }
  
    // Convertimos el objeto de Firebase en array si es necesario
    const products = productsData ? Object.values(productsData) : [];
  
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CardItem product={item} />}
          ListEmptyComponent={() => (
            <View>
              <Text style={styles.emptyText}>No hay productos disponibles</Text>
            </View>
          )}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: '#666'
    }
});

export default ItemsBySubcategory;