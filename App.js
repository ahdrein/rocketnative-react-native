import React, {Component} from 'react';
import { 
  Platform,
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Repo from './componets/repo';
import {NewRepoModal} from './componets/newRepoModal';

export default class App extends Component {
state = {
  modalVisible: false,
  repos: [
    {
      id: 1,
      thumbnail: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjbqcbWysLcAhWKgpAKHRHkBCwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.blackhatworld.com%2Fseo%2Fhuge-list-of-traffic-sources.642753%2F&psig=AOvVaw0bkJcJMMUhy1nLPpbTQb7M&ust=1532894340227300',
      title: 'rocketseat.com.br',
      author: 'rocketseat',
    }, 
    {
      id: 2,
      thumbnail: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjbqcbWysLcAhWKgpAKHRHkBCwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.blackhatworld.com%2Fseo%2Fhuge-list-of-traffic-sources.642753%2F&psig=AOvVaw0bkJcJMMUhy1nLPpbTQb7M&ust=1532894340227300',
      title: 'rocketnative',
      author: 'diego3g',
    }
  ]
}

async componentDidMount() {
  const repos = JSON.parse(await AsyncStorage.getItem('@minicurso:repositories')) || []

  this.setState({ repos })
}

 _addRepository = async (newRepoText) => {
  const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`)
  const reponse = repoCall.json()

  const repository = { 
    id: response.id,
    thumbnail: response.thombnail,
    title: response.name,
    author: response.owner.login
  }

  this.setState({
    modalVisible: false,
    repos: [
      ...this.state.repos,
      repository
    ]
  })

  await AsyncStorage.setItem('@minicurso:repositories', JSON.stringify(this.state.repos))
 }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.headerText}>Welcome to React Native!</Text>
          <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => 
              <Repo key={repo.id} data={repo}/> )}
        </ScrollView>

        <NewRepoModal 
          onCancel={() => this.setState({ modalVisible: flase})} 
          onAdd={this._addRepository}
          visible={this.state.modalVisible}/>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
