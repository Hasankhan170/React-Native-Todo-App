import { Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, View } from 'react-native'
import React, { useState } from 'react'


const index = () => {
  const [input,setInput] = useState('')
  const [todo,setTodo] = useState<string[]>([])

  const addtodo = ()=>{
    if(input.trim() === "" || null){
      alert('Please Enter a Todo')
      return
    }
    console.log(input);
    todo.push(input)
    setTodo([...todo])
    setInput('')
  }

  const deleteTodo = (index:number)=>{
    todo.splice(index,1)
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

      <TouchableOpacity style={styles.button} onPress={addtodo} activeOpacity={0.5}>
        <Text style = {styles.btnText}>Press Here</Text>
      </TouchableOpacity>
      
      {
        todo.length > 0 ? <FlatList
        style = {styles.innerText}
        data={todo}
        renderItem={({item,index})=>{
          return <View style= {styles.item}>
            <Text style ={{fontSize:20}}>{item}</Text>
            <TouchableOpacity style={styles.Listdelete} 
            onPress={()=>{deleteTodo(index)}}
              activeOpacity={0.5}
            >
              <Text style= {{color: "white"}}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Listedit} 
              activeOpacity={0.5}
            >
              <Text style= {{color: "white"}}>Edit</Text>
            </TouchableOpacity>
          </View>
        }}
      />
      : <Text style= {{
        color: "black",
        marginBottom: 20,
        marginTop: 20,
      }}>Item Not Found...</Text> } 
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
    width : 300,
    justifyContent : 'center',
    alignItems : 'center'
  },
  innerText: {
    marginTop: 20,
  },
  Listdelete :{
    backgroundColor :'red',
    padding: 10,
    width : 300,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 5,
    margin:5
  },
  Listedit: {
    backgroundColor :'green',
    padding: 10,
    width : 300,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 5,
    margin:5
  }
})

export default index