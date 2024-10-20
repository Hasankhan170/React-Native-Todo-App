import { Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, View } from 'react-native'
import React, { useState } from 'react'


const index = () => {
  const [input,setInput] = useState('')
  const [todo,setTodo] = useState<string[]>([])

  const addtodo = ()=>{
    console.log(input);
    todo.push(input)
    setTodo([...todo])
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
      
      {
        todo.length > 0 ? <FlatList
        style = {styles.innerText}
        data={todo}
        renderItem={({item,index})=>{
          return <View style= {styles.item}>
            <Text>{item}</Text>
          </View>
        }}
      />
      : <Text>Item not fund</Text> } 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    marginTop : 20,
  },
  text : {
    color: "black",
    fontSize: 24,
    marginBottom: 20,
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
  },
  item : {
    backgroundColor : 'lightgray',
    padding: 10,
    marginBottom: 10,
    width : 300,
    justifyContent : 'center',
    alignItems : 'center'
  },
  innerText: {
    marginTop: 20,
    marginBottom: 20,
  }
})

export default index