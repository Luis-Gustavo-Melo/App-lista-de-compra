//ListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export default function ListScreen({ shoppingList, deleteItem }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens da Lista:</Text>
      <FlatList
        style={styles.list}
        data={shoppingList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteItem(item.key)}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <AntDesign name="delete" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}



