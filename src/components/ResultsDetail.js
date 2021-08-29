import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.strDrinkThumb }} />
      <Text style={styles.name}>{result.strDrink}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    borderRadius: 14,
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    borderWidth: 4,
    marginVertical: 5,
    marginHorizontal: 17,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ResultsDetail;
