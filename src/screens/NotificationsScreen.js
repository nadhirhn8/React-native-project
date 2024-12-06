import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NotificationScreen = () => {
  const notifications = [
    { id: '1', message: 'Votre réclamation "Problème d’Internet" a été mise à jour.', date: '2024-11-10 10:30' },
    { id: '2', message: 'Votre réclamation "Problème de projecteur" a été résolue.', date: '2024-11-10 15:00' },
    { id: '3', message: 'Votre réclamation "Absence de chauffage" a été mise à jour.', date: '2024-11-09 14:30' },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <FontAwesome name="bell" size={24} color="#007BFF" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationScreen;