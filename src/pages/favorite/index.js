import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorit = () => {
  return (
    <View style={styles.container}>
      <Text>Favorit</Text>
    </View>
  )
}

export default Favorit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBFBFB'
  }
})