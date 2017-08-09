import React, { Component } from 'react'
import styled from 'styled-components/native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const imgsrc='https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Linkin_Park%2C_One_More_Light%2C_album_art_final.jpeg/220px-Linkin_Park%2C_One_More_Light%2C_album_art_final.jpeg'
const status = 'online'

export default class uichat extends Component {
  render() {
    return (
      <ContainerView>
        <WelcomeText> Welcome to React Native! </WelcomeText>

        <Selection color='lightblue' >
          <SelectText position='left'> Default Button </SelectText> 
        </Selection>
        <Selection color='lightgreen' >
          <SelectText position='center'> Success Button </SelectText> 
        </Selection>
        <Selection color='orange' >
          <SelectText position='right'> Warning Button </SelectText> 
        </Selection>
        
        <Text> Recent Chats </Text>
        <ContactItem>
          <Status> ONLINE </Status>
          <Text> HOLA </Text>
        </ContactItem>
        
      </ContainerView>
    );
  }
}

const ContainerView = styled.View `
  flex: 1;
  padding: 15px 0 10px; 
  justify-content: flex-start;
  background-color: #F5FCFF;
`

const WelcomeText = styled.Text `
  color: orange;
  fontSize: 25;
  margin: 15px;
`
const Selection = styled.TouchableOpacity `
  width: 100%;
  margin: 3px 0;
  padding: 10px;
  background-color: ${ props => props.color };
`

const SelectText = styled.Text `
  align-self: ${ 
    props => props.position === 'center' ? 'center' : 
    props.position === 'left' ? 'flex-start' : 'flex-end' 
  };
  color: grey;
`
const ContactItem = styled.View `
  justify-content: center;
  height: 78px;
  padding: 15px;
  margin: 15px;
  padding: 0 15px;
  background-color: lightgrey;
`
const Status = styled.Text `
  color: green
`

AppRegistry.registerComponent('uichat', () => uichat);
