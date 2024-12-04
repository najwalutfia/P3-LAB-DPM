import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import CuteButton from '../components/CuteButton'; 

const makeupProducts = [
  { id: '1', name: 'Lipstick💕', image: require('../assets/makeup/lipstik.jpeg') },
  { id: '2', name: 'Foundation💕', image: require('../assets/makeup/foundation.jpeg') },
  { id: '3', name: 'Mascara💕', image: require('../assets/makeup/mascara.jpeg') },
  { id: '4', name: 'Bedak💕', image: require('../assets/makeup/bedak.jpeg') },
  { id: '5', name: 'Pensil Alis💕', image: require('../assets/makeup/pensil alis.jpeg') },
];

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(makeupProducts);
    }, 1000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/makeup/bg.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Header title="Makeup Comel" />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
        <CuteButton /> 
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
