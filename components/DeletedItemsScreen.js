//DeletedItemsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export default function DeletedItemsScreen({ deletedItems }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens Excluídos:</Text>
      <FlatList
        style={styles.list}
        data={deletedItems}
        renderItem={({ item }) => (
          <TouchableOpacity>
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

