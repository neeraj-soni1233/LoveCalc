import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import DisplayLove from './component/Displaylove'



class App extends React.Component {

  state = {
    fname: '',
    sname: '',
    result:'loading'

  }

  submit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, 
    {

	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "70860fe386mshc776894742fb2bep148d82jsn46765ce2e0c1"
	}
}).then(res=>res.json()).then
(res2=>{
  console.log(res2)
  this.setState({
    result :res2
  })
})

  }

  render() {
    return (

      <View style={styles.container}>

        <Appbar.Header>
          <Appbar.Content
            title="Love Calculater"

          />

        </Appbar.Header>
        <TextInput
          label='FirstName'
          value={this.state.fname}
          onChangeText={text => this.setState({ fname :text})}
        />
        <TextInput
          label='SecondName'
          value={this.state.sname}
          onChangeText={text => this.setState({ sname :text})}
        />
        
        <Button icon = ""
         mode="contained"
         style={{margin:10}}
          onPress={this.submit.bind(this)
         }>
          Calculate
  </Button>
  <DisplayLove data = {
    this.state.result
  }/>  

      </View>
    );
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
