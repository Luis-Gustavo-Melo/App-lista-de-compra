//App.js
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './components/MainScreen';
import ListScreen from './components/ListScreen';
import DeletedItemsScreen from './components/DeletedItemsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [suggestedItems, setSuggestedItems] = useState([
    { key: '1', name: 'Arroz' },
    { key: '2', name: 'Feijão' },
    { key: '3', name: 'Leite' },
    { key: '4', name: 'Pão' },
    { key: '5', name: 'Manteiga' },
  ]);
  const [deletedItems, setDeletedItems] = useState([]);

  const addItem = (item) => {
    setShoppingList([...shoppingList, item]);
  };

  const deleteItem = (id) => {
    const deletedItem = shoppingList.find((item) => item.key === id);
    setDeletedItems([...deletedItems, deletedItem]);
    const updatedList = shoppingList.filter((item) => item.key !== id);
    setShoppingList(updatedList);
  };

  const addSuggestedItem = (item) => {
    setSuggestedItems([...suggestedItems, item]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal">
          {() => (
            <MainScreen
              addItem={addItem}
              deleteItem={deleteItem}
              shoppingList={shoppingList}
              suggestedItems={suggestedItems}
              addSuggestedItem={addSuggestedItem}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Lista">
          {() => (
            <ListScreen
              shoppingList={shoppingList}
              deleteItem={deleteItem}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Excluídos">
          {() => (
            <DeletedItemsScreen
              deletedItems={deletedItems}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

