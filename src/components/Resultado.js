import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const cara = require('../img/moeda_cara.png');
const coroa = require('../img/moeda_coroa.png');

export default class SobreJogo extends Component {
  constructor(props) {
    super(props);

    this.state = { resultado: '' }
  }

  componentWillMount() {
    const numAleatorio = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';

    if(numAleatorio === 0){
      caraOuCoroa = 'cara';
    } else {
      caraOuCoroa = 'coroa';
    }
     
    this.setState({resultado: caraOuCoroa });
  }

	render() {
    if(this.state.resultado === 'cara'){
      return (
        <View style={styles.container}>
          <Image source={cara} />
        </View>
      )
    } else {
        return (
        <View style={styles.container}>
          <Image source={coroa} />
        </View>
      )
    } 
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
    alignItems: 'center',
    justifyContent: 'center'
  }
})