import { Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const index = () => {
  const [input,setInput] = useState('')

  const addtodo = ()=>{
    console.log(input);
    
  }
  return (
    <SafeAreaView style ={styles.container}>
      <Text style ={styles.text}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
      />

      <TouchableOpacity style={styles.button} onPress={addtodo}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
  },
  text : {
    color: "black",
    fontSize: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})

export default index