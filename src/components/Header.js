import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/makeup/icon.jpg')}
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
      <Image
        source={require('../assets/makeup/icon.jpg')} 
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffccd5',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: '#ff6f91',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
