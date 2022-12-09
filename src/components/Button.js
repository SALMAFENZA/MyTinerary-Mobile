import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button({navigation}) {
    const title = 'Lets Go!' 
    const pressBtn = () => {
        navigation.navigate('Cities')
    }
    return (
        <View style={{ alignItems:'center'}}>
        <Pressable style={styles.button} >
        <Text style={styles.text} onPress={pressBtn}>{title}</Text>
        </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
    margin: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#EF50B7',
    width: '50%',
    borderRadius: 12
},
    text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#DFDFDF',
},
});