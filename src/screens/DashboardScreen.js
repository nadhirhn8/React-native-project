import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [teacherFilter, setTeacherFilter] = useState('all');
  const [notificationsCount, setNotificationsCount] = useState(3);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const reclamations = [
    { id: '1', titre: 'Problème d’Internet', type: 'Internet', statut: 'En attente', date: '2024-11-10', enseignant: 'Mr. Raed', description: 'Problème avec la connexion internet dans la salle de classe.' },
    { id: '2', titre: 'Problème de projecteur', type: 'Infrastructure', statut: 'En cours', date: '2024-11-09', enseignant: 'Ms. Faten', description: 'Le projecteur ne fonctionne pas correctement.' },
    { id: '3', titre: 'Absence de chauffage', type: 'Infrastructure', statut: 'Résolu', date: '2024-11-08', enseignant: 'Mr. Mongi', description: 'Le chauffage de la salle 105 est défectueux.' },
    { id: '4', titre: 'Problème d’électricité', type: 'Infrastructure', statut: 'En attente', date: '2024-11-07', enseignant: 'Mr. Aziz', description: 'Panne électrique dans le bâtiment C.' },
  ];

  const getStatusStyle = (statut) => {
    switch (statut) {
      case 'En attente':
        return { color: '#FF0000', icon: 'clock-o' };
      case 'En cours':
        return { color: '#D3D3D3', icon: 'spinner' };
      case 'Résolu':
        return { color: '#32CD32', icon: 'check-circle' };
      default:
        return { color: '#FF0000', icon: 'question-circle' };
    }
  };

  const renderReclamation = ({ item }) => {
    const { color, icon } = getStatusStyle(item.statut);
    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{item.titre}</Text>
        <Text style={styles.cell}>{item.type}</Text>
        <View style={[styles.cell, styles.statusCell]}>
          <FontAwesome name={icon} size={16} color={color} />
          <Text style={[styles.statusText, { color }]}>{item.statut}</Text>
        </View>
        <Text style={styles.cell}>{item.enseignant}</Text>
        <Text style={styles.cell}>{formatDate(item.date)}</Text>

        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => navigation.navigate('Réclamation', { item })}
        >
          <FontAwesome name="info-circle" size={16} color="#fff" />
          <Text style={styles.detailButtonText}> Détails</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const filteredReclamations = reclamations.filter(item => {
    const statusMatch = statusFilter === 'all' || item.statut === statusFilter;
    const typeMatch = typeFilter === 'all' || item.type === typeFilter;
    const teacherMatch = teacherFilter === 'all' || item.enseignant === teacherFilter;
    return statusMatch && typeMatch && teacherMatch;
  });

  return (
    <View style={styles.container}>
      <View style={styles.notificationIcon}>
        <FontAwesome name="bell" size={24} color="#333" onPress={() => navigation.navigate('Notification')} />
        {notificationsCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>{notificationsCount}</Text>
          </View>
        )}
      </View>

      <Text style={styles.header}>Suivi des Réclamations</Text>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Statut :</Text>
        {['all', 'En attente', 'En cours', 'Résolu'].map(status => (
          <TouchableOpacity
            key={status}
            onPress={() => setStatusFilter(status)}
            style={[styles.filterButton, statusFilter === status && styles.activeFilter]}
          >
            <Text style={styles.filterText}>{status === 'all' ? 'Tous' : status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Titre</Text>
        <Text style={styles.headerCell}>Type</Text>
        <Text style={styles.headerCell}>Statut</Text>
        <Text style={styles.headerCell}>Enseignant</Text>
        <Text style={styles.headerCell}>Date</Text>
        <Text style={styles.headerCell}>Action</Text>
      </View>

      <FlatList
        data={filteredReclamations}
        keyExtractor={(item) => item.id}
        renderItem={renderReclamation}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('RéclamationForm')}
      >
        <FontAwesome style={styles.plus} name="plus" size={12} color="black" />
        <Text style={styles.addButtonText}> Soumettre une réclamation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  filterLabel: {
    fontSize: 16,
    color: '#666',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    margin: 5,
  },
  activeFilter: {
    backgroundColor: '#007BFF',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerCell: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  statusCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    marginLeft: 5,
  },
  detailButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  detailButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  plus:{
    marginTop : 3.5
  },
  notificationIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF0000',
    borderRadius: 12,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
