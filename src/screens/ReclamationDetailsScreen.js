import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ReclamationDetailsScreen = ({ route }) => {
  const { item } = route.params;
  const [status, setStatus] = useState(item.statut);
  const [originalStatus] = useState(item.statut);
  const [showStatusOptions, setShowStatusOptions] = useState(false);

  const statuses = ['En attente', 'En cours', 'Résolu'];

  
  const handleSave = () => {
    if (status === originalStatus) {
      Alert.alert("Aucun changement", "Le statut est déjà à jour.");
      return;
    }
    console.log(`Statut mis à jour pour "${item.titre}" : ${status}`);
    Alert.alert("Succès", `Statut mis à jour est terminer : ${status}`);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails de la Réclamation</Text>

      <Text style={styles.label}>Titre :</Text>
      <Text style={styles.value}>{item.titre || 'Non spécifié'}</Text>

      <Text style={styles.label}>Type :</Text>
      <Text style={styles.value}>{item.type || 'Non spécifié'}</Text>

      <Text style={styles.label}>Enseignant :</Text>
      <Text style={styles.value}>{item.enseignant || 'Non spécifié'}</Text>

      <Text style={styles.label}>Département :</Text>
      <Text style={styles.value}>{item.department || 'informatique'}</Text>

      <Text style={styles.label}>Description :</Text>
      <Text style={styles.value}>{item.description || 'Aucune description fournie.'}</Text>

      <Text style={styles.label}>Statut :</Text>
      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => setShowStatusOptions(!showStatusOptions)}
      >
        <Text style={styles.statusText}>{status}</Text>
      </TouchableOpacity>

      {showStatusOptions && (
        <View style={styles.statusOptions}>
          {statuses.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.statusOption,
                status === option && styles.activeOption,
              ]}
              onPress={() => {
                setStatus(option);
                setShowStatusOptions(false);
              }}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          status === originalStatus && styles.disabledButton, 
        ]}
        onPress={handleSave}
        disabled={status === originalStatus}
      >
        <Text style={styles.buttonText}>Enregistrer</Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  statusButton: {
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  statusOptions: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
  },
  statusOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  activeOption: {
    backgroundColor: '#007BFF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 16,
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReclamationDetailsScreen;