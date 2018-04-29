import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('./src/img/logo.png');
const btnJogar = require('./src/img/botao_jogar.png');
const btnSobreJogo = require('./src/img/sobre_jogo.png');
const btnOutrosJogos = require('./src/img/outros_jogos.png');

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>

        </View>
        <View style={{backgroundColor: '#5cb191db', flex: 1}}>
          <View style={styles.container}>
            <View>
                <Image source={logo}/>
            </View>

            <View>
              <TouchableHighlight onPress={() => { Actions.resultado() }}>
                <Image source={btnJogar} style={{marginTop: 30}}/>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.footer}>
           <TouchableHighlight onPress={() => { Actions.sobreJogo() }}>
              <Image source={btnSobreJogo} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { Actions.outrosJogos() }}>
              <Image source={btnOutrosJogos} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'space-between',
    marginBottom: 10
  }
});
