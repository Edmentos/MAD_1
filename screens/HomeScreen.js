import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ navigation, tasks, setTasks }) => {

  const deleteTask = (id) => {
    Alert.alert('Complete Task', 'Mark this task as complete?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Complete',
        onPress: () => setTasks((prev) => prev.filter((t) => t.id !== id)),
      },
    ]);
  };

  const getPriorityColor = (priority) => {
    if (priority === 'High') return '#e53935';
    if (priority === 'Medium') return '#fb8c00';
    return '#43a047';
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskInfo}>
        <Text style={[styles.taskTitle, { color: getPriorityColor(item.priority) }]}>
          {item.title}
        </Text>
        <Text style={styles.taskDesc}>{item.description}</Text>
        <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(item.priority) }]}>
          <Text style={styles.priorityText}>{item.priority}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.completeBtn} onPress={() => deleteTask(item.id)}>
        <Text style={styles.completeBtnText}>✓</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks on the board.</Text>}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Total Tasks: {tasks.length}</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('AddTask')}>
          <Text style={styles.addBtnText}>+ New Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  listContent: { padding: 16 },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  taskInfo: { flex: 1 },
  taskTitle: { fontSize: 17, fontWeight: 'bold', marginBottom: 4 },
  taskDesc: { fontSize: 13, color: '#666', marginBottom: 8 },
  priorityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  priorityText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  completeBtn: {
    backgroundColor: '#e8f5e9',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  completeBtnText: { color: '#43a047', fontSize: 20, fontWeight: 'bold' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: { fontSize: 16, fontWeight: '600', color: '#333' },
  addBtn: { backgroundColor: '#1976d2', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 40, fontSize: 16 },
});

export default HomeScreen;