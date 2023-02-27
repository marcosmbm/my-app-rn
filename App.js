import {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Repositories from './src/components/Repositories';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/marcosmbm/repos')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      setRepositories(json)
    })
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Repositórios</Text>
      <Repositories
        repositories={repositories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    paddingTop: 30
  },
  title:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
