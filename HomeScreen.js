import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: '#74b543', fontSize: 25, fontWeight: 'bold' }}>
                    App html en WebView
                </Text>

                <TouchableHighlight
                    style={styles.botones}
                    onPress={() =>
                        this.props.navigation.navigate('WebView', {
                            sitio: 'casablanca',
                        })
                    }>
                    <Text style={styles.texto}>Ver Página</Text>
                </TouchableHighlight>

               
            </View>
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
    botones: {
        height: 40,
        width: 300,
        borderRadius: 100,
        backgroundColor: '#debd47',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 30,
    },
});