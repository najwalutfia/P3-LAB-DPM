import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ProductCard = ({ product }) => {
  const handlePress = () => {
    Alert.alert('Detail Produk', `Kamu memilih: ${product.name}`, 
        [{ text: 'OK' }]);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff8f1',
    padding: 15,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    borderColor: '#ffc1e3',
    borderWidth: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: '#ff85a1',
    fontFamily: 'Cochin',
    fontWeight: '600',
  },
});

export default ProductCard;
