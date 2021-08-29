import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import cocktail from '../apis/cocktailServer';

const ResultsShowScreen = ({ navigation }) => {
  const item = navigation.getParam('item');
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.strDrink}</Text>
      <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
      <Text style={styles.title}>Instructions</Text>
      <Text style={styles.discription}>{item.strInstructions}</Text>
      <Text style={styles.title}>Glass</Text>
      <Text style={styles.discription}>{item.strGlass}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e59866',
  },
  image: {
    height: 350,
    width: 350,
    borderRadius: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 10,
  },
  discription: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
});

export default ResultsShowScreen;
