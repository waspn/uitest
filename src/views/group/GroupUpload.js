import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GroupUpload = () => {
  return (
    <View>
      <Text> Upload Group Contact </Text>
      <Button onPress={Actions.pop()} title='Back' />
    </View>
  )
}

export default GroupUpload
