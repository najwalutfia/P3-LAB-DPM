import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';

const CuteButton = () => {
  const handlePress = () => {
    Alert.alert('Comel', 'Terima kasih sudah melihat ku! ❤️', [{ text: 'OK', style: 'default' }]);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image
        source={require('../assets/makeup/icon.jpg')}
        style={styles.icon}
      />
      <Text style={styles.text}>Klik Aku!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffccd5',
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    color: '#ff6f91',
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily: 'Cochin',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default CuteButton;
