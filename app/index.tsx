import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView style ={styles.container}>
      <Text style ={styles.text}>Hello World</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems: 'center'
  },
  text : {
    color: "black",
    fontSize: 24,
    marginTop: 200
  }
})

export default index