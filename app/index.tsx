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
      placeholder='Enter your Todo'
        style={styles.input}
        onChangeText={setInput}
        value={input}
      />

      <TouchableOpacity style={styles.button} onPress={addtodo}>
        <Text style = {styles.btnText}>Press Here</Text>
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    width : 300,
    padding: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    width : 300,
  },
  btnText : {
    color: 'white',
  }
})

export default index