import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AddContactScreen = ({ navigation, setContacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Friend');

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Validation', 'Please enter a contact name.');
      return;
    }
    if (!phone.trim()) {
      Alert.alert('Validation', 'Please enter a phone number.');
      return;
    }

    const newContact = {
      id: Math.random().toString(),
      name: name.trim(),
      phone: phone.trim(),
      category,
    };

    setContacts((prev) => [...prev, newContact]);
    Alert.alert('Contact Added', `${name} has been saved to your contacts.`);
    navigation.goBack();
  };

  const categories = ['Family', 'Work', 'Friend'];

  const getCategoryColor = (c) => {
    if (c === 'Family') return '#e53935';
    if (c === 'Work') return '#1976d2';
    return '#43a047';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="e.g. John Smith"
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="e.g. 087 123 4567"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.categoryRow}>
        {categories.map((c) => (
          <TouchableOpacity
            key={c}
            style={[
              styles.categoryBtn,
              category === c && { backgroundColor: getCategoryColor(c) },
            ]}
            onPress={() => setCategory(c)}>
            <Text style={[styles.categoryBtnText, category === c && { color: '#fff' }]}>
              {c}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Save Contact</Text>
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
  categoryRow: { flexDirection: 'row', gap: 10, marginTop: 4 },
  categoryBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  categoryBtnText: { fontWeight: 'bold', fontSize: 14, color: '#555' },
  saveBtn: {
    backgroundColor: '#1976d2',
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  saveBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 17 },
});

export default AddContactScreen;