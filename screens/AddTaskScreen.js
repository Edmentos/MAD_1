import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AddTaskScreen = ({ navigation, setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Please enter a task title.');
      return;
    }

    const newTask = {
      id: Math.random().toString(),
      title: title.trim(),
      description: description.trim(),
      priority,
    };

    setTasks((prev) => [...prev, newTask]);
    Alert.alert('New Task', `"${title}" added to your sprint.`);
    navigation.goBack();
  };

  const priorities = ['High', 'Medium', 'Low'];

  const getPriorityColor = (p) => {
    if (p === 'High') return '#e53935';
    if (p === 'Medium') return '#fb8c00';
    return '#43a047';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="e.g. Fix login bug"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Describe the task..."
        multiline
        numberOfLines={3}
      />

      <Text style={styles.label}>Priority</Text>
      <View style={styles.priorityRow}>
        {priorities.map((p) => (
          <TouchableOpacity
            key={p}
            style={[
              styles.priorityBtn,
              priority === p && { backgroundColor: getPriorityColor(p) },
            ]}
            onPress={() => setPriority(p)}>
            <Text style={[styles.priorityBtnText, priority === p && { color: '#fff' }]}>
              {p}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  label: { fontSize: 15, fontWeight: '600', color: '#333', marginTop: 16, marginBottom: 6 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: { height: 80, textAlignVertical: 'top' },
  priorityRow: { flexDirection: 'row', gap: 10, marginTop: 4 },
  priorityBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  priorityBtnText: { fontWeight: 'bold', fontSize: 14, color: '#555' },
  saveBtn: {
    backgroundColor: '#1976d2',
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  saveBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 17 },
});

export default AddTaskScreen;