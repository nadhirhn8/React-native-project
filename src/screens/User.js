import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'nadhir',
    email: 'nadhir@ecole.com',
    department: 'Informatique',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profil mis à jour :', userInfo);
    Alert.alert('Succès', 'Votre profil a été mis à jour avec succès.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mon Profil</Text>
      <Text style={styles.label}>Nom complet :</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={userInfo.name}
          onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
        />
      ) : (
        <Text style={styles.value}>{userInfo.name}</Text>
      )}

      <Text style={styles.label}>Email académique :</Text>
      <Text style={[styles.value, styles.disabledField]}>{userInfo.email}</Text>

      <Text style={styles.label}>Département :</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={userInfo.department}
          onChangeText={(text) => setUserInfo({ ...userInfo, department: text })}
        />
      ) : (
        <Text style={styles.value}>{userInfo.department}</Text>
      )}

      <TouchableOpacity
        style={[styles.button, isEditing && styles.saveButton]}
        onPress={isEditing ? handleSave : () => setIsEditing(true)}
      >
        <Text style={styles.buttonText}>
          {isEditing ? 'Enregistrer' : 'Modifier le profil'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
    color: '#333',
  },
  disabledField: {
    color: '#aaa',
  },
  button: {
    marginTop: 24,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;