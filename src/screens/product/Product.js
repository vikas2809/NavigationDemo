import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Product extends Component {

    static navigationOptions = () => {
        return {
          title: 'Product',
        };
    };
    
    render(){
        return(
            <View style={styles.container}>
                <Text>Product</Text>
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