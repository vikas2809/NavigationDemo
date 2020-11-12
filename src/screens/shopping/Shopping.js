import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Shopping extends Component {
    
    static navigationOptions = () => {
        return {
          title: 'Shopping',
        };
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>Shopping</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})