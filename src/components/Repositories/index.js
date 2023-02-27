import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Linking} from 'react-native';

export default function Repositories({repositories}) {

    function openRepository (repo){
        Linking.openURL(repo.html_url);
    }

    function Repository({data}){
        return (
            <TouchableOpacity 
                style={styles.listItemContainer}
                onPress={() => openRepository(data)}
            > 
                <Text style={styles.listItem}>{data.name}</Text>
            </TouchableOpacity>
        )
    }

  return (
   <View style={styles.container}>
        <FlatList
            data={repositories}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => <Repository data={item}/>}
        />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
        width: '100%'
    },
    listItemContainer:{
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10
    },
    listItem: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
