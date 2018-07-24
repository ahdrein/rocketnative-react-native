import React, { Component } from 'react'
import { Image, StyleSheet, Text, View} from 'react-native';

export class Repo extends Component {
  render() {
    return (
        <View style={styles.repo}>
            <Image style={styles.repoImage} source={{ uri:''}} />
            <View style={styles.repoInfo}>
                <Text style={styles.repoTitle}>rocketseat.com.br</Text>
                <Text style={styles.repoAuthor}>rocketseat</Text>
            </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
    repoImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    repo: {
      padding: 20,
      backgroundColor: '#FFF',
      marginBottom: 20,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
    }, 
    repoInfo: {
        marginLeft: 10,
    },
    repoTile: {
        fontWeight: 'bold',
        color: '#333'
    },
    repoAuthor: {
        fontSize: 12,
        color: '#999',
    }
  });
  

export default Repo
