import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Router, Scene, Actions } from 'react-native-router-flux';

import AppPricipal from './App';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key='paginaInicial' component={AppPricipal} initil title="Home"/>
    <Scene key='sobreJogo' component={SobreJogo} title="About"/>
    <Scene key='outrosJogos' component={OutrosJogos} title="Other Games"/>
    <Scene key='resultado' component={Resultado} title="Result"/>
  </Scene>
)

export default class App extends Component {
  render(){
    return (
      <Router sceneStyle={{paddingTop: 50, alignContent:'center'}} scenes={scenes}/>
    );
  }
}

/*
* Original 
*/
// import App from './app';

AppRegistry.registerComponent('caraCoroa', () => App);
