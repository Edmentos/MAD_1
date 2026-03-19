import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddContactScreen from './screens/AddContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Sarah Murphy', phone: '087 123 4567', category: 'Family' },
    { id: '2', name: 'Dr. Downey', phone: '091 555 0100', category: 'Work' },
    { id: '3', name: 'Jake O Brien', phone: '085 222 3344', category: 'Friend' },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'QuickDial' }}>
          {(props) => <HomeScreen {...props} contacts={contacts} setContacts={setContacts} />}
        </Stack.Screen>
        <Stack.Screen name="AddContact" options={{ title: 'Add Contact' }}>
          {(props) => <AddContactScreen {...props} setContacts={setContacts} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}