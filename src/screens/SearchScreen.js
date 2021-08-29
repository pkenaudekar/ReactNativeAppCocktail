import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
//import SearchBar from '../components/SearchBar';
//import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultList';
import { fetchDrinks } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Feather } from '@expo/vector-icons';
import cocktail from '../apis/cocktailServer';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { term: null, drinks: null };
  }

  componentDidMount() {
    this.props.fetchDrinks();
  }

  searchValue = async (term) => {
    try {
      const response = await cocktail.get('');
      const newData = response.data.drinks.filter((val) => {
        if (term == '') {
          // If search term is empty
          return val;
        } else if (
          val.strDrink
            .toString()
            .toLowerCase()
            .includes(term.toString().toLowerCase())
        ) {
          return val;
        }
      });
      if (newData.length === 0) {
        this.setState({ drinks: null });
      } else {
        this.setState({ drinks: newData });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e59866' }}>
        <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyle} />
          <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            value={this.state.term}
            onChangeText={(term) => this.setState({ term })}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={() => this.searchValue(this.state.term)}
          />
        </View>
        {this.state.drinks == null && this.props.drinks && this.state.term ? (
          <Text style={styles.title}>No Results available</Text>
        ) : (
          <ScrollView>
            <ResultsList
              results={this.state.drinks ? this.state : this.props.drinks}
              title="Search Results"
            />
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#e0e0e0',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return { drinks: state.drinks };
};

export default connect(mapStateToProps, { fetchDrinks })(SearchScreen);
