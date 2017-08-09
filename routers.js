import React from 'react'
import { Scene, Router } from 'react-native-router-flux'


const Scenes = [
  { key: 'Contactupload', component: 'ContactUpload', title: 'Contact' },
  { key: 'groupupload', component: 'GroupUpload', title: 'Group' }
]

const renderScenes = (sceneArr = [], module) => {
  return sceneArr.map((value, index) => {
    return(<Scene key={value.key} component={module[value.component]} title={value.title}/>)
  })
}

const Routes = () => {
  return (
    <Router hideNavBar>
      {renderScenes(Scenes, scene)}
    </Router>
  )
}

export default Routes