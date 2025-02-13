import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../globals/colors'; // Asegúrate de importar tus colores

const CardSubcategory = ({subcategory}) => {
  
    const navigation = useNavigation();
  
    return (
      <Pressable 
        onPress={() => navigation.navigate("ItemsBySubcategory", {
          subcategorySlug: subcategory.slug,
          subcategoryName: subcategory.name
        })}
      >
        <View style={styles.card}>
          <Text style={styles.name}>{subcategory.name}</Text>
        </View>
      </Pressable>
    )
  }
  

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    marginVertical: 8,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    color: colors.letterColor,
    textAlign: 'center'
  }
});

export default CardSubcategory;