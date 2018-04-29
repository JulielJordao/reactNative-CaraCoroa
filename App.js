import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
                <Image source={btnJogar} style={{marginTop: 30}}/>
            </View>
          </View>
          <View style={styles.footer}>
            <Image source={btnSobreJogo} />
            <Image source={btnOutrosJogos} />
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
