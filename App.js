import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

export default class App extends Component<Props> {
state = {
  repos: [
    {
      id: 1,
      thumbnail: '',
      title: 'rocketseat.com.br',
      author: 'rocketseat',
    }, 
    {
      id: 2,
      thumbnail: '',
      title: 'rocketnative',
      author: 'diego3g',
    }
  ]
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.headerText}>Welcome to React Native!</Text>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          <View style={styles.repo}> 
            <Text style={styles.headerText}>Welcome to React Native!</Text>
          </View>

          <View style={styles.repo}> 
            <Text style={styles.headerText}>Welcome to React Native!</Text>
          </View>

          <View style={styles.repo}> 
            <Text style={styles.headerText}>Welcome to React Native!</Text>
          </View>

          <View style={styles.repo}> 
            <Text style={styles.headerText}>Welcome to React Native!</Text>
          </View>

          <View style={styles.repo}> 
            <Text style={styles.headerText}>Welcome to React Native!</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  repoList: {
    padding: 20
  },
  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    marginBottom: 20,
    borderRadius: 5,
  }
});
