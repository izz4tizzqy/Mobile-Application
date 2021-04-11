//Izzat Izzqy bin Jasme
//1722563
//class activity word analyzer

import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

  
export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
          
          text: '',
          consonent: 0,
          vowel: 0,
          character: 0
        };  
    }  

countCharacter(){

      let str=this.state.text;
      var total_char = str.length;

      this.setState({

          character: total_char

          });
    }

  countVowel(){
  
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  var str = this.state.text;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }

    this.setState({

        vowel: vcount

        });
  }

  }

  countConsonent(){
  
    var conso_list = 'bcdfghjklmnpqrtsvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    var vcount2 = 0;
    var str = this.state.text;
    
    for(var x = 0; x < str.length ; x++)
    {
      if (conso_list.indexOf(str[x]) !== -1)
      {
        vcount2 += 1;
      }
  
      this.setState({
  
          consonent: vcount2
  
          });
    }
  
    }

    
    render() {  
        return (  
          

            <View style={styles.container}>  

             <Text style={styles.header}>-WORD ANALYZER- {"\n"} </Text>

                <TextInput
                  style={styles.textinput}
                  value={this.state.text}
                  placeholder="Enter your word here to be analyzed!"  
                  textalign= 'center'
                  onChangeText={text => this.setState({ text })}
                />
               

                <Button style={styles.button} onPress={() => {this.countCharacter(), this.countVowel(), this.countConsonent()}}
                  title="Analyze" 
                />

              <Text style={styles.contents}>{"\n"}Your word is: {this.state.text}</Text>
              <Text style={styles.contents}>Number of Consonents: {this.state.consonent} </Text>
              <Text style={styles.contents}>Number of Vowels: {this.state.vowel} </Text>
              <Text style={styles.contents}>Number of Characters: {this.state.character} </Text> 
                
            </View>  
        );  
    }  
}  

const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  backgroundColor: '#c5e7eb',

  }, 
  
  header: {
    marginTop: 60,
 fontSize: 30, 
 textAlign: 'center', 
 margin: 10,
 marginBottom: 10,
 },
 
 contents: {
 textAlign: 'center', 
 color: '#1a2526', 
 marginBottom: 5,
 },

 textinput: {

  height: 40, 
  width: 300,
  borderColor: 'black', 
  borderWidth: 0.5 ,
  marginBottom: 20
 },

 button: {

  height: 40, 
  width: '70',
  marginTop: 10,
  padding: 10
 
 }
})
