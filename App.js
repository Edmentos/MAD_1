import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Fix login bug', description: 'Users cannot log in on iOS', priority: 'High' },
    { id: '2', title: 'Update README', description: 'Add setup instructions', priority: 'Low' },
    { id: '3', title: 'Design review', description: 'Review new dashboard mockups', priority: 'Medium' },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'DevTrack' }}>
          {(props) => <HomeScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        <Stack.Screen name="AddTask" options={{ title: 'Add Task' }}>
          {(props) => <AddTaskScreen {...props} setTasks={setTasks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}