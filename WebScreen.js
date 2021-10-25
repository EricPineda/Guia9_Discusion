import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebScreen extends React.Component {
  
render() {

   const PolicyHTML = require('./assets/html/pagina');
  

  // console.log("Archivo JS: " + PolicyHTML.default);
    return (
      

            <WebView
            originWhitelist={['*']} 
            source={{html:PolicyHTML.default, baseUrl:'./assets/html'}} 
  style={{flex: 1}}
   //Enable Javascript support
   javaScriptEnabled={true}
   //For the Cache
domStorageEnabled={true}
 />
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    webSize: {
        width: '100%',
        height: '100%',
    },
});