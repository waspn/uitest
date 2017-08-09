import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const ContactUpload = () => {
  return (
    <View>
      <Text> Upload Contact </Text>
      <Button onPress={Actions.pop()} title='Back' />
    </View>
  )
}

export default ContactUpload
