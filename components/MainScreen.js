//MainScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export default function MainScreen({ addItem, deleteItem, shoppingList }) {
  const [item, setItem] = useState('');

  const handleItem = (text) => {
    setItem(text);
  };

  const handleAddItem = () => {
    const newItem = { key: Math.random().toString(), name: item };
    addItem(newItem);
    setItem('');
  };

  const handleAddSuggestedItem = (suggestedItem) => {
    addItem(suggestedItem);
  };

  const suggestedItems = [
    { key: '1', name: 'Arroz' },
    { key: '2', name: 'Feijão' },
    { key: '3', name: 'Leite' },
    { key: '4', name: 'Pão' },
    { key: '5', name: 'Manteiga' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Lista de Compras</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar item"
          onChangeText={handleItem}
          value={item}
        />
        <Button title="Adicionar" onPress={handleAddItem} />
      </View>
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
      <Text style={styles.subtitle}>Itens Sugeridos:</Text>
      <FlatList
        style={styles.list}
        data={suggestedItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAddSuggestedItem(item)}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <AntDesign name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
