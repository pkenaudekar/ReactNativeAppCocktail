import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';
import { LogBox } from 'react-native';
const ResultsList = ({ title, results, navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={results.drinks}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => {
          //console.log({ item });
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow', { item })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
